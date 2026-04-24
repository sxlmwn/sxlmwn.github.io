import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Neural Sentiment Engine",
    desc: "Trained a transformer-based sentiment model on multilingual datasets with custom fine-tuning pipeline.",
    tags: ["Python", "PyTorch", "Hugging Face"],
    accent: "from-primary to-secondary",
  },
  {
    title: "CipherGuard",
    desc: "A learning project exploring symmetric/asymmetric cryptography with a clean CLI for file encryption.",
    tags: ["C++", "Cryptography", "CLI"],
    accent: "from-secondary to-accent",
  },
  {
    title: "DevOps Dashboard",
    desc: "A container monitoring panel that surfaces CI/CD events, build status and resource usage at a glance.",
    tags: ["Docker", "Python", "DevOps"],
    accent: "from-accent to-primary",
  },
  {
    title: "Java Algo Visualizer",
    desc: "Interactive visualizer for sorting and graph algorithms — built to teach myself complexity intuitively.",
    tags: ["Java", "Swing", "Algorithms"],
    accent: "from-primary-glow to-primary",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">Selected Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Projects I'm <span className="text-gradient">proud of</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A mix of AI experiments, security explorations, and engineering builds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="glass-card group p-7 sm:p-8 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} mb-6 glow-ring`} />
              <h3 className="text-2xl font-display font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full glass text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 hover:text-primary-glow transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 hover:text-primary-glow transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
