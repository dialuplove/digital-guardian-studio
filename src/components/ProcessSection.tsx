import { MessageSquare, PenTool, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Listen & Sketch",
    description: "Questions, notes, early ideas.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Prototype & Iterate",
    description: "Quick builds, fast feedback.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Build & Test",
    description: "Real code, real tests.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Refine",
    description: "Ship, monitor, improve.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-narrow">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="section-label">Process</span>
          <h2 className="section-title">
            How we'll work together.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border/60 -z-10" />
              )}
              
              {/* Step content */}
              <div className="group">
                {/* Number & Icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border/60 flex items-center justify-center group-hover:border-primary/20 transition-colors duration-300 shadow-sm">
                    <step.icon size={24} className="text-primary" />
                  </div>
                  <span className="font-mono text-2xl font-medium text-border/80">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
