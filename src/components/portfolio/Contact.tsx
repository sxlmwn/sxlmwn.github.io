import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="container max-w-4xl">
        <div className="glass-card relative p-10 sm:p-16 text-center overflow-hidden">
          <div className="orb w-80 h-80 bg-primary/40 -top-20 -left-20" />
          <div className="orb w-80 h-80 bg-accent/30 -bottom-20 -right-20" />

          <div className="relative z-10 space-y-6">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">Let's connect</p>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Got an idea? <span className="text-gradient">Let's build it.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Open to collaborations, internships and conversations about AI, security and software craft.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium glow-ring hover:scale-[1.02] transition-transform"
              >
                <Mail className="w-4 h-4" />
                Send a Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <a
                href="#"
                aria-label="GitHub"
                className="glass w-12 h-12 rounded-full grid place-items-center hover:border-primary/40 hover:text-primary-glow transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="glass w-12 h-12 rounded-full grid place-items-center hover:border-primary/40 hover:text-primary-glow transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="glass w-12 h-12 rounded-full grid place-items-center hover:border-primary/40 hover:text-primary-glow transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          © {new Date().getFullYear()} Salman Younus — Crafted with curiosity.
        </p>
      </div>
    </section>
  );
};
