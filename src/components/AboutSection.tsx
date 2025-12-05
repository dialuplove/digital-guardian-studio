export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <span className="section-label">About</span>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Andrew. I run a one-person studio called <span className="text-foreground font-medium">dialuplove</span>.
            </p>
            
            <p>
              I build things that interest me — digital, physical, educational.
              <br />
              Most of my projects never appear online.
            </p>
            
            <p>
              I work quietly.
            </p>
            
            <p className="text-muted-foreground/80">
              If your problem is unusual, that's usually a good sign.
            </p>
          </div>
          
          <p className="font-mono text-sm text-muted-foreground/50 mt-12">
            /* Privacy-first. Trust-based. No noise. */
          </p>
        </div>
      </div>
    </section>
  );
}
