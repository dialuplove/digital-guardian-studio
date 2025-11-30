import { Ear, Wrench, Lock } from "lucide-react";

const workApproach = [
  {
    icon: Ear,
    title: "Listening first",
    description: "Every project starts with understanding what you're actually trying to solve — not what tool you think you need.",
  },
  {
    icon: Wrench,
    title: "Hands-on building",
    description: "I design, prototype, and ship your solution myself. No outsourcing, no layers of middlemen.",
  },
  {
    icon: Lock,
    title: "Private examples",
    description: "If you'd like to see previous work, I'll share relevant examples privately once we talk.",
  },
];

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="section-label">Approach</span>
          <h2 className="section-title">How I Work</h2>
          <p className="section-description">
            I don't publish a big gallery of past work. Most of what I build is custom and personal to the people I work with. If you want to see examples, I'm happy to share them privately based on what you need.
          </p>
        </div>

        {/* 3-part layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {workApproach.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
