import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Twitter, Github } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24-48 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
          {/* Left column - Text */}
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Got an idea or need help staying safe online?
            </h2>
            <p className="section-description mb-12">
              Whether you want to build something cool, upgrade your homelab, or book a scam-defense talk—let's chat. No pressure, no sales pitch.
            </p>

            {/* Direct contact options */}
            <div className="space-y-5">
              <a 
                href="mailto:hello@prisonkite.com" 
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-border/60 flex items-center justify-center group-hover:border-primary/25 transition-colors duration-200">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="text-sm">hello@prisonkite.com</span>
              </a>
              
              <a 
                href="https://twitter.com/dialuplove" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-border/60 flex items-center justify-center group-hover:border-primary/25 transition-colors duration-200">
                  <Twitter size={18} className="text-primary" />
                </div>
                <span className="text-sm">@dialuplove</span>
              </a>
              
              <a 
                href="https://github.com/dialuplove" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-border/60 flex items-center justify-center group-hover:border-primary/25 transition-colors duration-200">
                  <Github size={18} className="text-primary" />
                </div>
                <span className="text-sm">dialuplove</span>
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card border border-border/60 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2.5 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="bg-background border-border/60 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2.5 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="bg-background border-border/60 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2.5 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me what you're working on..."
                    className="bg-background border-border/60 rounded-xl resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
