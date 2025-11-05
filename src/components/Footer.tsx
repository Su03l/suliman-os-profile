import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Phone,
  MapPin,
  Send,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const phoneNumber = "+966590128804";
  const emailAddress = "sulimany662@gmail.com";

  return (
    <footer className="bg-glass-effect p-8 text-foreground mt-8 rounded-t-lg border-t-2 border-blue-500">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-bold p-2 border border-blue-500 rounded-lg bg-blue-100/30 backdrop-blur-sm inline-block transition-transform duration-300 hover:rotate-[15deg] hover:scale-105">
              SY
            </h3>
            <p className="text-2xl text-gray-600">Suliman Yousef</p>
          </div>

          <p className="text-gray-600 mb-4">
            Software Engineer passionate about creating innovative digital
            solutions.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/su03l"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/suliman-yousef"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://twitter.com/su05l"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Twitter className="w-6 h-6 text-primary" />
            </a>
            <a
              href="mailto:sulimany662@gmail.com"
              className="w-12 h-12 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("resume")}
                className="hover:text-primary transition-colors"
              >
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-primary transition-colors"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li>Front-end Development</li>
            <li>Backend Development</li>
            <li>Software Engineering</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center hover:text-blue-500 hover:underline underline-offset-2 transition-colors">
              <Twitter size={18} className="mr-2" />{" "}
              <a
                href="https://twitter.com/su05l"
                target="_blank"
                rel="noopener noreferrer"
              >
                @su05l
              </a>
            </li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center hover:text-blue-500 hover:underline underline-offset-2 transition-colors cursor-pointer">
                  <Mail size={18} className="mr-2" />{" "}
                  <span>{emailAddress}</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
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
                <div className="flex items-center hover:text-blue-500 hover:underline underline-offset-2 transition-colors cursor-pointer">
                  <Phone size={18} className="mr-2" />{" "}
                  <span>+966 59 012 8804</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href={`tel:${phoneNumber}`} className="flex items-center">
                    <PhoneCall className="mr-2 h-4 w-4" /> Call Me
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Send me in
                    WhatsApp
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <li className="flex items-center">
              <MapPin size={18} className="mr-2" /> Medina - Saudi Arabia
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Suliman Yousef. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
