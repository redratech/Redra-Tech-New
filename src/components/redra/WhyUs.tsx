import { motion } from "framer-motion";
import { Zap, Users, LineChart, Lock, Clock, Award } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Delivery", desc: "Tight sprints, weekly demos, predictable releases." },
  { icon: Users, title: "Senior Team", desc: "No juniors thrown at your project — only proven engineers." },
  { icon: LineChart, title: "Outcome-Driven", desc: "We measure success by your KPIs, not lines of code." },
  { icon: Lock, title: "Security First", desc: "Best-practice auth, encryption and compliance baked in." },
  { icon: Clock, title: "24/7 Support", desc: "Always-on monitoring and response after launch." },
  { icon: Award, title: "Built to Last", desc: "Clean architecture you can hand off and extend." },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-mono uppercase tracking-wider">
            // Why Choose Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            The advantage of working with{" "}
            <span className="text-gradient">Redra</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex gap-4 p-6 rounded-2xl border border-border hover:border-primary/40 hover:bg-card/40 transition-all"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};