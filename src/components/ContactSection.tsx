import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-muted/40">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <span className="section-label">Contact</span>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            If you need help, or have something interesting in mind, you can reach me here.
          </p>

          <Button variant="hero" size="lg" asChild>
            <a href="mailto:andrew@prisonkite.com">
              andrew@prisonkite.com
              <ArrowRight size={18} />
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground/50 mt-12 font-mono">
            /* No forms. No pressure. */
          </p>
        </div>
      </div>
    </section>
  );
}
