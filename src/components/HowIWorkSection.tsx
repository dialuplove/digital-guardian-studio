import { Ear, Wrench, Lock } from "lucide-react";
const workApproach = [{
  icon: Ear,
  title: "Listening first",
  description: "Understanding the real problem, not the assumed one."
}, {
  icon: Wrench,
  title: "Hands-on building",
  description: "Design, prototype, ship. No outsourcing."
}, {
  icon: Lock,
  title: "Private examples",
  description: "Work samples shared privately on request."
}];
export function HowIWorkSection() {
  return <section id="how-i-work" className="section-padding bg-muted/40">
      <div className="container-narrow">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">Approach</span>
          <h2 className="section-title">How I Work</h2>
          <p className="section-description">
            Custom work. Privacy is paramount.
          </p>
        </div>

        {/* 3-part layout */}
        <div className="grid md:grid-cols-3 gap-10">
          {workApproach.map(item => <div key={item.title} className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}