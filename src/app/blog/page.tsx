import Link from "next/link";
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

export const metadata: Metadata = {
  title: "Conseils & ressources | Optimus — Le digital pour les entrepreneurs",
  description:
    "Des articles concrets pour comprendre le digital et l'IA sans jargon. Guides pratiques pour entrepreneurs.",
};

const featuredArticle = {
  title: "Comment choisir les bons outils digitaux pour son entreprise (sans se ruiner)",
  description:
    "Excel, CRM, site web, automatisation... On fait le tri pour vous. Un guide concret pour savoir par ou commencer sans se perdre dans les options.",
  date: "12 mars 2026",
  tag: "Guide pratique",
  href: "#",
};

const articles = [
  {
    title: "5 taches que vous pouvez automatiser cette semaine",
    description:
      "Relances clients, devis, rappels... Ces petites corvees qui vous bouffent du temps ont toutes une solution simple.",
    date: "8 mars 2026",
    tag: "Productivite",
    href: "#",
  },
  {
    title: "Votre site web ne sert a rien ? Voici pourquoi",
    description:
      "Avoir un site c'est bien. Avoir un site qui ramene des clients, c'est mieux. Les erreurs les plus courantes et comment les corriger.",
    date: "3 mars 2026",
    tag: "Site web",
    href: "#",
  },
  {
    title: "CRM : pourquoi c'est indispensable (meme si vous etes seul)",
    description:
      "Vous gerez vos contacts sur Excel ou dans votre tete ? Il est temps de passer a un outil qui travaille pour vous.",
    date: "25 fevrier 2026",
    tag: "CRM",
    href: "#",
  },
  {
    title: "L'IA pour les PME : on demystifie tout",
    description:
      "ChatGPT, automatisation, agents IA... On vous explique ce qui est vraiment utile pour votre business et ce qui est du marketing.",
    date: "18 fevrier 2026",
    tag: "IA",
    href: "#",
  },
  {
    title: "Comment un refuge animalier a gagne 15h par semaine",
    description:
      "Retour d'experience : automatisation de la gestion d'un refuge avec 3 etablissements. Les resultats apres 6 mois.",
    date: "10 fevrier 2026",
    tag: "Temoignage",
    href: "#",
  },
  {
    title: "Freelance : 3 outils gratuits pour mieux gerer vos clients",
    description:
      "Pas besoin d'investir des mille et des cents. Voici les outils que je recommande pour bien demarrer.",
    date: "3 fevrier 2026",
    tag: "Conseil",
    href: "#",
  },
];

const tagColors: Record<string, string> = {
  "Guide pratique": "bg-primary/10 text-primary border-primary/20",
  Productivite: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Site web": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  CRM: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  IA: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Temoignage: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Conseil: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Conseils & <span className="gradient-text">ressources</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Des articles courts, concrets, sans jargon. Pour comprendre le digital et l&apos;IA a votre rythme.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <Link href={featuredArticle.href} className="group block">
              <article className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/40 via-surface to-surface-light p-8 sm:p-12 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
                <div className="relative max-w-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tagColors[featuredArticle.tag]}`}>
                      {featuredArticle.tag}
                    </span>
                    <span className="text-sm text-muted">{featuredArticle.date}</span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
                      En vedette
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
                    {featuredArticle.description}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                    Lire l&apos;article
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight mb-10">Derniers articles</h2>
          <AnimatedSection stagger staggerDelay={0.1} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <AnimatedCard key={article.title}>
                <Link href={article.href} className="group block">
                  <article className="flex h-full flex-col rounded-xl border border-border bg-surface-light/50 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-surface-light hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tagColors[article.tag]}`}>
                        {article.tag}
                      </span>
                      <span className="text-xs text-muted">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                      {article.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Lire la suite
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </article>
                </Link>
              </AnimatedCard>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl glass p-8 sm:p-12 text-center">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-light/10 rounded-full blur-3xl" />
              </div>
              <div className="relative mx-auto max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Recevez nos meilleurs <span className="gradient-text">conseils</span>
                </h2>
                <p className="mt-4 text-muted">
                  Un email par mois, maximum. Du concret, pas du spam.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="flex-1 rounded-full border border-border bg-surface px-5 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-all duration-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    aria-label="Adresse email"
                  />
                  <button
                    type="button"
                    className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20"
                  >
                    S&apos;inscrire
                  </button>
                </div>
                <p className="mt-4 text-xs text-muted">
                  Desabonnement en un clic. On respecte votre boite mail.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
