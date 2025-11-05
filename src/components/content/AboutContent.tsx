import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";
import { useState } from "react";

export const AboutContent = () => {
  const { ref, isInView } = useScrollFadeIn();
  const skills = [
    { name: "HTML", icon: "/svg/html-5-svgrepo-com.svg" },
    { name: "CSS", icon: "/svg/css-3-svgrepo-com.svg" },
    { name: "JavaScript", icon: "/svg/javascript-svgrepo-com.svg" },
    { name: "TypeScript", icon: "/svg/typescript-icon-svgrepo-com.svg" },
    { name: "React", icon: "/svg/react-svgrepo-com.svg" },
    { name: "Vite", icon: "/svg/vite.svg" },
    { name: "Next.js", icon: "/svg/next-js-svgrepo-com.svg" },
    { name: "PHP", icon: "/svg/php.svg" },
    { name: "Laravel", icon: "/svg/laravel.svg" },
    { name: "Node.js", icon: "/svg/node-js-svgrepo-com.svg" },
    { name: "Express.js", icon: "/svg/express-svgrepo-com.svg" },
    { name: "Python", icon: "/svg/python.svg" },
    { name: "PostgreSQL", icon: "/svg/postgresql-logo-svgrepo-com.svg" },
    { name: "Git/GitHub", icon: "/svg/git-svgrepo-com.svg" },
  ];

  const baseSkills = [...skills, ...skills, ...skills]; // Duplicate for seamless loop

  const xTranslation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const speed = 0.1; // Adjust scroll speed here

  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      let moveBy = delta * speed;
      if (xTranslation.get() <= -((baseSkills.length / 3) * 160)) { // 160px is approx width of a skill card + margin
        xTranslation.set(0);
      }
      xTranslation.set(xTranslation.get() - moveBy);
    }
  });

  const x = useTransform(xTranslation, (v) => `${v}px`);

  return (
    <div ref={ref} className="h-full overflow-auto bg-white pt-4 sm:pt-6 md:pt-8">
      <div className="md:max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-600 mb-6 sm:mb-8">
            Software Engineering & Web Development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {/* Profile Image Placeholder */}
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-4 sm:p-6 h-full flex items-center justify-center border-2 border-blue-200">
                <div className="text-center">
                  <img
                    src="/img/avatar.jpg"
                    alt="Profile"
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto rounded-full border-4 border-white shadow-lg"
                  />
                </div>{" "}
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 h-full">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  I am Suliman Yousef, a Computer Science graduate with a strong
                  foundation in software engineering and web development. I have
                  a deep passion for technology and enjoy turning ideas into
                  practical digital solutions that create real impact.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  My journey includes working on various projects that enhanced
                  my skills in designing, developing, and maintaining modern web
                  applications. I thrive in problem-solving environments and
                  always seek to write clean, efficient, and maintainable code.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  I stay up-to-date with the latest industry trends and
                  constantly challenge myself through learning, building, and
                  collaborating in team-based or independent projects.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Skills & Technologies
            </h3>
            <div className="relative w-full overflow-hidden py-4">
              <motion.div
                className="flex w-max"
                style={{ x }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {baseSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-32 sm:w-36 md:w-40 bg-white border-2 border-gray-200 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-blue-500 hover:shadow-lg transition-all group mx-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* CTA Buttons
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.button
              className="flex-1 px-6 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md text-base sm:text-lg min-h-[48px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.button>
            <motion.button
              className="flex-1 px-6 py-3 sm:py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md text-base sm:text-lg min-h-[48px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.button>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};
