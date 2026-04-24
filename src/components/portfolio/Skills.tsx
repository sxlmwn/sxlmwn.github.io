const groups = [
  {
    label: "Languages",
    items: ["Java", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    label: "AI / ML",
    items: ["Model Training", "Fine-tuning", "PyTorch", "TensorFlow", "Hugging Face", "Pandas"],
  },
  {
    label: "DevOps (Emergent)",
    items: ["Git", "Docker", "Linux", "CI/CD", "Bash"],
  },
  {
    label: "Cybersecurity (Learning)",
    items: ["Networking", "Cryptography", "OWASP", "Pentesting Basics"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">Toolkit</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Skills <span className="text-gradient">in motion</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A snapshot of the languages and domains I work with — and the ones I'm actively leveling up in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((g, gi) => (
            <div
              key={g.label}
              className="glass-card p-6 sm:p-8 animate-fade-up"
              style={{ animationDelay: `${gi * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-display font-semibold">{g.label}</h3>
                <span className="text-xs text-muted-foreground">{g.items.length} skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="glass px-3.5 py-1.5 rounded-full text-sm text-foreground/90 hover:border-primary/40 hover:text-primary-glow transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
