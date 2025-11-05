import { create } from "zustand";
import { WindowState } from "@/types";

interface WindowStore {
  windows: WindowState[];
  activeWindowId: string | null;
  highestZIndex: number;

  openWindow: (window: Omit<WindowState, "zIndex">) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (
    id: string,
    position: { x: number; y: number }
  ) => void;
  updateWindowSize: (
    id: string,
    size: { width: number; height: number }
  ) => void;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  activeWindowId: null,
  highestZIndex: 100,

  openWindow: (window) => {
    const { windows, highestZIndex } = get();
    const existingWindow = windows.find((w) => w.id === window.id);

    if (existingWindow) {
      set({
        windows: windows.map((w) =>
          w.id === window.id
            ? { ...w, isMinimized: false, zIndex: highestZIndex + 1 }
            : w
        ),
        activeWindowId: window.id,
        highestZIndex: highestZIndex + 1,
      });
    } else {
      set({
        windows: [...windows, { ...window, zIndex: highestZIndex + 1 }],
        activeWindowId: window.id,
        highestZIndex: highestZIndex + 1,
      });
    }
  },

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: true } : w
      ),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    })),

  maximizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    })),

  restoreWindow: (id) => {
    const { windows, highestZIndex } = get();
    set({
      windows: windows.map((w) =>
        w.id === id
          ? { ...w, isMinimized: false, zIndex: highestZIndex + 1 }
          : w
      ),
      activeWindowId: id,
      highestZIndex: highestZIndex + 1,
    });
  },

  focusWindow: (id) => {
    const { windows, highestZIndex } = get();
    set({
      windows: windows.map((w) =>
        w.id === id ? { ...w, zIndex: highestZIndex + 1 } : w
      ),
      activeWindowId: id,
      highestZIndex: highestZIndex + 1,
    });
  },

  updateWindowPosition: (id, position) =>
    set((state) => ({
      windows: state.windows.map((w) => (w.id === id ? { ...w, position } : w)),
    })),

  updateWindowSize: (id, size) =>
    set((state) => ({
      windows: state.windows.map((w) => (w.id === id ? { ...w, size } : w)),
    })),
}));
