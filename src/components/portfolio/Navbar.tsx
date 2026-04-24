import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
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
          scrolled ? "shadow-[0_8px_40px_hsl(220_80%_2%/0.6)]" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-gradient-primary glow-ring grid place-items-center font-display font-bold text-primary-foreground text-sm">
            S
          </span>
          <span className="font-display font-semibold tracking-tight hidden sm:inline">Salman</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-ring"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
};
