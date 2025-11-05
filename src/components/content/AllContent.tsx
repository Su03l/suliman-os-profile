import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Add Icon
import { useEffect, useState } from "react"; // Add Hooks

import { HomeContent } from "./HomeContent";
import { AboutContent } from "./AboutContent";
import { ResumeContent } from "./ResumeContent";
import { ServicesContent } from "./ServicesContent";
import { ProjectsContent } from "./ProjectsContent";
import { ContactContent } from "./ContactContent";
import { Footer } from "@/components/Footer";

export const AllContent = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const scrollableDiv = document.getElementById("window-content-scrollable");

    if (scrollableDiv) {
      const handleScroll = () => {
        setShowScrollTop(scrollableDiv.scrollTop > 100);
      };

      scrollableDiv.addEventListener("scroll", handleScroll);

      return () => {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollToTop = () => {
    const scrollableDiv = document.getElementById("window-content-scrollable");
    if (scrollableDiv) {
      scrollableDiv.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Home Section */}
      <section id="home" className="w-full h-screen">
        <HomeContent />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutContent />
      </section>

      {/* Resume Section */}
      <section id="resume">
        <ResumeContent />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesContent />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsContent />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactContent />
      </section>
      <Footer />

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </div>
  );
};
