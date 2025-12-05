import { Globe, Cpu, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Work",
    lines: [
      "Calm, simple, human websites.",
      "Built to last. Built with care.",
    ],
  },
  {
    icon: Cpu,
    title: "Hardware & Prototyping",
    lines: [
      "Small devices. Sensors. Homelab tooling.",
      "Useful little machines.",
    ],
  },
  {
    icon: Shield,
    title: "Scam-Defense Training",
    lines: [
      "Private sessions. Clear explanations.",
      "Learn how scams work. Zero judgment.",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/40">
      <div className="container-narrow">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Services</span>
          <h2 className="section-title">Three ways I can help.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                <service.icon className="text-primary" size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {service.title}
              </h3>

              {/* Lines */}
              <div className="space-y-1">
                {service.lines.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
