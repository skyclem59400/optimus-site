import Link from "next/link";
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

export const metadata: Metadata = {
  title: "Services | Optimus - Integration IA en Entreprise",
  description:
    "Decouvrez nos services d'integration IA : automatisation intelligente, agents IA autonomes, audit strategique et formation.",
};

const services = [
  {
    id: "automatisation",
    title: "Automatisation Intelligente",
    description:
      "Nous automatisons vos workflows pour eliminer les taches repetitives et connecter vos outils entre eux. Gagnez du temps, reduisez les erreurs et concentrez vos equipes sur ce qui compte vraiment.",
    examples: [
      "Traitement automatique de documents et extraction de donnees",
      "Pipelines de donnees intelligents entre vos applications",
      "Integration CRM, ERP et outils metier avec couche IA",
      "Workflows de validation et de routage automatises",
    ],
  },
  {
    id: "agents",
    title: "Agents IA Autonomes",
    description:
      "Deployez des agents IA capables d'agir de maniere autonome pour vos equipes. Grace a des outils comme Claude Code, nous creons des agents qui comprennent votre contexte metier et executent des taches complexes en toute independance.",
    examples: [
      "Agents de support client avec comprehension contextuelle",
      "Agents de developpement logiciel autonomes (Claude Code)",
      "Assistants metier specialises pour vos equipes",
      "Agents de veille et d'analyse concurrentielle",
    ],
  },
  {
    id: "audit",
    title: "Audit & Strategie IA",
    description:
      "Nous evaluons la maturite IA de votre entreprise et identifions les opportunites a fort impact. Un diagnostic complet pour savoir exactement ou et comment l'IA peut transformer vos operations.",
    examples: [
      "Cartographie complete de vos processus automatisables",
      "Analyse du ROI potentiel pour chaque opportunite identifiee",
      "Feuille de route IA priorisee sur 6 a 18 mois",
      "Benchmark sectoriel et veille technologique",
    ],
  },
  {
    id: "formation",
    title: "Formation & Accompagnement",
    description:
      "Formez vos equipes a l'utilisation efficace des outils IA. Des workshops pratiques aux programmes de formation continues, nous rendons vos collaborateurs autonomes et performants avec l'IA.",
    examples: [
      "Workshops pratiques sur Claude, ChatGPT et les LLMs",
      "Formation au prompting avance et aux bonnes pratiques",
      "Accompagnement personnalise par equipe metier",
      "Programmes de montee en competences progressifs",
    ],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    subtitle: "Ideal pour decouvrir",
    description:
      "Un audit initial complet de vos processus, suivi de recommandations concretes et priorisees pour integrer l'IA dans votre entreprise.",
    features: [
      "Audit de maturite IA",
      "Identification des opportunites",
      "Rapport detaille avec recommandations",
      "Estimation du ROI potentiel",
      "Session de restitution d'1h",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    subtitle: "Le plus populaire",
    description:
      "Implementation complete d'une solution IA sur mesure, de la conception au deploiement, avec un accompagnement dedie tout au long du projet.",
    features: [
      "Tout le plan Starter inclus",
      "Conception et architecture de la solution",
      "Developpement et integration sur mesure",
      "Tests et validation avec vos equipes",
      "Formation des utilisateurs",
      "Support post-deploiement de 30 jours",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "Transformation complete",
    description:
      "Un programme de transformation IA complet pour votre entreprise, avec un support continu et une evolution constante de vos solutions.",
    features: [
      "Tout le plan Business inclus",
      "Strategie IA globale multi-projets",
      "Deploiement de solutions multiples",
      "Agents IA autonomes personnalises",
      "Formation continue des equipes",
      "Support premium continu",
      "Revues trimestrielles et optimisations",
    ],
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
              Ce que nous faisons
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Nos <span className="gradient-text">Services</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              De l&apos;audit strategique a l&apos;implementation, nous vous
              accompagnons a chaque etape de votre transformation IA.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="relative py-24 scroll-mt-24"
        >
          {index % 2 === 1 && (
            <div className="absolute inset-0 bg-surface/50" />
          )}

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className={`flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <AnimatedSection direction={index % 2 === 0 ? "left" : "right"} className="flex-1">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl font-bold gradient-text glow">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-400">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {service.examples.map((example) => (
                    <li key={example} className="flex items-start gap-3">
                      <svg className="mt-1.5 h-4 w-4 flex-shrink-0 text-primary" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8L6 12L14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-gray-300">{example}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection direction={index % 2 === 0 ? "right" : "left"} delay={0.2} className="flex-1">
                <div className="glass rounded-3xl p-8 lg:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-accent/30 animate-float">
                      <span className="text-3xl font-bold gradient-text">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold gradient-text">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {service.examples.length} domaines d&apos;expertise
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                      {service.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full bg-surface-light px-3 py-1 text-xs text-gray-400 border border-white/5"
                        >
                          {example.split(" ").slice(0, 3).join(" ")}...
                        </span>
                      ))}
                    </div>
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
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Tarification
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Une offre adaptee a <span className="gradient-text">chaque besoin</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Chaque entreprise est unique. Nos offres s&apos;adaptent a votre maturite, vos objectifs et votre budget.
            </p>
          </div>

          <AnimatedSection stagger staggerDelay={0.15} className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <AnimatedCard
                key={tier.name}
              >
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
                    <h3 className={`text-2xl font-bold ${tier.highlighted ? "gradient-text" : "text-white"}`}>
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary/70">{tier.subtitle}</p>
                    <p className="mt-4 text-sm leading-6 text-gray-400">{tier.description}</p>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">Sur devis</span>
                    </div>

                    <ul className="mt-8 space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" viewBox="0 0 20 20" fill="none">
                            <path d="M3 10L8 15L17 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-10 block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                      tier.highlighted
                        ? "bg-primary text-gray-900 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20"
                        : "border border-white/10 text-white hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    Demander un devis
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
                Identifions ensemble vos <span className="gradient-text">opportunites IA</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
                Un echange de 30 minutes pour comprendre vos enjeux et vous montrer concretement comment l&apos;IA peut transformer votre quotidien.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact" className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20">
                  Prendre rendez-vous
                </Link>
                <Link href="/about" className="rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-primary/50 hover:text-primary">
                  En savoir plus sur Optimus
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
