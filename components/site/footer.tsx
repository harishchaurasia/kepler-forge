import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/company", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 glass">
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Kepler Forge</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Forging intelligent worlds.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kepler Forge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
