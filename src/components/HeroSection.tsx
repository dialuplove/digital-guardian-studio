import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center pt-24 pb-20">
      <div className="container-narrow">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-tight mb-8 animate-fade-in text-foreground">
            If it's interesting,
            <br />
            <span className="text-primary">I build it.</span>
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-14 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Web. Hardware. Scam-defense.
            <br />
            Whatever the problem, I build with discretion and ship with care.
          </p>

          {/* CTA */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:andrew@prisonkite.com">
                Send up a flare
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
