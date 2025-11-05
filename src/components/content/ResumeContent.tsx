import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  FileText,
  Download,
  CheckCircle,
} from "lucide-react";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";

export const ResumeContent = () => {
  const { ref, isInView } = useScrollFadeIn();
  const certifications = [
    {
      title: "Web Application Development",
      org: "Doroob",
      year: "2025",
      description:
        "Web app development course with assessments and updated browser skills.",
    },
    {
      title: "Full Stack Web Developer",
      org: "Satar",
      year: "2024",
      description:
        "HTML, CSS, JavaScript, Git, Node.js, Express, DOM, Bootstrap, MongoDB, API, React.",
    },
    {
      title: "CSS (Basic)",
      org: "HackerRank",
      year: "2025",
      description:
        "Exploring Cascading and Inheritance, text styling fundamentals, layouts in CSS, boxing of elements.",
    },
    {
      title: "Flutter App Developer (Full Course)",
      org: "Satar",
      year: "2024",
      description: "Dart, Flutter 101-105.",
    },
    {
      title: "Android App Developer (Full Course)",
      org: "Satar",
      year: "2022",
      description:
        "Kotlin 101-104, Android 101, SQL 101, Jetpack Compose, Android Firebase.",
    },
    {
      title: "Data Analysis Course",
      org: "Satar",
      year: "2025",
      description:
        "SQL 101-103, Python 101-103, NumPy, Pandas, Power BI 101-103.",
    },
    {
      title: "Web Development Fundamentals",
      org: "IBM",
      year: "2025",
      description: "HTML, CSS, JavaScript, web basics, and deployment.",
    },
    {
      title: "UI/UX Designer Using Figma",
      org: "Satr",
      year: "2025",
      description: "UI/UX design principles using Figma.",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      org: "IBM",
      year: "2025",
      description:
        "AI concepts, machine learning, deep learning, NLP, computer vision, and AI ethics.",
    },
    {
      title: "Agile Explorers",
      org: "IBM",
      year: "2025",
      description:
        "Foundational knowledge of Agile principles with practical application.",
    },
    {
      title: "JavaScript (Basic)",
      org: "HackerRank",
      year: "2025",
      description:
        "Functions, currying, hoisting, scope, inheritance, events and error handling.",
    },
    {
      title: "JavaScript (Intermediate)",
      org: "HackerRank",
      year: "2025",
      description:
        "Design Patterns, Memory management, concurrency model, and event loops.",
    },
    {
      title: "Frontend Developer (React)",
      org: "HackerRank",
      year: "2025",
      description:
        "React, CSS, and JavaScript, building interactive and responsive web applications.",
    },
  ];

  return (
    <div className="h-full overflow-auto bg-white">
      <div ref={ref} className="md:max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Resume
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                My Professional Journey
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="/SULIMANYOUSEF.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md text-xs sm:text-sm"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="inline sm:hidden">CV</span>
                <span className="hidden sm:inline">View CV</span>
              </a>

              <a
                href="/SULIMANYOUSEF.pdf"
                download
                className="px-3 sm:px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-md text-xs sm:text-sm"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="inline sm:hidden">DL</span>
                <span className="hidden sm:inline">Download</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <section className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Education
              </h3>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-white p-4 sm:p-6 rounded-xl border-2 border-blue-200 shadow-md">
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-sm sm:text-base text-blue-600 font-semibold">
                    Taibah University
                  </p>
                </div>
                <span className="px-3 sm:px-4 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold">
                  2020 - 2025
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Medina, Saudi Arabia
              </p>
            </div>
          </section>

          {/* Certifications Timeline */}
          <section>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Certifications
              </h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-0.5 bg-blue-200" />

              <div className="space-y-4 sm:space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-10 sm:pl-16 group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1.5 sm:left-4 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 border-2 sm:border-4 border-white shadow-md group-hover:scale-125 transition-transform z-10" />

                    {/* Content Card */}
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-3 sm:p-5 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200 transition-all">
                      <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                        <div className="flex-1">
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                            {cert.org}
                          </p>
                        </div>
                        <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <section className="mt-8 sm:mt-12">
            <div className="bg-blue-50 border-2 border-blue-200 p-4 sm:p-6 rounded-xl text-center">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-xs sm:text-sm md:text-base text-gray-700">
                For detailed work experience and project summaries, please view
                the <span className="font-bold text-blue-600">Projects</span>{" "}
                section
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
