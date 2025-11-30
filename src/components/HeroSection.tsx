import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-narrow relative">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border/50 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">Creative Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            I design websites,{" "}
            <span className="text-primary">hack hardware</span>, and teach people how not to get{" "}
            <span className="relative inline-block">
              scammed
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0 7 Q 50 0, 100 4 T 200 3" stroke="hsl(180 100% 45%)" strokeWidth="2" fill="none" />
              </svg>
            </span>.
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I'm Andrew (online as '<span className="font-mono text-foreground">dialuplove</span>'). PrisonKite is my one-person studio for creative web design, hardware prototyping, and scam-defense talks that help real people stay safer online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
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
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-lg font-semibold mb-3">Who I work with</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              I'm a one-person studio. I work with a small number of people at a time so I can stay hands-on, ask questions, and actually care about the outcome.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div key={group.title} className="p-4 rounded-lg bg-surface border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">{group.title}</h3>
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
