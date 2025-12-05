const steps = [
  "You reach out quietly.",
  "We talk about what you need.",
  "I build the thing with care.",
  "You get something that solves the problem.",
];

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="section-padding bg-muted/40">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <span className="section-label">Process</span>
          <h2 className="section-title">How I work.</h2>
          
          <ol className="space-y-5 mt-10">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-5">
                <span className="font-mono text-sm text-primary/70 mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground text-lg">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
