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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Text */}
          <div>
            <span className="font-mono text-sm text-primary mb-4 block">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Got an idea or need help staying safe online?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you want to build something cool, upgrade your homelab, or book a scam-defense talk—let's chat. No pressure, no sales pitch.
            </p>

            {/* Direct contact options */}
            <div className="space-y-4">
              <a 
                href="mailto:hello@prisonkite.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <span>hello@prisonkite.com</span>
              </a>
              
              <a 
                href="https://twitter.com/dialuplove" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Twitter size={18} className="text-primary" />
                </div>
                <span>@dialuplove</span>
              </a>
              
              <a 
                href="https://github.com/dialuplove" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Github size={18} className="text-primary" />
                </div>
                <span>dialuplove</span>
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card border border-border/50 rounded-xl p-6 md:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="bg-surface"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="bg-surface"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me what you're working on..."
                    className="bg-surface resize-none"
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
                      <Send size={18} />
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
