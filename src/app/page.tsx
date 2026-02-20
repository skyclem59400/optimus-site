import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
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

        {/* Floating geometric shapes */}
        <div className="absolute top-40 right-[15%] w-20 h-20 border border-primary/20 rounded-xl rotate-45 animate-float hidden lg:block" />
        <div
          className="absolute top-60 left-[10%] w-14 h-14 border border-primary/10 rounded-full animate-float hidden lg:block"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 right-[25%] w-10 h-10 bg-primary/5 rounded-lg rotate-12 animate-float hidden lg:block"
          style={{ animationDelay: "4s" }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              Consulting en intelligence artificielle
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
              L&apos;intelligence artificielle{" "}
              <span className="gradient-text">au service</span> de votre
              entreprise
            </h1>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-gray-400 max-w-2xl">
              Automatisation, agents IA, workflows intelligents &mdash; nous
              transformons votre business avec les dernieres avancees en IA.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                Decouvrir nos services
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-3.5 text-base font-semibold text-gray-200 transition-all hover:border-primary/30 hover:text-primary hover:bg-primary/5"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi l'IA */}
      <section className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pourquoi adopter l&apos;
              <span className="gradient-text">IA</span> maintenant ?
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Les entreprises qui integrent l&apos;IA des aujourd&apos;hui
              construisent leur avantage de demain.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card: Productivite */}
            <div className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Productivite x10</h3>
              <p className="text-muted leading-relaxed">
                Automatisez les taches repetitives et liberez vos equipes pour
                les activites a forte valeur ajoutee. L&apos;IA travaille 24/7
                sans interruption.
              </p>
            </div>

            {/* Card: Decisions */}
            <div className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Decisions eclairees</h3>
              <p className="text-muted leading-relaxed">
                Analyses et insights en temps reel pour des decisions basees sur
                les donnees. Transformez vos donnees en avantage strategique.
              </p>
            </div>

            {/* Card: Avantage competitif */}
            <div className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group sm:col-span-2 lg:col-span-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Avantage competitif</h3>
              <p className="text-muted leading-relaxed">
                Devancez la concurrence en adoptant l&apos;IA avant les autres.
                Les entreprises IA-first dominent deja leurs marches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos expertises */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos <span className="gradient-text">expertises</span>
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Des solutions IA sur-mesure pour chaque dimension de votre entreprise.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Link href="/services" className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Automatisation intelligente</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed flex-1">
                Workflows automatises, integrations API, orchestration de processus metier. Eliminons le travail manuel repetitif.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </Link>

            <Link href="/services" className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0015.75 4.5h-9A2.25 2.25 0 004.5 6.75v10.5A2.25 2.25 0 006.75 19.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Agents IA autonomes</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed flex-1">
                Claude Code, assistants personnalises, agents conversationnels. Des IA qui travaillent pour vous en autonomie.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </Link>

            <Link href="/services" className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Audit &amp; strategie IA</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed flex-1">
                Evaluation de votre maturite IA, identification des opportunites a fort ROI, feuille de route actionnable.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </Link>

            <Link href="/services" className="glass rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 group flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Formation equipes</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed flex-1">
                Montez en competence vos collaborateurs sur les outils IA. Workshops pratiques et accompagnement personnalise.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Notre <span className="gradient-text">processus</span>
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Une approche structuree pour garantir le succes de votre transformation IA.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "1", title: "Audit", desc: "Analyse approfondie de vos processus actuels, identification des goulots d'etranglement et opportunites d'automatisation." },
              { num: "2", title: "Strategie", desc: "Plan d'action personnalise avec priorisation par ROI, choix technologiques et planning de deploiement." },
              { num: "3", title: "Implementation", desc: "Deploiement iteratif des solutions IA, integration avec vos outils existants, tests et validation." },
              { num: "4", title: "Suivi", desc: "Optimisation continue, monitoring des performances, adaptation aux nouvelles avancees technologiques." },
            ].map((step) => (
              <div key={step.num} className="relative group">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-light border border-white/5 text-2xl font-bold gradient-text transition-all group-hover:border-primary/20 glow">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-surface-light border border-white/5">
            <div className="absolute inset-0 -z-0">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent-light/15 blur-[80px]" />
            </div>

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Pret a transformer{" "}
                <span className="gradient-text">votre entreprise</span> ?
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Discutons de vos enjeux et decouvrez comment l&apos;IA peut
                concretement accelerer votre activite. Premier echange sans engagement.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow"
                >
                  Prendre rendez-vous
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 text-base font-semibold text-gray-200 transition-all hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                >
                  Voir nos services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
