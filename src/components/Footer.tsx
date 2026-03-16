import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Site web + CRM", href: "/services#site-crm" },
    { name: "Automatisations IA", href: "/services#automatisation" },
    { name: "Conseil & Formation", href: "/services#accompagnement" },
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
              Des solutions digitales sur-mesure pour les entrepreneurs. Site
              web, CRM, automatisations, IA — on simplifie votre quotidien.
            </p>
            <p className="mt-4 text-sm text-muted">
              Clement Scailteux — Developpeur & Consultant
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
            <h3 className="text-sm font-semibold text-primary">Optimus</h3>
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
            Fait avec passion dans les Hauts-de-France
          </p>
        </div>
      </div>
    </footer>
  );
}
