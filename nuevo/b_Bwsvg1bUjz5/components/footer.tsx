import { Shield, Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Mayeli Sánchez</p>
              <p className="text-xs text-muted-foreground font-mono">MayAth · Seguridad Informática</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:contacto@example.com"
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Mayeli Sánchez · Portafolio Ciberseguridad · UPSLP
          </p>
          <p className="flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-primary fill-primary" /> para Seguridad Informática
          </p>
        </div>
      </div>
    </footer>
  )
}
