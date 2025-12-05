import { Lock } from "lucide-react";

const principles = [
  "Absolute discretion.",
  "No client names ever published.",
  "Anonymous contact welcome.",
  "Nothing shared without consent.",
  "Work disappears when it should.",
];

export function PrivacySection() {
  return (
    <section id="privacy" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lock className="text-primary" size={18} />
            </div>
            <span className="section-label mb-0">Privacy</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-foreground leading-tight">
            Your work stays yours.
          </h2>

          <ul className="space-y-4">
            {principles.map((principle) => (
              <li key={principle} className="flex items-center gap-4 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                <span className="text-base">{principle}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-sm text-muted-foreground/60 mt-12 font-mono">
            /* Quiet reassurance, not legalese. */
          </p>
        </div>
      </div>
    </section>
  );
}
