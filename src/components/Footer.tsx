import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Automatisation IA", href: "/services#automatisation" },
    { name: "Agents Intelligents", href: "/services#agents" },
    { name: "Audit & Strategie IA", href: "/services#audit" },
    { name: "Formation", href: "/services#formation" },
  ],
  entreprise: [
    { name: "A propos", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Optimus"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-bold gradient-text">Optimus</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              Nous accompagnons les entreprises dans leur transformation par
              l&apos;intelligence artificielle. De la strategie a
              l&apos;implementation, nous rendons l&apos;IA accessible et
              performante.
            </p>
            <p className="mt-4 text-sm text-muted">
              Clement Scailteux - Consultant IA
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-primary">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-primary">Entreprise</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Optimus. Tous droits reserves.
          </p>
          <p className="mt-2 md:mt-0 text-xs text-muted">
            Propulse par l&apos;intelligence artificielle
          </p>
        </div>
      </div>
    </footer>
  );
}
