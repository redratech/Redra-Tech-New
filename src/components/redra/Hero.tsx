import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-muted-foreground mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Future-ready engineering studio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
        >
          Building{" "}
          <span className="text-gradient relative">
            Digital Solutions
            <span className="absolute -inset-2 bg-primary/10 blur-2xl -z-10" />
          </span>
          <br />
          That Work.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          We design and engineer high-performance web, mobile and custom software
          for startups and enterprises ready to ship the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium animate-pulse-glow text-sm sm:text-base"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full glass-card text-foreground font-medium hover:border-primary/50 transition-all text-sm sm:text-base"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};