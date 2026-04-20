import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/redra-logo.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border mt-20">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="Redra Tech"
            className="h-12 w-auto drop-shadow-[0_0_18px_hsl(var(--primary)/0.4)]"
          />
          <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
            Building digital solutions that work — from idea to launch and
            beyond. Trusted by founders and enterprises worldwide.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">App Development</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">E-commerce</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Custom Software</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#why-us" className="hover:text-primary transition-colors">Why Us</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Redra Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};