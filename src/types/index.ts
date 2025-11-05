export interface WindowState {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

export interface DesktopIcon {
  id: string;
  title: string;
  icon: string;
  onClick: () => void;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  live?: string;
  code?: string;
}
