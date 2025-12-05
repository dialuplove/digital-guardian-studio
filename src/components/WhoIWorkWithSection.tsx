const types = [
  "People with strange ideas.",
  "People who need things built privately.",
  "People who want simple, honest tools.",
  "People who don't want their name everywhere.",
];

export function WhoIWorkWithSection() {
  return (
    <section id="who" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <span className="section-label">Clients</span>
          <h2 className="section-title">Who I work with.</h2>
          
          <ul className="space-y-4 mt-10">
            {types.map((type) => (
              <li key={type} className="flex items-center gap-4 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                <span className="text-lg">{type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
