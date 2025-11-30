export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-mono text-sm">
            <span className="text-primary">&gt;</span> PrisonKite
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PrisonKite. Built with intention.
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://twitter.com/dialuplove" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/dialuplove" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
