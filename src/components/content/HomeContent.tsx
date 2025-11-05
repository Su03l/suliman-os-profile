import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const roles = [
  "Software Engineering",
  "Web Development",
  "Front-End Development",
  "Back-End Development",
  "Full Stack Developer",
  "MERN Stack",
];

export const HomeContent = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [linesCount, setLinesCount] = useState(12);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // ✅ Lines count responsive fix
  useEffect(() => {
    const updateLines = () => {
      const width = window.innerWidth;

      if (width < 640) setLinesCount(3); // Mobile
      else if (width < 1024) setLinesCount(6); // Tablet
      else if (width < 1600) setLinesCount(12); // Laptop
      else setLinesCount(15); // Large Screens
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  // Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points: { x: number; y: number; vx: number; vy: number }[] = [];

    for (let i = 0; i < 90; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(37, 99, 235, 0.22)";
      ctx.lineWidth = 0.6;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      for (let p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#2563EB";
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Su03l",
      color: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/suliaman-yousef-36265a320",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      url: "https://twitter.com/Su05l",
      color: "hover:bg-sky-500",
    },
    {
      name: "Linktree",
      icon: ExternalLink,
      url: "https://suliman-yousef-link-tree.vercel.app/",
      color: "hover:bg-green-600",
    },
  ];

  const codeSnippets = [
    `console.log("Hello World!");`,
    `const lang = "JavaScript";`,
    `function greet(name) { return "Hi " + name; }`,
    `const sum = (a, b) => a + b;`,
    `let score = 100;`,
    `if(score > 50){ console.log("Passed"); }`,
    `const skills = ["React", "Next.js", "Node.js"];`,
    `fetch("/api/data").then(r => r.json());`,
  ];

  return (
    <div className="relative h-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      <div
        ref={codeRef}
        className="absolute inset-0 text-[10px] sm:text-xs font-mono text-blue-400/25 select-none overflow-hidden z-0"
      >
        {Array.from({ length: linesCount }).map((_, i) => (
          <div
            key={i}
            className="code-line absolute whitespace-nowrap"
            style={{
              top: `${i * 100}px`,
              left: `${10 + Math.random() * 80}%`,
            }}
          >
            {codeSnippets[i % codeSnippets.length]}
          </div>
        ))}
      </div>

      <div className="max-w-3xl w-full text-center relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Suliman Yousef
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-2">
            I'm a
          </div>

          <motion.div
            key={currentRole}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 mb-6 sm:mb-8 h-10 sm:h-12"
          >
            {roles[currentRole]}
          </motion.div>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
            Computer Science graduate passionate about Software Engineering and
            Web Development, constantly improving through hands-on projects.
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 flex-wrap">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 sm:p-4 bg-gray-100 ${social.color} rounded-lg transition-all duration-300 hover:scale-110 hover:text-white group min-w-[44px] min-h-[44px] flex items-center justify-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                title={social.name}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-base sm:text-lg min-h-[48px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.button>

          <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 px-2">
            Want to collaborate? Double-click the Contact icon to start a
            conversation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
