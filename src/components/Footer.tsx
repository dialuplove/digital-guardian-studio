export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-sm font-medium text-foreground">
            PrisonKite
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PrisonKite. Built with intention.
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a 
              href="https://twitter.com/dialuplove" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/dialuplove" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
