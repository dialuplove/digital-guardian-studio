import { Globe, Cpu, ShieldAlert } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & UX",
    description: "Fast, original websites that actually convert. No templates, no bloat—just clean design that works.",
    features: [
      "Custom design from scratch",
      "Mobile-first, lightning fast",
      "Conversion-focused UX",
      "Easy to maintain & update",
    ],
  },
  {
    icon: Cpu,
    title: "Hardware Prototyping",
    description: "From homelab setups to IoT prototypes. I build the physical stuff that makes digital ideas real.",
    features: [
      "Homelab design & builds",
      "IoT & embedded systems",
      "Rapid prototyping",
      "Network infrastructure",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Scam Defense Training",
    description: "Talks and workshops that teach real people how to spot scams, deepfakes, and manipulation tactics.",
    features: [
      "Live talks & workshops",
      "Family & business training",
      "Phishing simulations",
      "Deepfake awareness",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">Services</span>
          <h2 className="section-title">
            Three ways I can help.
          </h2>
          <p className="section-description">
            Every project is different, but they all share the same goal: build something great, make it bulletproof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon className="text-primary" size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
