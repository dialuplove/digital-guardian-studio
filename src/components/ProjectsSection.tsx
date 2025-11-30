import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Meridian Analytics",
    description: "Complete rebrand and website redesign for a data analytics startup. Increased demo requests by 340%.",
    tags: ["Web", "UX", "Marketing"],
    featured: true,
  },
  {
    title: "HomeCore Server Build",
    description: "Custom NAS and media server setup with redundant storage, VPN access, and automated backups.",
    tags: ["Hardware", "Homelab", "Network"],
    featured: false,
  },
  {
    title: "Phishing Awareness Workshop",
    description: "12-part workshop series for a regional credit union. 2,000+ employees trained over 6 months.",
    tags: ["Security", "Training", "Enterprise"],
    featured: true,
  },
  {
    title: "IoT Weather Station",
    description: "Solar-powered weather monitoring system with custom PCB design and real-time dashboard.",
    tags: ["Hardware", "Prototype", "IoT"],
    featured: false,
  },
  {
    title: "Deepfake Detection Guide",
    description: "Interactive educational resource teaching families how to spot AI-generated content.",
    tags: ["Security", "Web", "Education"],
    featured: true,
  },
  {
    title: "Velocity Fitness App",
    description: "Mobile-first web app for a boutique fitness studio. Booking, payments, and member portal.",
    tags: ["Web", "UX", "Full-Stack"],
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-surface/50">
      <div className="container-narrow">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-sm text-primary mb-4 block">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Selected work.
          </h2>
          <p className="text-lg text-muted-foreground">
            A mix of web design, hardware builds, and security training—all shipped and making an impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-card border border-border/50 rounded-xl p-6 card-hover cursor-pointer ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink 
                  size={18} 
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" 
                />
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
