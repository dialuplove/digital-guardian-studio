import { Globe, Cpu, ShieldAlert, ArrowUpRight } from "lucide-react";

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
          <span className="font-mono text-sm text-primary mb-4 block">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Three ways I can help.
          </h2>
          <p className="text-lg text-muted-foreground">
            Every project is different, but they all share the same goal: build something great, make it bulletproof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border/50 rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
