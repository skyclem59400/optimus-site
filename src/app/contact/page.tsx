"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

const faqs = [
  {
    q: "Combien coute une mission type ?",
    a: "Chaque projet est unique, c'est pourquoi je propose un devis gratuit et personnalise apres un premier echange. Le tarif depend de la complexite, de la duree et du perimetre de la mission.",
  },
  {
    q: "Combien de temps dure une implementation ?",
    a: "De quelques jours pour une automatisation simple a plusieurs mois pour une transformation complete. Lors de notre premier echange, je vous donnerai une estimation precise.",
  },
  {
    q: "Travaillez-vous avec des PME ?",
    a: "Absolument. L'IA est accessible a toutes les tailles d'entreprise. Je propose des solutions adaptees au budget et aux besoins des PME comme des grandes organisations.",
  },
  {
    q: "Faut-il des competences techniques en interne ?",
    a: "Non, ce n'est pas necessaire. Nous adaptons nos solutions a votre niveau technique et formons vos equipes pour une prise en main autonome.",
  },
  {
    q: "Comment se deroule un premier echange ?",
    a: "Un appel decouverte de 30 minutes, gratuit et sans engagement. Nous discutons de vos enjeux, j'evalue les opportunites IA et je vous propose une feuille de route claire.",
  },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">Parlons de votre projet</span>
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-400">
              Une question, un projet, une idee ? Prenons le temps d&apos;en discuter et de definir ensemble la meilleure strategie IA pour votre entreprise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content - 2 columns */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left column - Info */}
          <div className="flex flex-col gap-8">
            <AnimatedSection delay={0}>
              <p className="text-base leading-7 text-gray-300">
                Chaque projet est unique. Discutons de vos besoins et trouvons ensemble la meilleure approche pour integrer l&apos;IA dans votre entreprise.
              </p>
            </AnimatedSection>

            {/* Email card */}
            <AnimatedSection delay={0}>
              <div className="glass rounded-2xl p-6 transition-all hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Email</h3>
                    <a href="mailto:contact@optimus-ia.fr" className="mt-1 block text-sm text-primary transition-colors hover:text-primary-light">
                      contact@optimus-ia.fr
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Phone card */}
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-2xl p-6 transition-all hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Telephone</h3>
                    <p className="mt-1 text-sm text-gray-400">Sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Location card */}
            <AnimatedSection delay={0.2}>
              <div className="glass rounded-2xl p-6 transition-all hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Localisation</h3>
                    <p className="mt-1 text-sm text-gray-400">France &mdash; interventions nationales et remote</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick response */}
            <AnimatedSection delay={0.3}>
              <div className="mt-2 flex items-center gap-3 rounded-xl bg-primary/5 px-5 py-4 border border-primary/10">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Reponse rapide</p>
                  <p className="text-xs text-gray-400">Je reponds generalement sous 24h</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column - Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="glass rounded-2xl p-8 lg:p-10">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 animate-pulse-glow">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">Message envoye !</h3>
                  <p className="mt-2 text-sm text-gray-400">Merci pour votre message. Je vous repondrai dans les plus brefs delais.</p>
                  <button type="button" onClick={() => setFormSubmitted(false)} className="mt-8 text-sm font-medium text-primary transition-colors hover:text-primary-light">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h2 className="text-xl font-semibold text-white">Envoyez-moi un message</h2>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Nom <span className="text-primary">*</span>
                    </label>
                    <input type="text" id="name" name="name" required autoComplete="name" placeholder="Votre nom complet" className="mt-2 block w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder-muted outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input type="email" id="email" name="email" required autoComplete="email" placeholder="vous@entreprise.com" className="mt-2 block w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder-muted outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300">Entreprise</label>
                    <input type="text" id="company" name="company" autoComplete="organization" placeholder="Nom de votre entreprise" className="mt-2 block w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder-muted outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                      Sujet <span className="text-primary">*</span>
                    </label>
                    <select id="subject" name="subject" required defaultValue="" className="mt-2 block w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option value="" disabled className="text-muted">Selectionnez un sujet</option>
                      <option value="automatisation">Automatisation</option>
                      <option value="agents-ia">Agents IA</option>
                      <option value="audit-ia">Audit IA</option>
                      <option value="formation">Formation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea id="message" name="message" required rows={5} placeholder="Decrivez votre projet, vos besoins ou votre question..." className="mt-2 block w-full resize-y rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder-muted outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20" />
                  </div>

                  <button type="submit" className="mt-2 w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20">
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-surface/50">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="gradient-text">Questions frequentes</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.q} delay={index * 0.1}>
                <div className="glass rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-sm font-medium text-white transition-colors hover:text-primary text-left"
                  >
                    <span>{faq.q}</span>
                    <motion.svg
                      className="h-5 w-5 shrink-0 text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      animate={{ rotate: openFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </motion.svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-sm leading-7 text-gray-400">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
