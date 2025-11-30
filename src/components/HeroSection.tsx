import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-20">
      <div className="container-narrow">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-muted/60 border border-border/50 mb-10 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary/70" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide">Creative Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.15] tracking-tight mb-7 animate-fade-in text-foreground" style={{ animationDelay: "0.1s" }}>
            I design websites,{" "}
            <span className="text-primary">build hardware</span>, and teach people how not to get{" "}
            <span className="relative inline-block">
              scammed
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0 7 Q 50 0, 100 4 T 200 3" stroke="hsl(172 50% 45%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>.
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I'm Andrew (online as '<span className="font-mono text-foreground/80">dialuplove</span>'). PrisonKite is my one-person studio for creative web design, hardware prototyping, and scam-defense talks that help real people stay safer online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#how-i-work">
                See How I Work
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#talks">
                <Shield size={18} />
                Book a Scam-Defense Talk
              </a>
            </Button>
          </div>

          {/* Who I work with */}
          <div className="mt-24 pt-12 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Who I work with</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I'm a one-person studio. I work with a small number of people at a time so I can stay hands-on, ask questions, and actually care about the outcome.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: "Families & individuals",
                  description: "Helping people spot scams, protect older relatives, and stay safer in a messy online world."
                },
                {
                  title: "Small teams & local businesses",
                  description: "Websites, simple systems, and scam-awareness sessions for people who don't have an IT department."
                },
                {
                  title: "Indie makers & weird projects",
                  description: "Landing pages, prototypes, and creative experiments that need both storytelling and technical glue."
                }
              ].map((group) => (
                <div key={group.title} className="p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/20 transition-all duration-300">
                  <h3 className="font-medium text-foreground mb-2.5">{group.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
