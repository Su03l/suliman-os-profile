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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 🔵 Animate tech background (blue network)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points: { x: number; y: number; vx: number; vy: number }[] = [];

    // ✅ Increased to 110 points for more distributed lines
    for (let i = 0; i < 110; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Lines (light blue)
      ctx.strokeStyle = "rgba(37, 99, 235, 0.25)";
      ctx.lineWidth = 0.7;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Points
      for (let p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
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

  // 💻 Floating code effect
  useEffect(() => {
    const codes = codeRef.current?.querySelectorAll(".code-line");
    if (codes) {
      codes.forEach((el, i) => {
        gsap.to(el, {
          y: "-=100vh",
          repeat: -1,
          duration: 15 + i * 2,
          ease: "none",
          delay: i * 3,
        });
      });
    }
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
    `let score = 100;`,
    `if(score > 50){ console.log("Passed"); }`,
    `const skills = ["React", "Next.js", "Node.js"];`,
    `fetch("/api/data").then(r => r.json());`,
    `for(let i=0; i<5; i++){ console.log(i); }`,
    `console.log(["Frontend", "Backend", "Full-Stack"].join(" | "));`,
    `const user = { name: "Sam", age: 22 };`,
    `const sum = (a, b) => a + b;`,
    `localStorage.setItem("theme", "dark");`,
    `const isLoggedIn = true;`,
    `try { JSON.parse("invalid"); } catch(e) { console.error(e); }`,
    `new Promise(res => setTimeout(res, 1000));`,
    `Array.from({length: 3}, (_, i) => i + 1);`,
    `["JS","TS","React"].map(t => t.toLowerCase());`,
    `Math.floor(Math.random() * 10);`,
    `document.querySelector("#app");`,
    `class Dev { constructor(n){ this.name=n; } }`,
    `const date = new Date().toLocaleDateString();`,
    `"Hello".toUpperCase();`,
    `Object.keys({a:1,b:2,c:3});`,
    `const double = n => n * 2;`,
    `sessionStorage.clear();`,
    `[1,2,3].filter(n => n % 2 === 0);`,
    `const username = prompt("Enter your name:");`,
    `Number.isInteger(42);`,
    `"Full Stack Dev".split(" ");`,
    `Math.max(5, 9, 2, 11);`,
    `const apiURL = process.env.API_URL;`,
    `await fetch("/users").then(r => r.json());`,
    `window.scrollTo({ top: 0, behavior: "smooth" });`,
    `setInterval(() => console.log("Tick"), 1000);`,
    `const unique = [...new Set([1,1,2,3,3])];`,
  ];

  return (
    <div className="relative h-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 💻 Floating code lines */}
      <div
        ref={codeRef}
        className="absolute inset-0 text-[11px] sm:text-xs font-mono text-blue-400/30 select-none overflow-hidden z-0"
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="code-line absolute whitespace-nowrap"
            style={{
              top: `${i * 80}px`,
              left: `${Math.random() * 95}%`,
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
