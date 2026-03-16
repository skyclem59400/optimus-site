import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import HeroSceneLoader from "@/components/HeroSceneLoader";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* 3D Neural Network Background */}
        <HeroSceneLoader />

        {/* Background gradient fallback */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-light/10 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(45,212,191,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <AnimatedSection className="max-w-3xl" delay={0.2}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              Optimus &mdash; Solutions digitales pour entrepreneurs
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
              Et si votre entreprise tournait{" "}
              <span className="gradient-text">(presque) toute seule</span> ?
            </h1>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-muted max-w-2xl">
              Site web, CRM, automatisations, IA &mdash; on construit les outils
              sur-mesure qui vous font gagner du temps et trouver des clients.
              Sans jargon, sans usine a gaz.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                On en discute ?
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/30 hover:text-primary hover:bg-primary/5"
              >
                Voir ce qu&apos;on fait
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vous reconnaissez-vous ? */}
      <section className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Vous reconnaissez-vous ?
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger staggerDelay={0.15} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Vos soirees passent en administratif</h3>
              <p className="text-muted leading-relaxed">
                Devis, factures, relances, mails... Vous passez plus de temps a
                gerer qu&apos;a faire votre vrai metier.
              </p>
            </AnimatedCard>

            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Des clients passent entre les mailles</h3>
              <p className="text-muted leading-relaxed">
                Sans outil de suivi, les prospects se perdent. Combien de ventes
                ratees faute d&apos;une relance au bon moment ?
              </p>
            </AnimatedCard>

            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group sm:col-span-2 lg:col-span-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Votre site ne vous rapporte rien</h3>
              <p className="text-muted leading-relaxed">
                Vous avez un site, mais il ne genere ni contacts ni rendez-vous.
                C&apos;est une vitrine figee qui ne travaille pas pour vous.
              </p>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Ce qu'on construit pour vous */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tout ce dont vous avez besoin,{" "}
              <span className="gradient-text">au meme endroit</span>
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Fini les 10 outils qui ne se parlent pas. On vous cree une
              solution unique, pensee pour votre activite.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger staggerDelay={0.12} className="grid gap-6 sm:grid-cols-2">
            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Un site qui convertit</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Pas juste une vitrine. Un site rapide, moderne, qui donne envie
                et qui transforme vos visiteurs en clients.
              </p>
            </AnimatedCard>

            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Un CRM integre</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Contacts, devis, factures, planning &mdash; tout au meme
                endroit. Vous ne perdez plus personne.
              </p>
            </AnimatedCard>

            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Des automatisations malignes</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Relances automatiques, emails de bienvenue, rappels de
                rendez-vous... L&apos;IA fait le travail repetitif a votre place.
              </p>
            </AnimatedCard>

            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Un accompagnement humain</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                On ne vous livre pas un outil et on disparait. On vous forme, on
                vous aide, et on reste la.
              </p>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Comment ca marche */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple comme{" "}
              <span className="gradient-text">bonjour</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger staggerDelay={0.2} className="grid gap-8 sm:grid-cols-3">
            {[
              { num: "1", title: "On se parle", desc: "30 minutes pour comprendre votre activite, vos galeres et vos objectifs. C'est gratuit, sans engagement." },
              { num: "2", title: "On construit", desc: "En quelques semaines, votre solution est prete. Vous testez, on ajuste, on peaufine ensemble." },
              { num: "3", title: "Ca tourne", desc: "Votre business gagne en efficacite. On reste disponible pour vous accompagner et faire evoluer vos outils." },
            ].map((step) => (
              <AnimatedCard key={step.num} className="glass rounded-2xl p-8 relative group" tiltIntensity={8}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-light border border-border text-2xl font-bold gradient-text transition-all group-hover:border-primary/20 glow">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Les resultats concrets */}
      <section className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ce que nos clients{" "}
              <span className="gradient-text">gagnent</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger staggerDelay={0.15} className="grid gap-8 sm:grid-cols-3">
            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 text-center">
              <div className="text-5xl font-bold gradient-text mb-2">10h</div>
              <div className="text-lg font-semibold mb-2">gagnees par semaine</div>
              <p className="text-muted text-sm leading-relaxed">
                en moyenne, grace aux automatisations et au CRM centralise
              </p>
            </AnimatedCard>

            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 text-center">
              <div className="text-5xl font-bold gradient-text mb-2">0</div>
              <div className="text-lg font-semibold mb-2">client oublie</div>
              <p className="text-muted text-sm leading-relaxed">
                chaque prospect est suivi, relance, et ne passe plus entre les
                mailles du filet
              </p>
            </AnimatedCard>

            <AnimatedCard className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 text-center">
              <div className="text-5xl font-bold gradient-text mb-2">1</div>
              <div className="text-lg font-semibold mb-2">seul outil</div>
              <p className="text-muted text-sm leading-relaxed">
                pour tout gerer : site, contacts, devis, factures, emails,
                planning
              </p>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-surface-light border border-border">
              <div className="absolute inset-0 -z-0">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent-light/15 blur-[80px]" />
              </div>

              <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Pret a{" "}
                  <span className="gradient-text">simplifier</span> votre
                  quotidien ?
                </h2>
                <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                  Un appel de 30 minutes, gratuit et sans engagement. On regarde
                  ensemble comment vous faire gagner du temps.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow"
                  >
                    Reservons un creneau
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                  >
                    Decouvrir nos offres
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
