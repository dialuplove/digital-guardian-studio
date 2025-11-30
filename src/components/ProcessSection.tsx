import { MessageSquare, PenTool, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Listen & Sketch",
    description: "We talk about what you need. I ask questions, take notes, and start sketching ideas.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Prototype & Iterate",
    description: "Quick mockups and rough builds. We refine together until it feels right.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Build & Test",
    description: "Real code, real hardware, real results. Everything gets tested before it ships.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Refine",
    description: "Ship it, watch it work, make it better. I stick around to help things grow.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container-narrow">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-sm text-primary mb-4 block">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            How we'll work together.
          </h2>
          <p className="text-lg text-muted-foreground">
            No endless meetings or mystery timelines. Just a clear path from idea to shipped product.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border/50 -z-10" />
              )}
              
              {/* Step content */}
              <div className="group">
                {/* Number & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <step.icon size={24} className="text-primary" />
                  </div>
                  <span className="font-mono text-3xl font-bold text-border/80">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
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
