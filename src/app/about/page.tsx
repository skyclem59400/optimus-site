import Link from "next/link";
import type { Metadata } from "next";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

export const metadata: Metadata = {
  title: "Qui sommes-nous | Optimus — Le digital accessible",
  description:
    "Optimus, c'est Clement Scailteux, developpeur et consultant qui aide les entrepreneurs a se digitaliser simplement.",
};

const values = [
  {
    title: "Du concret, pas du vent",
    description:
      "On ne vend pas du reve. Chaque solution est testee, deployee et mesuree. Vous savez exactement ce que vous obtenez.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "La simplicite avant tout",
    description:
      "Si c'est complique, c'est qu'on a rate quelque chose. Vos outils doivent etre aussi simples a utiliser qu'un smartphone.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "On ne vous lache pas",
    description:
      "Livrer un outil et disparaitre ? Tres peu pour nous. On vous forme, on reste disponible, et on fait evoluer vos outils avec vous.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Des prix honnetes",
    description:
      "Pas de devis a rallonge ni de couts caches. On vous dit combien ca coute avant de commencer, et on s'y tient.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Qui sommes-nous</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              On rend le digital <span className="gradient-text">simple</span> pour ceux qui font tourner la France
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
              Artisans, commercants, freelances, PME — vous meritez des outils aussi performants que ceux des grandes entreprises. Sans la complexite ni le prix.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* L'histoire */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-gradient-to-br from-surface via-surface-light/50 to-surface p-8 sm:p-12 lg:p-16">
              <div className="absolute top-0 left-0 h-24 w-24 rounded-tl-2xl border-t-2 border-l-2 border-primary/40" />
              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-br-2xl border-b-2 border-r-2 border-primary/40" />

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                L&apos;histoire
              </h2>
              <div className="mt-8 space-y-6 text-muted leading-7 sm:text-lg">
                <p className="text-xl italic text-foreground/90 sm:text-2xl">
                  &ldquo;J&apos;ai cree Optimus apres un constat simple : les entrepreneurs que je rencontrais avaient tous les memes problemes. Trop d&apos;outils, pas assez de temps, et un digital qui leur semblait inaccessible.&rdquo;
                </p>
                <p>
                  Pourtant, les solutions existent. Un bon site, un CRM bien pense, quelques automatisations — et tout change. Le probleme, c&apos;est que la plupart des prestataires parlent un langage incomprehensible et facturent des fortunes.
                </p>
                <p>
                  <strong className="text-foreground">Optimus</strong>, c&apos;est l&apos;inverse. On parle votre langue, on s&apos;adapte a votre rythme, et on vous livre des outils qui marchent. Pas d&apos;usine a gaz, pas de buzzwords — juste du concret.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Le fondateur */}
      <section className="py-20 lg:py-28 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Le fondateur</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">La personne derriere Optimus</h2>
          </div>

          <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
            <AnimatedSection direction="left" className="flex-shrink-0">
              <div className="relative">
                <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-accent to-primary/20 lg:h-64 lg:w-64">
                  <span className="text-5xl font-bold text-primary lg:text-6xl">CS</span>
                </div>
                <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-primary/30 to-accent-light/30 blur-md" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15} className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold">Clement Scailteux</h3>
              <p className="mt-1 text-primary font-medium">Fondateur d&apos;Optimus</p>

              <div className="mt-6 space-y-4 text-muted leading-7 sm:text-lg">
                <p>
                  Developpeur depuis plus de 10 ans, je me suis specialise dans les solutions sur-mesure pour les entreprises. Mon truc ? Prendre un probleme complexe et le transformer en un outil simple.
                </p>
                <p>
                  J&apos;ai construit des systemes pour des refuges animaliers, des plateformes agricoles, des outils de gestion pour des associations... A chaque fois, le meme plaisir : voir quelqu&apos;un gagner des heures de travail grace a un outil bien pense.
                </p>
                <p>
                  Aujourd&apos;hui avec Optimus, je mets cette experience au service des entrepreneurs. L&apos;IA est une opportunite incroyable, et je veux qu&apos;elle profite a tout le monde — pas seulement aux grandes entreprises.
                </p>
              </div>

              <AnimatedSection stagger className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {["Sites web sur-mesure", "CRM & gestion", "Automatisation IA", "Formation & conseil"].map((skill) => (
                  <AnimatedItem key={skill}>
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                      {skill}
                    </span>
                  </AnimatedItem>
                ))}
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ce qu'on defend */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nos convictions</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Ce qu&apos;on defend</h2>
          </AnimatedSection>

          <AnimatedSection stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <AnimatedCard key={value.title} className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/20 hover:bg-surface-light">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-muted leading-7">{value.description}</p>
              </AnimatedCard>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface p-12 text-center sm:p-16 lg:p-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ca vous <span className="gradient-text">parle</span> ?
                </h2>
                <p className="mt-4 text-lg text-muted">
                  Prenons 30 minutes pour discuter de votre activite. Pas de commercial, pas de pression — juste une conversation entre humains.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20">
                    Reservons un appel
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-base font-medium text-subtle transition-all hover:border-primary/30 hover:text-primary">
                    Decouvrir nos offres
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
