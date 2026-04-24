import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Floating orbs */}
      <div className="orb w-[500px] h-[500px] bg-primary/40 -top-32 -left-32 animate-float-slow" />
      <div className="orb w-[400px] h-[400px] bg-accent/30 top-1/3 -right-20 animate-float" />
      <div className="orb w-[300px] h-[300px] bg-secondary/30 bottom-0 left-1/3 animate-float-slow" />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-8 animate-fade-up">
          <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Available for collaborations & internships
          </div>

          <div className="space-y-4">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">Hi, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              <span className="block">Salman</span>
              <span className="block text-gradient">Younus</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Software Engineering student exploring{" "}
            <span className="text-foreground font-medium">AI model training</span>, building with{" "}
            <span className="text-foreground font-medium">Java, C++ & Python</span>, and diving into{" "}
            <span className="text-foreground font-medium">DevOps & cybersecurity</span>.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium glow-ring hover:scale-[1.02] transition-transform"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium hover:border-primary/40 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Stat cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 animate-scale-in">
          <div className="glass-card col-span-2 p-6 space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary">Current Focus</p>
            <h3 className="text-2xl font-display font-semibold">AI & Machine Learning</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Training models, fine-tuning datasets, and exploring the line between intelligence and engineering.
            </p>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-gradient-primary">3+</div>
            <p className="text-sm text-muted-foreground mt-1">Languages mastered</p>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-gradient-primary">∞</div>
            <p className="text-sm text-muted-foreground mt-1">Curiosity-driven</p>
          </div>
        </div>
      </div>
    </section>
  );
};
