#  TimeTravel Agency — Webapp Interactive

Webapp interactive pour **TimeTravel Agency**, une agence de voyage temporel fictive de luxe. Le site permet aux visiteurs de découvrir 3 destinations temporelles, d'interagir avec un agent conversationnel IA, et de recevoir une recommandation personnalisée via un quiz intelligent.

> Projet pédagogique — M1/M2 Digital & IA — Projet supervisé IA, Session 2

---

## Équipe    

| Nom | Prénom |
|-----|--------|
| Cabée | Pauline |
| Roth | Simon |
| Gilbert | Robin |
| Menou | Lucas |

---

## Objectif

Développer une webapp moderne et interactive mettant en scène l'agence TimeTravel Agency et ses 3 destinations temporelles, avec des fonctionnalités alimentées par l'intelligence artificielle :

- **Paris 1889** — La Belle Époque, inauguration de la Tour Eiffel
- **Crétacé −65M** — L'ère des dinosaures
- **Florence 1504** — La Renaissance italienne, Michel-Ange et Léonard de Vinci

---

## Stack Technique

| Catégorie | Technologie |
|-----------|-------------|
| Framework | React (JSX) |
| Styling | CSS séparé + Google Fonts (DM Serif Display, Libre Baskerville, Sora) |
| Animations | CSS Keyframes + Intersection Observer API |
| Chatbot | Chatbot FAQ interactif (boutons cliquables, sans API externe) |
| Quiz | Algorithme de scoring + résultats personnalisés |
| Vidéos | MP4 intégrées dans les cartes destinations |
| Déploiement | GitHub Pages |
| Versionning | GitHub |

---

## Features implémentées

### Phase 1 — Architecture & Planning
- Structure de navigation définie : Header → Hero → Destinations → Quiz → L'Agence → Footer
- Design responsive (mobile-first)
- Maquette et wireframe réalisés via IA générative

### Phase 2 — Génération de code (Vibe Coding)
- **Hero section** avec particules flottantes dorées, animations d'entrée progressives et indicateur de scroll
- **Galerie des 3 destinations** — Cards interactives avec hover effects, gradient backgrounds, modale de détail au clic (prix, durée, points forts)
- **Design dark mode luxueux** — Palette noir + or (tokens : #0A0A0F, #D4AF37, #F4E5A3)
- **Animations au scroll** — Fade-in via Intersection Observer, micro-interactions sur les boutons et les cartes

### Phase 3 — Intelligence Artificielle & Agents
- **Agent conversationnel (Chatbot)** — Widget flottant en bas à droite, connecté à l'API Anthropic Claude. Personnalité configurée : conseiller de voyage temporel, professionnel et chaleureux, expert des 3 destinations. Répond aux questions sur les destinations, les prix, les conseils de voyage, et la FAQ.
- **Quiz de recommandation personnalisée** — 4 questions sur les préférences du voyageur, algorithme de scoring, puis appel à l'IA pour générer une recommandation personnalisée et immersive.

### Phase 4 — Documentation & Déploiement
- README complet (ce document)
- Déploiement sur Vercel
- Code versionné sur GitHub

---

## Outils IA utilisés (transparence)

| Usage | Outil / Modèle | Détail |
|-------|-----------------|--------|
| Génération du code | Claude (Anthropic) | Génération de la webapp React complète via prompting itératif |
| Chatbot intégré | API Anthropic — Claude Sonnet | Agent conversationnel en temps réel, system prompt personnalisé |
| Recommandation quiz | API Anthropic — Claude Sonnet | Génération de texte personnalisé post-quiz |
| Visuels destinations | _À compléter (Midjourney / DALL-E / Flux)_ | Images hero des 3 destinations |
| Vibe coding | Bolt.new | Setup projet, itérations design, déploiement |

---

## Structure du projet

```
timetravel-agency/
├── index.html           # Page principale
├── style.css            # Styles (DA anthracite + émeraude + doré)
├── script.js            # Logique (chatbot, quiz, réservation, animations)
├── VIDEO_PARIS.mp4      # Vidéo destination Paris
├── VIDEO_FLORENCE.mp4   # Vidéo destination Florence
├── README.md            # Ce fichier
```

---

## Installation & Lancement

### Prérequis
- Node.js (v18+)
- npm ou yarn

### Lancement local

```bash
# Cloner le repository
git clone https://github.com/VOTRE-USERNAME/timetravel-agency.git
cd timetravel-agency

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173` (ou le port indiqué).

### Via Bolt.new (méthode la plus simple)
1. Ouvrir [bolt.new](https://bolt.new)
2. Créer un nouveau projet React
3. Remplacer le contenu de `App.jsx` par le code fourni
4. Le site se lance automatiquement dans le preview

---

## Déploiement

Le site est déployé sur Vercel :
🔗 **URL : _[À compléter avec votre URL Vercel]_**

---

## Prompts documentés

### Prompt principal — Génération de la webapp
```
Créer une webapp React complète pour TimeTravel Agency, agence de voyage temporel fictive.
Design : dark mode luxueux, noir + or (#D4AF37).
Typographies : Playfair Display pour les titres, Cormorant Garamond pour les accents,
Outfit pour le corps.

Features :
- Hero section avec particules flottantes et animations d'entrée
- 3 cartes destinations (Paris 1889, Crétacé -65M, Florence 1504) avec modale de détail
- Quiz de recommandation IA (4 questions, scoring, appel API pour recommandation)
- Chatbot IA flottant avec personnalité de conseiller voyage temporel
- Section "L'Agence" avec valeurs
- Footer
- Animations au scroll (Intersection Observer)
- Tout en un seul fichier JSX
```

### Prompt — Personnalité du chatbot
```
Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton rôle : conseiller les clients sur les meilleures destinations temporelles.
Ton ton : professionnel mais chaleureux, passionné d'histoire, enthousiaste sans
être trop familier.
Tu connais parfaitement Paris 1889, le Crétacé -65M et Florence 1504.
Tu peux suggérer des destinations selon les intérêts du client.
```

### Prompt — Recommandation quiz
```
Tu es un conseiller de voyage temporel passionné. Génère une recommandation
personnalisée en 3-4 phrases, enthousiaste et immersive, expliquant pourquoi
cette destination est parfaite. Utilise un ton chaleureux et poétique.
```

---

## Design System

| Token | Valeur | Usage |
|-------|--------|-------|
| Or principal | `#D4AF37` | Accents, CTA, titres hero |
| Or clair | `#F4E5A3` | Highlights, badges |
| Or foncé | `#B8960C` | Gradients, hover states |
| Noir profond | `#0A0A0F` | Background principal |
| Noir secondaire | `#111118` | Cards, modale, chat |
| Noir tertiaire | `#1A1A24` | Inputs, options quiz |
| Gris | `#8A8A9A` | Texte secondaire |
| Blanc cassé | `#F0EDE6` | Texte principal |

---

## Crédits

- **API IA** : [Anthropic](https://anthropic.com) — Claude Sonnet
- **Fonts** : Google Fonts (Playfair Display, Cormorant Garamond, Outfit)
- **Déploiement** : [Vercel](https://vercel.com)
- **Vibe Coding** : [Bolt.new](https://bolt.new) (StackBlitz)
- **Visuels** : _À compléter_

---

## Licence

Projet pédagogique — M1/M2 Digital & IA
Utilisation non commerciale uniquement.
