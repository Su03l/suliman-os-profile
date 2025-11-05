import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, User, FileText, Briefcase, FolderOpen, Mail, Power, RotateCcw, Clock, Volume2, Wifi, Battery, LayoutGrid } from 'lucide-react';
import { useWindowStore } from '@/store/windowStore';

export const Taskbar = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [time, setTime] = useState(new Date());
  const { windows, restoreWindow, openWindow } = useWindowStore();

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const apps = [
    { id: 'all', title: 'All', Icon: LayoutGrid },
    { id: 'home', title: 'Home', Icon: Home },
    { id: 'about', title: 'About', Icon: User },
    { id: 'resume', title: 'Resume', Icon: FileText },
    { id: 'services', title: 'Services', Icon: Briefcase },
    { id: 'projects', title: 'Projects', Icon: FolderOpen },
    { id: 'contact', title: 'Contact', Icon: Mail },
  ];

  const handleRestart = () => {
    window.location.reload();
  };

  const handleShutdown = () => {
    if (confirm('Are you sure you want to close SulimanOS?')) {
      window.close();
    }
  };

  return (
    <>
      <div 
        className="fixed bottom-0 left-0 right-0 h-14 sm:h-12 z-40"
        style={{
          background: 'linear-gradient(180deg, hsl(210, 25%, 25%), hsl(210, 25%, 18%))',
          borderTop: '1px solid hsl(210, 30%, 30%)',
          boxShadow: '0 -2px 10px hsla(210, 50%, 10%, 0.3)',
        }}
      >
        <div className="h-full flex items-center px-2 sm:px-2 gap-2">
          {/* Start Button */}
          <button
            onClick={() => setShowStartMenu(!showStartMenu)}
            className="h-10 sm:h-9 px-3 sm:px-4 rounded flex items-center gap-2 text-white hover:bg-white/10 transition-colors font-semibold text-sm min-h-[44px]"
          >
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              SY
            </div>
            <span className="hidden sm:inline">Start</span>
          </button>

          <div className="w-px h-8 bg-white/20 mx-0.5" />

          {/* Open Windows */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto flex-1">
            {windows.map((win) => (
              <button
                key={win.id}
                onClick={() => restoreWindow(win.id)}
                className={`h-10 sm:h-9 px-3 rounded flex items-center gap-2 text-white text-sm transition-all flex-shrink-0 min-h-[44px] ${
                  win.isMinimized 
                    ? 'bg-white/5 hover:bg-white/10' 
                    : 'bg-gradient-to-b from-blue-500/40 to-blue-600/40 border border-blue-400/60 shadow-inner'
                }`}
              >
                <span className="text-white flex-shrink-0">{win.icon}</span>
                <span className="max-w-[80px] sm:max-w-[120px] truncate font-medium hidden sm:inline">{win.title}</span>
              </button>
            ))}
          </div>

          {/* System Tray - Moved to right */}
          <div className="flex items-center gap-2 px-2 sm:px-3 text-white/90 text-sm border-l border-white/20 min-h-[44px] ml-auto">
            <Volume2 className="w-5 h-5 hover:text-white cursor-pointer transition-colors hidden sm:block" />
            <Wifi className="w-5 h-5 hover:text-white cursor-pointer transition-colors hidden sm:block" />
            <Battery className="w-5 h-5 hover:text-white cursor-pointer transition-colors hidden sm:block" />
            <div className="w-px h-6 bg-white/20 mx-1 hidden sm:block" />
            <Clock className="w-5 h-5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="font-medium tabular-nums text-sm">
              {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>

      {/* Start Menu */}
      <AnimatePresence>
        {showStartMenu && (
          <>
            <motion.div
              className="fixed inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStartMenu(false)}
            />
            
            <motion.div
              className="fixed bottom-14 sm:bottom-12 left-2 z-50 w-80 sm:w-96 rounded-t-lg overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, hsl(210, 15%, 96%), hsl(210, 15%, 92%))',
                boxShadow: '0 8px 32px hsla(210, 50%, 15%, 0.3)',
                border: '1px solid hsl(210, 30%, 80%)',
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              {/* User Info */}
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Suliman Yousef</div>
                    <div className="text-sm text-white/80">Software Engineer</div>
                  </div>
                </div>
              </div>

              {/* Apps List */}
              <div className="p-2 max-h-96 overflow-y-auto">
                <div className="text-xs font-semibold text-gray-600 px-2 py-1 mb-1">
                  All Programs
                </div>
                {apps.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => {
                      setShowStartMenu(false);
                    }}
                    className="w-full px-3 py-3 flex items-center gap-3 hover:bg-blue-100 rounded transition-colors text-left group min-h-[48px]"
                  >
                    <div className="w-9 h-9 bg-blue-100 rounded flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <app.Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">{app.title}</span>
                  </button>
                ))}
              </div>

              {/* System Options */}
              <div className="border-t border-gray-300 p-2">
                <button
                  onClick={handleRestart}
                  className="w-full px-3 py-3 flex items-center gap-3 hover:bg-blue-100 rounded transition-colors text-left min-h-[48px]"
                >
                  <RotateCcw className="w-5 h-5 text-gray-600" />
                  <span className="text-sm sm:text-base font-medium text-gray-800">Restart</span>
                </button>
                <button
                  onClick={handleShutdown}
                  className="w-full px-3 py-3 flex items-center gap-3 hover:bg-red-100 rounded transition-colors text-left min-h-[48px]"
                >
                  <Power className="w-5 h-5 text-gray-600" />
                  <span className="text-sm sm:text-base font-medium text-gray-800">Shutdown</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
