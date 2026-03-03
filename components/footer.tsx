import { Heart } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-glass-border py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-gold-gradient font-serif text-lg font-bold">
              Dr. Athira Thomas
            </span>
            <span className="text-xs text-muted-foreground">
              General Dental Surgeon
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Expertise", href: "#expertise" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1">
            {`\u00A9 ${year} Dr. Athira Thomas. Made with`}
            <Heart size={12} className="text-gold fill-gold" />
          </p>
        </div>
      </div>
    </footer>
  )
}
