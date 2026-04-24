import { Brain, Code2, Shield, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI Model Training",
    desc: "Fine-tuning, dataset curation, and experimenting with modern ML pipelines.",
  },
  {
    icon: Code2,
    title: "Multi-language Engineer",
    desc: "Comfortable across Java, C++ and Python — picking the right tool for the job.",
  },
  {
    icon: Cpu,
    title: "DevOps Emergent",
    desc: "Learning CI/CD, containers and infrastructure as code from the ground up.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Curious",
    desc: "Studying offensive & defensive security to build software that holds up.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Building at the intersection of <span className="text-gradient">code & intelligence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm a Software Engineering student passionate about AI, systems, and the security
            that makes them trustworthy. Always learning, always shipping.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="glass-card p-6 sm:p-8 flex gap-5 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center glow-ring">
                <h.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-display font-semibold">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
