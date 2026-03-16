import Link from "next/link";
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

export const metadata: Metadata = {
  title: "Nos offres | Optimus — Solutions digitales sur-mesure",
  description:
    "Site web, CRM, automatisations, IA — des solutions cles-en-main pour les entrepreneurs qui veulent gagner du temps.",
};

const offers = [
  {
    id: "site-crm",
    title: "Site web + CRM : votre kit de demarrage digital",
    description:
      "Un site moderne qui vous represente, couple a un CRM pour gerer vos contacts, vos devis et votre planning. Le duo indispensable pour ne plus rien laisser passer.",
    benefits: [
      "Site vitrine rapide et professionnel (pas du WordPress)",
      "CRM integre : contacts, entreprises, pipeline de ventes",
      "Prise de rendez-vous en ligne pour vos clients",
      "Facturation et devis directement depuis l'outil",
      "Hebergement et maintenance inclus",
    ],
    price: "A partir de 3 000\u20AC",
    priceNote: "+ 199\u20AC/mois tout compris",
  },
  {
    id: "automatisation",
    title: "Automatisations IA : liberez votre temps",
    description:
      "Les taches repetitives qui vous prennent des heures ? On les automatise. Relances, emails, traitement de donnees — l'IA travaille pendant que vous vous concentrez sur l'essentiel.",
    benefits: [
      "Emails de bienvenue et relances automatiques",
      "Suivi des prospects sans effort",
      "Traitement automatique de documents",
      "Connexion entre vos outils existants",
    ],
    price: "A partir de 2 000\u20AC",
    priceNote: "ou inclus dans le pack Site + CRM",
  },
  {
    id: "accompagnement",
    title: "Conseil et formation : on vous rend autonome",
    description:
      "L'IA vous fait peur ? Pas de panique. On prend le temps de vous expliquer, de vous former, et de definir ensemble ce qui a du sens pour votre activite.",
    benefits: [
      "Audit de vos processus actuels (gratuit, 30 min)",
      "Formation pratique a vos nouveaux outils",
      "Workshops IA pour vos equipes",
      "Accompagnement continu et support reactif",
    ],
    price: "Audit gratuit",
    priceNote: "Formations a partir de 500\u20AC/jour",
  },
];

const pricingTiers = [
  {
    name: "Essentiel",
    subtitle: "Pour se lancer",
    features: [
      "Site vitrine professionnel",
      "CRM basique (contacts, pipeline)",
      "Hebergement inclus",
      "Support par email",
    ],
    price: "A partir de 3 000\u20AC",
    monthly: "199\u20AC/mois",
    cta: "On en parle",
    highlighted: false,
  },
  {
    name: "Complet",
    subtitle: "Le plus demande",
    features: [
      "Tout le pack Essentiel",
      "Facturation et devis integres",
      "Automatisations email",
      "Prise de RDV en ligne",
      "Formation incluse (2h)",
      "Support prioritaire",
    ],
    price: "A partir de 5 000\u20AC",
    monthly: "299\u20AC/mois",
    cta: "Choisir ce pack",
    highlighted: true,
  },
  {
    name: "Sur-mesure",
    subtitle: "Pour les ambitieux",
    features: [
      "Solution 100% personnalisee",
      "Integrations specifiques",
      "Agents IA dedies",
      "Formation equipe complete",
      "Support premium continu",
    ],
    price: "Sur devis",
    monthly: null,
    cta: "Discutons-en",
    highlighted: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nos offres
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Des solutions concretes pour des problemes{" "}
              <span className="gradient-text">concretes</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Pas de jargon, pas de promesses en l&apos;air. On construit des
              outils qui marchent et qui vous simplifient la vie.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Offers Detail */}
      {offers.map((offer, index) => (
        <section
          key={offer.id}
          id={offer.id}
          className="relative py-24 scroll-mt-24"
        >
          {index % 2 === 1 && (
            <div className="absolute inset-0 bg-surface/50" />
          )}

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={`flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <AnimatedSection
                direction={index % 2 === 0 ? "left" : "right"}
                className="flex-1"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl font-bold gradient-text glow">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  {offer.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  {offer.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {offer.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg
                        className="mt-1.5 h-4 w-4 flex-shrink-0 text-primary"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2 8L6 12L14 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-subtle">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.2}
                className="flex-1"
              >
                <div className="glass rounded-3xl p-8 lg:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-accent/30 animate-float">
                      <span className="text-3xl font-bold gradient-text">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-bold gradient-text">
                      {offer.price}
                    </h3>
                    <p className="mt-3 text-sm text-muted">
                      {offer.priceNote}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Combien ca <span className="gradient-text">coute</span> ?
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                Pas de surprise. Des prix clairs, adaptes a votre taille.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection
            stagger
            staggerDelay={0.15}
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {pricingTiers.map((tier) => (
              <AnimatedCard key={tier.name}>
                <div
                  className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                    tier.highlighted
                      ? "glass glow border-primary/30 ring-1 ring-primary/20"
                      : "glass hover:glow"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-gray-900">
                        Recommande
                      </span>
                    </div>
                  )}

                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold ${
                        tier.highlighted
                          ? "gradient-text"
                          : "text-foreground"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary/70">
                      {tier.subtitle}
                    </p>

                    <div className="mt-6 flex flex-col">
                      <span className="text-3xl font-bold text-foreground">
                        {tier.price}
                      </span>
                      {tier.monthly && (
                        <span className="mt-1 text-sm text-muted">
                          {tier.monthly}
                        </span>
                      )}
                    </div>

                    <ul className="mt-8 space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg
                            className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M3 10L8 15L17 5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-subtle">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-10 block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                      tier.highlighted
                        ? "bg-primary text-gray-900 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20"
                        : "border border-border text-foreground hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="glass rounded-3xl px-8 py-16 sm:px-16 glow">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                30 minutes pour{" "}
                <span className="gradient-text">tout comprendre</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
                On se pose, on regarde votre situation, et on vous dit
                honnetement ce qu&apos;on peut faire pour vous. Gratuit, zero
                engagement.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20"
                >
                  Reserver un appel
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  Envoyer un message
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
