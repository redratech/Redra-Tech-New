import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// EmailJS config — using environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+81", label: "🇯🇵 +81" },
  { code: "+86", label: "🇨🇳 +86" },
];

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent! We'll be in touch within 24h.");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Could not send message. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[140px] rounded-full" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-start space-y-12 lg:space-y-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-mono uppercase tracking-wider">
            // Get in Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Let's build something <span className="text-gradient">remarkable</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us about your project. We'll respond within one business day with
            next steps and a free scoping call.
          </p>

          <div className="mt-10 space-y-4 sm:space-y-5">
            {[
              { icon: Mail, label: "info.redratech@gmail.com", href: "mailto:info.redratech@gmail.com" },
              { icon: Phone, label: "+91 76391 57729", href: "tel:+917639157729" },
              { icon: MapPin, label: "Remote · India", href: null as string | null },
            ].map((c) => (
              c.href ? (
                <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl glass-card flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <c.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90 group-hover:text-primary transition-colors">{c.label}</span>
                </a>
              ) : (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl glass-card flex items-center justify-center">
                    <c.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">{c.label}</span>
                </div>
              )
            ))}
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
            <div>
              <label className="text-sm text-muted-foreground">Name</label>
              <input
                required
                name="name"
                className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-foreground"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-foreground"
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Phone</label>
            <div className="mt-2 flex gap-2 flex-col sm:flex-row">
              <select
                name="country_code"
                defaultValue="+91"
                className="px-3 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-foreground"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code} className="bg-background">
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                required
                type="tel"
                name="phone"
                pattern="[0-9\s\-]{6,15}"
                className="flex-1 px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-foreground"
                placeholder="76391 57729"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Subject</label>
            <input
              required
              name="subject"
              className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-foreground"
              placeholder="A new mobile app for…"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-foreground resize-none"
              placeholder="Tell us about your goals, timeline and budget."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send Message"}
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};