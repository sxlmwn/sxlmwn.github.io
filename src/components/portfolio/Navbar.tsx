import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav
        className={`glass-strong rounded-full px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "shadow-[0_20px_60px_-20px_hsl(211_100%_40%/0.35)]" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center font-display font-semibold font-semibold text-primary-foreground text-base shadow-[0_4px_16px_-4px_hsl(211_100%_50%/0.5)]">
            S
          </span>
          <span className="font-display font-semibold text-lg tracking-tight hidden sm:inline">Salman</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-all hover:bg-white/40"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="glass-button-primary text-sm py-2 px-4">
          Let's talk
        </a>
      </nav>
    </header>
  );
};
