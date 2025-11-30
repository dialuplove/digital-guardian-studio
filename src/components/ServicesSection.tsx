import { Globe, Cpu, ShieldAlert } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & UX",
    description: "Fast, original sites. No templates.",
    features: [
      "Custom design",
      "Mobile-first",
      "Conversion-focused",
      "Easy to maintain",
    ],
  },
  {
    icon: Cpu,
    title: "Hardware Prototyping",
    description: "Homelabs, IoT, physical builds.",
    features: [
      "Homelab builds",
      "Embedded systems",
      "Rapid prototyping",
      "Network infrastructure",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Scam Defense Training",
    description: "Workshops on scams, deepfakes, and manipulation.",
    features: [
      "Live workshops",
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
        <div className="max-w-2xl mb-20">
          <span className="section-label">Services</span>
          <h2 className="section-title">
            Three ways I can help.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border/60 rounded-2xl p-7 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/[0.03]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                <service.icon className="text-primary" size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
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
