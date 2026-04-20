import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, Rocket, Shield } from "lucide-react";

const stats = [
  { target: 6, suffix: "+", label: "Projects Shipped" },
  { target: 5, suffix: "+", label: "Happy Clients" },
  { target: 2, suffix: "+", label: "Years Experience" },
  { target: 24, suffix: "/7", label: "Support" },
];

const pillars = [
  { icon: Code2, label: "Engineering excellence" },
  { icon: Rocket, label: "Speed to market" },
  { icon: Shield, label: "Built to scale" },
];

const CountUp = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-mono uppercase tracking-wider">
            // About Redra
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            A studio of engineers who <span className="text-gradient">ship</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Redra Tech is a senior product engineering team partnering with
            ambitious founders and enterprises. We blend strategy, design and
            modern engineering to build digital products that perform at scale,
            convert real users, and stay maintainable years after launch.
          </p>

          <div className="mt-8 space-y-3">
            {pillars.map((p) => (
              <div key={p.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg glass-card flex items-center justify-center">
                  <p.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground/90">{p.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass-card rounded-2xl p-8 hover:border-primary/40 hover:-translate-y-1 transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                <CountUp to={s.target} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};