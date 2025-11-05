import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BootScreen } from "@/components/BootScreen";
import { LoginScreen } from "@/components/LoginScreen";
import { Desktop } from "@/components/Desktop";

type Screen = "boot" | "login" | "desktop";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("boot");

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {currentScreen === "boot" && (
          <BootScreen onComplete={() => setCurrentScreen("login")} />
        )}
        {currentScreen === "login" && (
          <LoginScreen onLogin={() => setCurrentScreen("desktop")} />
        )}
        {currentScreen === "desktop" && <Desktop />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
