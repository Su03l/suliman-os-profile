import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Send,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in";

export const ContactContent = () => {
  const phoneNumber = "+966590128804";
  const emailAddress = "sulimany662@gmail.com";
  const { ref, isInView } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className="flex flex-col gap-8 md:max-w-7xl mx-auto p-4 sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground relative inline-block pb-4">
          Contact
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary"></span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mt-6">
          Let's connect and discuss your project
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:translate-x-2 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-2 text-foreground text-lg">
                    Email
                  </h3>
                  <p className="text-muted-foreground text-sm break-all">
                    {emailAddress}
                  </p>
                </div>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild className="py-2 px-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Email
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:translate-x-2 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-2 text-foreground text-lg">
                    Phone
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    +966 59 012 8804
                  </p>
                </div>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild className="py-2 px-3">
                <a href={`tel:${phoneNumber}`} className="flex items-center">
                  <PhoneCall className="mr-2 h-4 w-4" /> Call Me
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="py-2 px-3">
                <a
                  href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Send me in WhatsApp
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 p-6 rounded-xl bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:translate-x-2 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold mb-2 text-foreground text-lg">
                Location
              </h3>
              <p className="text-muted-foreground text-sm">
                Medina - Saudi Arabia
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-xl bg-blue-50 border-2 border-blue-200"
          >
            <h3 className="font-semibold mb-6 text-foreground text-xl text-center">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://twitter.com/su05l"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <Twitter className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/suliaman-yousef-36265a320"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://github.com/Su03l"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <Github className="w-6 h-6 text-primary" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center p-8 rounded-xl bg-blue-50 border-2 border-blue-200 text-center h-full"
        >
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Button
            size="lg"
            asChild
            className="min-h-[48px] px-8 bg=[#0080FF] hover:bg-[#0070E0] text-white font-medium rounded-[4px] transition-colors transition-transform duration-300 hover:scale-125"
          >
            <a href="mailto:yousefsulimanfci@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Send me an email
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
