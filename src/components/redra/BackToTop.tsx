import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground flex items-center justify-center shadow-[0_0_24px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_36px_hsl(var(--primary)/0.8)] hover:-translate-y-1 transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-2"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};