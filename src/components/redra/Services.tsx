import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingBag, Cpu } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Lightning-fast websites & web apps with modern stacks — React, Next.js, edge runtimes.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native-feeling iOS & Android apps with seamless backends, analytics and auth.",
    tags: ["React Native", "Swift", "Kotlin"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Conversion-optimised storefronts with secure checkout, CMS and headless commerce.",
    tags: ["Shopify", "Stripe", "Headless"],
  },
  {
    icon: Cpu,
    title: "Custom Software",
    desc: "Bespoke internal tools, SaaS platforms and AI-powered systems built for your workflow.",
    tags: ["SaaS", "AI", "APIs"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-mono uppercase tracking-wider">
            // Services
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Everything you need to <span className="text-gradient">ship & scale</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four core capabilities. One senior team. Outcomes you can measure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative glass-card rounded-2xl p-7 hover:border-primary/50 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:glow-primary transition-all">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};