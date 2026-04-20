import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "₹2,499",
    cadence: "/ project",
    description: "Perfect for landing pages and small marketing sites.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "2 weeks delivery",
      "30 days support",
    ],
    cta: "Start Small",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹7,999",
    cadence: "/ project",
    description: "Full web or mobile app with backend & integrations.",
    features: [
      "Up to 20 pages or screens",
      "Custom UI/UX design",
      "Backend & database",
      "Auth & integrations",
      "Advanced SEO + analytics",
      "90 days support",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "Bespoke platforms, SaaS products and AI systems at scale.",
    features: [
      "Unlimited scope",
      "Dedicated senior team",
      "Architecture consulting",
      "DevOps & infrastructure",
      "SLA & 24/7 monitoring",
      "Ongoing partnership",
    ],
    cta: "Talk to Us",
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-mono uppercase tracking-wider">
            // Pricing
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Transparent plans, <span className="text-gradient">no surprises</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fixed-scope packages or custom partnerships — pick what fits your stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                t.highlight
                  ? "glass-card border-primary/50 glow-primary"
                  : "glass-card hover:border-primary/40"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gradient">{t.price}</span>
                {t.cadence && (
                  <span className="text-sm text-muted-foreground">{t.cadence}</span>
                )}
              </div>

              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center px-6 py-3 rounded-full font-medium transition-all ${
                  t.highlight
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
                    : "border border-border text-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};