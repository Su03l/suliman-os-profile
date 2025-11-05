import { motion } from "framer-motion";
import {
  Home,
  User,
  FileText,
  Briefcase,
  FolderOpen,
  Mail,
  LayoutGrid,
} from "lucide-react";
import { useWindowStore } from "@/store/windowStore";
import { Window } from "./Window";
import { Taskbar } from "./Taskbar";
import desktopBg from "@/assets/desktop-bg.jpg";
import { AllContent } from "./content/AllContent";
import { HomeContent } from "./content/HomeContent";
import { AboutContent } from "./content/AboutContent";
import { ResumeContent } from "./content/ResumeContent";
import { ServicesContent } from "./content/ServicesContent";
import { ProjectsContent } from "./content/ProjectsContent";
import { ContactContent } from "./content/ContactContent";

const desktopIcons = [
  { id: "all", title: "All", Icon: LayoutGrid, content: <AllContent /> },
  { id: "home", title: "Home", Icon: Home, content: <HomeContent /> },
  { id: "about", title: "About", Icon: User, content: <AboutContent /> },
  { id: "resume", title: "Resume", Icon: FileText, content: <ResumeContent /> },
  {
    id: "services",
    title: "Services",
    Icon: Briefcase,
    content: <ServicesContent />,
  },
  {
    id: "projects",
    title: "Projects",
    Icon: FolderOpen,
    content: <ProjectsContent />,
  },
  { id: "contact", title: "Contact", Icon: Mail, content: <ContactContent /> },
];

export const Desktop = () => {
  const { windows, openWindow } = useWindowStore();

  const handleIconDoubleClick = (icon: (typeof desktopIcons)[0]) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const windowWidth = 900;
    const windowHeight = 650;

    const centerX = (screenWidth - windowWidth) / 2;
    const centerY = (screenHeight - windowHeight - 48) / 2;

    openWindow({
      id: icon.id,
      title: icon.title,
      icon: <icon.Icon className="w-4 h-4" />,
      content: icon.content,
      isMinimized: false,
      isMaximized: false,
      position: {
        x: centerX + windows.length * 30,
        y: centerY + windows.length * 30,
      },
      size: { width: windowWidth, height: windowHeight },
    });
  };

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden"
      style={{
        backgroundImage: `url(${desktopBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 right-4 sm:right-auto z-10">
        <div className="grid grid-cols-3 sm:flex sm:flex-col gap-4 sm:gap-3">
          {desktopIcons.map((icon, index) => (
            <motion.button
              key={icon.id}
              className="group flex flex-col items-center gap-2 p-3 sm:p-3 rounded hover:bg-white/20 transition-all w-full sm:w-24 min-h-[88px]"
              onDoubleClick={() => handleIconDoubleClick(icon)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white border border-white/30 shadow-lg group-hover:bg-white/20 transition-all">
                <icon.Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="text-white text-xs sm:text-sm font-medium text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {icon.title}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Windows */}
      <div className="relative w-full h-full pb-14 sm:pb-12 overflow-visible">
        {windows.map((window) => (
          <Window key={window.id} window={window} />
        ))}
      </div>

      {/* Taskbar */}
      <Taskbar />
    </motion.div>
  );
};
