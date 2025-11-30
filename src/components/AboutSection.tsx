import { Terminal } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Terminal size={16} />
              <span className="font-mono text-sm">about.md</span>
            </div>
            
            <h2 className="section-title">
              Hey, I'm Andrew.
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Online, you might know me as <span className="font-mono text-foreground bg-muted px-1.5 py-0.5 rounded text-sm">dialuplove</span>. 
                I've spent years building websites, tinkering with hardware, and watching good people get taken by bad actors online.
              </p>
              
              <p>
                I started <span className="text-foreground font-medium">PrisonKite</span> because I got tired of seeing the same scams work over and over. 
                A "prison kite" is a secret note passed between cells—a way to share critical information in dangerous places.
              </p>
              
              <p>
                That's what this studio does: I help people build creative things <em>and</em> pass along the knowledge they need to stay safe from scams, deepfakes, phishing, and all the digital garbage trying to separate them from their money and peace of mind.
              </p>
              
              <p className="text-foreground font-medium">
                Build cool stuff. Stay sharp. Don't get faked.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-code-bg rounded-xl p-6 font-mono text-sm overflow-hidden border border-border/10">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-muted-foreground/10">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="ml-2 text-muted-foreground/60 text-xs">andrew.config</span>
              </div>
              
              <div className="space-y-1.5 text-code-text text-[13px]">
                <div><span className="text-muted-foreground/50">{"// "}</span>PrisonKite Studio</div>
                <div className="text-muted-foreground/50">{"{"}</div>
                <div className="pl-4">
                  <span className="text-primary/80">"name"</span>: <span className="text-green-400/90">"Andrew"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/80">"handle"</span>: <span className="text-green-400/90">"@dialuplove"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/80">"location"</span>: <span className="text-green-400/90">"The Internet"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/80">"mission"</span>: <span className="text-green-400/90">"Build. Protect. Ship."</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/80">"coffee"</span>: <span className="text-yellow-400/90">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/80">"scams_tolerated"</span>: <span className="text-red-400/90">0</span>
                </div>
                <div className="text-muted-foreground/50">{"}"}</div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
