import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/40">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="section-label">About</span>
            <h2 className="section-title">
              About Andrew
            </h2>
            
            <p className="text-muted-foreground leading-relaxed text-lg mb-10">
              I'm Andrew, the person behind PrisonKite. I build websites, prototype hardware, and help people understand scams so they can protect themselves and the people they care about. I work directly with families, small teams, and indie makers who need someone technical, patient, and honest.
            </p>
            
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-foreground leading-relaxed">Technical enough to build real things.</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-foreground leading-relaxed">Clear enough to teach complex ideas without jargon.</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-foreground leading-relaxed">Calm enough to help people who feel overwhelmed.</span>
              </div>
            </div>
            
            <p className="font-mono text-sm text-muted-foreground/70">
              /* One person. Hands-on. No bullshit. */
            </p>
          </div>

          {/* Visual side - clean professional card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-10 border border-border/60 shadow-sm">
              <div className="space-y-7">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                  <span className="text-3xl font-semibold text-primary">A</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1.5">Andrew</h3>
                  <p className="text-muted-foreground font-mono text-sm">@dialuplove</p>
                </div>
                
                <div className="pt-6 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed">
                    Building websites, hacking hardware, and helping people stay safe from scams since the dial-up days.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subtle decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
