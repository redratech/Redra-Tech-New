import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Redra Tech transformed our sports education platform with exceptional technical expertise and delivered exactly what we envisioned. Their team's dedication to quality and timely delivery exceeded our expectations.",
    name: "Raj Kumar V",
    role: "Founder, Sports Educate",
    company: "SPORTSEDUCATE",
  },
  {
    quote:
      "The leisure yacht website they created is stunning and user-friendly. Their attention to detail and understanding of our luxury brand requirements was impressive. Highly recommend their services!",
    name: "Kamalesh Srinivasan",
    role: "Founder, The Leisure Yacht",
    company: "LEISUREYACHT",
  },
  {
    quote:
      "Professional, efficient, and results-driven. They delivered our modern language school website on time and within budget. The final product perfectly represents our educational institution.",
    name: "Pradeep Kumar",
    role: "Founder, Indian School of Modern Languages",
    company: "INDIANSCHOOL",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-secondary/10 blur-[140px] rounded-full" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary text-sm font-mono uppercase tracking-wider">
            // Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Trusted by teams that <span className="text-gradient">ship</span>.
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 min-h-[320px] flex flex-col justify-between overflow-hidden">
            <Quote className="w-10 h-10 text-primary/40 shrink-0" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col justify-center py-6"
              >
                <p className="text-xl md:text-2xl text-foreground/95 leading-relaxed font-light">
                  "{t.quote}"
                </p>

                <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-primary-foreground">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-8 bg-gradient-to-r from-primary to-secondary"
                        : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Client logos - Hidden */}
        {/* <div className="mt-16">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {testimonials.map((c) => (
              <div
                key={c.company}
                className="font-mono text-lg md:text-xl tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
                {c.company}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};