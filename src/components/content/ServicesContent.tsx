import { motion } from "framer-motion";
import { Code2, Server, Lightbulb, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";

export const ServicesContent = () => {
  const { ref, isInView } = useScrollFadeIn();
  const services = [
    {
      icon: Code2,
      title: "Front-end Development",
      description:
        "Building responsive and interactive user interfaces using HTML, CSS, JavaScript, and React. Creating seamless user experiences with modern front-end technologies.",
      tags: [
        "Responsive Design",
        "Cross-Browser",
        "Performance",
        "Accessibility",
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications using Node.js and Express. Designing and developing RESTful APIs and managing databases with PostgreSQL for modern web applications.",
      tags: ["API Development", "Database Design", "Auth", "Cloud Integration"],
    },
    {
      icon: Lightbulb,
      title: "Software Engineering",
      description:
        "Applying best practices to design, develop, test, and maintain reliable software systems. Emphasizing code quality, scalability, and maintainability throughout the development lifecycle.",
      tags: [
        "Requirements Analysis",
        "Architecture",
        "Testing & QA",
        "Version Control",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design from wireframes to high-fidelity prototypes using Figma and design systems.",
      tags: ["Wireframing", "Prototyping", "Design Systems"],
    },
  ];

  return (
    <div ref={ref} className="flex flex-col gap-8 md:max-w-7xl mx-auto p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground relative inline-block pb-4">
          Services
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary"></span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mt-6">
          Professional software development services tailored to your needs
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-primary/20 hover:border-primary/30 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex flex-col gap-4 relative z-10">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all mx-auto">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12 p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50"
      >
        <h3 className="text-2xl font-semibold mb-4 text-foreground">
          Ready to Start Your Project?
        </h3>
        <p className="text-muted-foreground mb-6 text-base max-w-xl mx-auto">
          Let's discuss how I can help bring your ideas to life
        </p>
        <a
          href="https://suliman-yousef-link-tree.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="glass"
            className="min-h-[48px] px-8 bg-[#0080FF] hover:bg-[#0070E0] text-white font-medium rounded-[4px] transition-colors transition-transform duration-300 hover:scale-125 "
          >
            Contact Me
          </Button>
        </a>
      </motion.div>
    </div>
  );
};
