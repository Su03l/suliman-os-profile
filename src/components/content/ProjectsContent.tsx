import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { newProjects } from "@/data/newProjects";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";

export const ProjectsContent = () => {
  const [showAll, setShowAll] = useState(false);
  const { ref, isInView } = useScrollFadeIn();
  const projectsToShow = showAll ? newProjects : newProjects.slice(0, 6);

  return (
    <div ref={ref} className="flex flex-col gap-8 md:max-w-7xl mx-auto p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground relative inline-block pb-4">
          Projects
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary"></span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mt-6">
          A selection of my recent work and personal projects
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsToShow.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group flex flex-col rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-primary/20 hover:border-primary/30 overflow-hidden"
          >
            <div className="relative aspect-video bg-muted overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-5xl font-bold">
                  {project.name.substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-xl font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <Button
                  size="sm"
                  asChild
                  className="flex-1 min-h-[44px] bg-[#0080FF] text-white font-medium rounded-[4px] hover:bg-[#0070E0] transition-colors duration-300"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Live
                  </a>
                </Button>

                <Button
                  size="sm"
                  asChild
                  className="flex-1 min-h-[44px] border-[2px] border-[#0080FF] text-[#0080FF] font-medium bg-transparent rounded-[4px] hover:bg-[#0080FF] hover:text-white transition-colors duration-300"
                >
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code className="w-4 h-4 mr-1" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <Button
          variant="outline"
          size="lg"
          onClick={() => setShowAll(!showAll)}
          className="min-h-[48px] px-8 rounded-[4px] bg-[#0080FF] hover:bg-[#0070E0] text-white font-medium transition-colors transition-transform duration-300 hover:scale-125 "
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </motion.div>
    </div>
  );
};
