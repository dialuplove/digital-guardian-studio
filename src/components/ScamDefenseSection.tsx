import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Eye, Lock } from "lucide-react";

const threats = [
  { icon: AlertTriangle, label: "Phishing attacks" },
  { icon: Eye, label: "Deepfake scams" },
  { icon: Lock, label: "Social engineering" },
];

export function ScamDefenseSection() {
  return (
    <section id="talks" className="section-padding relative overflow-hidden">
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      
      <div className="container-narrow relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/8 border border-primary/10 mb-10">
            <Shield className="text-primary" size={16} />
            <span className="font-mono text-xs tracking-wide text-primary">Scam Defense Training</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-semibold mb-7 tracking-tight text-foreground">
            Don't Get{" "}
            <span className="text-primary">Faked</span>.
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Training for families, businesses, and communities.
          </p>

          {/* Threat indicators */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {threats.map((threat) => (
              <div 
                key={threat.label}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card border border-border/60"
              >
                <threat.icon size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{threat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">
              Book a Scam-Defense Session
            </a>
          </Button>

          {/* Context stats - framed as industry data, not personal metrics */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50 max-w-lg mx-auto">
            {[
              { value: "$8.8B", label: "Lost to scams in 2023" },
              { value: "2.6M", label: "Reports filed yearly" },
              { value: "40%", label: "Increase since 2020" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg md:text-xl font-semibold font-mono text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1.5 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
