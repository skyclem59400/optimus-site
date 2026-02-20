# Optimus - Integration IA en Entreprise

Site vitrine pour **Optimus**, cabinet de conseil specialise dans l'integration de l'intelligence artificielle en entreprise.

## Stack technique

- **Next.js 16** (App Router, Turbopack, Server Components)
- **React 19**
- **Tailwind CSS v4** avec tokens custom (`@theme inline`)
- **Three.js** via React Three Fiber — scene 3D hero (reseau neuronal interactif)
- **Motion** (Framer Motion) — animations scroll-reveal, stagger, accordion
- **next-themes** — toggle dark/light mode avec persistance localStorage

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil avec hero 3D, expertises, processus, CTA |
| `/services` | Services detailles, tarification |
| `/about` | Fondateur, valeurs, stack technique |
| `/blog` | Articles et actualites IA |
| `/contact` | Formulaire, FAQ animee, coordonnees |

## Fonctionnalites visuelles

- **Hero 3D** : reseau neuronal avec 60 nodes flottants (30 sur mobile), connexions dynamiques, parallaxe souris
- **Scroll-reveal** : animations declenchees au scroll sur toutes les sections (fade, slide, stagger)
- **Cartes 3D** : effet tilt au hover avec glow suivant la souris
- **FAQ animee** : accordion avec AnimatePresence (ouverture/fermeture fluide)
- **Barre de progression** : indicateur de scroll dans le header
- **Dark/Light mode** : toggle soleil/lune dans le header, sombre par defaut, toutes les couleurs s'adaptent via CSS variables
- **Palette** : teal (#2dd4bf) en couleur primaire, fond sombre (#030712) ou clair (#f8fafc) selon le mode

## Demarrage

```bash
npm install
npm run dev
```

Le site demarre sur [http://localhost:3001](http://localhost:3001).

## Build

```bash
npm run build
npm start
```

## Structure

```
src/
├── app/
│   ├── page.tsx              # Accueil
│   ├── about/page.tsx        # A propos
│   ├── blog/page.tsx         # Blog
│   ├── contact/page.tsx      # Contact
│   ├── services/page.tsx     # Services
│   ├── layout.tsx            # Layout racine
│   └── globals.css           # Styles globaux + utilitaires
├── components/
│   ├── Header.tsx            # Navigation + barre de progression scroll
│   ├── Footer.tsx            # Pied de page
│   ├── HeroScene.tsx         # Scene Three.js (reseau neuronal 3D)
│   ├── HeroSceneLoader.tsx   # Wrapper client pour import dynamique SSR:false
│   ├── AnimatedSection.tsx   # Wrapper scroll-reveal reutilisable
│   ├── AnimatedCard.tsx      # Carte avec tilt 3D au hover
│   └── ThemeProvider.tsx     # Wrapper next-themes (dark/light mode)
```
