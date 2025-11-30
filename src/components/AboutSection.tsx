import { CheckCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title">
              About Andrew
            </h2>
            
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              I'm Andrew, the person behind PrisonKite. I build websites, prototype hardware, and help people understand scams so they can protect themselves and the people they care about. I work directly with families, small teams, and indie makers who need someone technical, patient, and honest.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Technical enough to build real things.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Clear enough to teach complex ideas without jargon.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Calm enough to help people who feel overwhelmed.</span>
              </div>
            </div>
            
            <p className="font-mono text-sm text-muted-foreground">
              /* One person. Hands-on. No bullshit. */
            </p>
          </div>

          {/* Visual side - clean professional card */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-primary">A</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Andrew</h3>
                  <p className="text-muted-foreground">@dialuplove</p>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building websites, hacking hardware, and helping people stay safe from scams since the dial-up days.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subtle decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
