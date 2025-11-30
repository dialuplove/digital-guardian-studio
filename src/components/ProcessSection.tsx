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
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">Process</span>
          <h2 className="section-title">
            How we'll work together.
          </h2>
          <p className="section-description">
            No endless meetings or mystery timelines. Just a clear path from idea to shipped product.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-border -z-10" />
              )}
              
              {/* Step content */}
              <div className="group">
                {/* Number & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <step.icon size={22} className="text-primary" />
                  </div>
                  <span className="font-mono text-2xl font-medium text-border">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>

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
