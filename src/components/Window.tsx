import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import Draggable from "react-draggable";
import { useWindowStore } from "@/store/windowStore";
import { WindowState } from "@/types";
import { useRef, useEffect, useState } from "react";

interface WindowProps {
  window: WindowState;
}

export const Window = ({ window }: WindowProps) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
  } = useWindowStore();

  const nodeRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prevState, setPrevState] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(globalThis.window.innerWidth < 768);
    checkMobile();
    globalThis.window.addEventListener("resize", checkMobile);
    return () => globalThis.window.removeEventListener("resize", checkMobile);
  }, []);

  if (window.isMinimized) return null;

  const handleDrag = (_e: any, data: { x: number; y: number }) => {
    if (!window.isMaximized) {
      updateWindowPosition(window.id, { x: data.x, y: data.y });
    }
  };

  // ✅ تكبير أو استرجاع الحجم
  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!window.isMaximized) {
      // حفظ الحالة السابقة قبل التكبير
      setPrevState({
        x: window.position.x,
        y: window.position.y,
        width: window.size.width,
        height: window.size.height,
      });

      maximizeWindow(window.id);
      updateWindowPosition(window.id, { x: 0, y: 0 });
      updateWindowSize(window.id, {
        width: globalThis.window.innerWidth,
        height: globalThis.window.innerHeight - 48,
      });
    } else {
      // استرجاع الحالة السابقة
      if (prevState) {
        updateWindowPosition(window.id, { x: prevState.x, y: prevState.y });
        updateWindowSize(window.id, {
          width: prevState.width,
          height: prevState.height,
        });
      }
      maximizeWindow(window.id);
    }
  };

  const WindowBox = (
    <div
      ref={nodeRef}
      className={`${
        isMobile ? "fixed inset-0 z-[999]" : "absolute"
      } will-change-transform`}
      style={{
        width: isMobile ? "calc(100% - 2rem)" : window.size.width,
        height: isMobile ? "calc(100vh - 6rem)" : window.size.height,
        top: isMobile ? "1rem" : window.position.y ?? 0,
        left: isMobile ? "1rem" : window.position.x ?? 0,
        zIndex: window.zIndex,
        transform: "translate3d(0, 0, 0)",
      }}
      onClick={() => focusWindow(window.id)}
    >
      <motion.div
        className="h-full flex flex-col bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Title Bar */}
        <div
          className={`window-titlebar px-2 sm:px-3 py-2 flex items-center justify-between ${
            !isMobile && !window.isMaximized ? "cursor-move" : ""
          } select-none border-b border-gray-300 bg-gradient-to-b from-white to-gray-100`}
        >
          <div className="flex items-center gap-2">
            <span className="text-gray-700">{window.icon}</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
              {window.title}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {!isMobile && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    minimizeWindow(window.id);
                  }}
                  className="p-1.5 hover:bg-blue-100 rounded transition-colors"
                  aria-label="Minimize"
                >
                  <Minus className="w-3.5 h-3.5 text-gray-700" />
                </button>

                <button
                  onClick={handleMaximize}
                  className="p-1.5 hover:bg-blue-100 rounded transition-colors"
                  aria-label="Maximize"
                >
                  <Square className="w-3.5 h-3.5 text-gray-700" />
                </button>
              </>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(window.id);
              }}
              className="p-1.5 hover:bg-red-500 hover:text-white rounded transition-colors"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div id="window-content-scrollable" className="flex-1 overflow-auto bg-white">{window.content}</div>
      </motion.div>
    </div>
  );

  // ✅ الجوال: نافذة ثابتة دائماً
  if (isMobile) return WindowBox;

  // ✅ الكمبيوتر: السحب فقط لما تكون النافذة غير مكبرة
  return window.isMaximized ? (
    WindowBox
  ) : (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-titlebar"
      onStart={() => focusWindow(window.id)}
      onDrag={handleDrag}
      cancel="button, input, textarea"
      bounds="parent"

      enableUserSelectHack={false}
    >
      {WindowBox}
    </Draggable>
  );
};
