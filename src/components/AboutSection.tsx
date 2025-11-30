import { Terminal } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Terminal size={18} />
              <span className="font-mono text-sm">about.md</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Hey, I'm Andrew.
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Online, you might know me as <span className="font-mono text-foreground bg-surface px-1.5 py-0.5 rounded">dialuplove</span>. 
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
            <div className="bg-code-bg rounded-xl p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/20">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-muted-foreground text-xs">andrew.config</span>
              </div>
              
              <div className="space-y-2 text-code-text">
                <div><span className="text-muted-foreground">{"// "}</span>PrisonKite Studio</div>
                <div className="text-muted-foreground">{"{"}</div>
                <div className="pl-4">
                  <span className="text-primary/70">"name"</span>: <span className="text-green-400">"Andrew"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/70">"handle"</span>: <span className="text-green-400">"@dialuplove"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/70">"location"</span>: <span className="text-green-400">"The Internet"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/70">"mission"</span>: <span className="text-green-400">"Build. Protect. Ship."</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/70">"coffee"</span>: <span className="text-yellow-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary/70">"scams_tolerated"</span>: <span className="text-red-400">0</span>
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
