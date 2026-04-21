# TimeTravel Agency — Webapp Interactive

Webapp interactive pour **TimeTravel Agency**, une agence de voyage temporel fictive de luxe. Le site permet aux visiteurs de decouvrir 3 destinations temporelles, d'interagir avec un agent conversationnel, et de recevoir une recommandation personnalisee via un quiz intelligent.

**Projet pedagogique — M1/M2 Digital & IA — Projet supervise IA, Session 2**

---

## Equipe

| Nom       | Prenom   |
|-----------|----------|
| Cabee     | Pauline  |
| Roth      | Simon    |
| Gilbert   | Robin    |
| Menou     | Lucas    |

---

## Contexte et choix techniques

Le site a ete developpe en **HTML, CSS et JavaScript purs**, sans framework ni dependance externe (pas de React, pas de Node, pas de build). Ce choix a ete fait pour plusieurs raisons :

- **Simplicite de deploiement** : un hebergement statique via GitHub Pages suffit, sans configuration serveur ni pipeline de build.
- **Facilite de modification** : chaque membre du groupe peut modifier un fichier independamment sans risque de conflit sur l'ensemble du projet.
- **Transparence du code** : le code est lisible et comprehensible directement, sans couche d'abstraction.
- **Fiabilite** : aucune dependance a un service tiers (API, CDN critique, serveur backend), le site fonctionne de maniere autonome.

Le deploiement se fait via **GitHub Pages**, directement depuis la branche main du repository.

---

## Architecture du projet

Le projet est structure en trois fichiers distincts, chacun avec une responsabilite claire :

```
timetravel-agency/
    index.html           Structure HTML de la page (sections, navigation, contenu)
    style.css            Design et mise en forme (DA, responsive, animations CSS)
    script.js            Logique interactive (chatbot, quiz, reservation, animations scroll)
    VIDEO_PARIS.mp4      Video destination Paris 1889
    VIDEO_FLORENCE.mp4   Video destination Florence 1504
    VIDEO_CRETACE.mp4    Video destination Cretace
    README.md            Documentation du projet
```

Cette separation permet de travailler sur le design sans toucher a la logique, et inversement. Les videos sont hebergees directement dans le repository pour eviter toute dependance a un service externe.

---

## Fonctionnalites implementees

### Page d'accueil et navigation

Le site s'ouvre sur une hero section avec des animations d'entree progressives (apparition du titre, du sous-titre et des boutons d'action). Une barre de navigation fixe permet d'acceder directement aux differentes sections. L'ensemble est responsive et adapte au mobile.

### Galerie des destinations

Trois cartes presentent les destinations temporelles proposees par l'agence :

- **Paris 1889** — La Belle Epoque, inauguration de la Tour Eiffel, Exposition Universelle. 750 euros, 3 jours.
- **Cretace, -65 millions d'annees** — Observation de dinosaures, forets geantes, volcans actifs. 950 euros, 2 jours.
- **Florence 1504** — La Renaissance italienne, Michel-Ange, Leonard de Vinci. 850 euros, 4 jours.

Chaque carte integre une video MP4 en lecture automatique (muette, en boucle) et ouvre une modale detaillee au clic, avec les points forts de la destination et un acces direct a la reservation.

### Agent conversationnel (Chatbot FAQ)

Un widget de chat flottant est accessible en permanence depuis le coin inferieur droit de la page. Il fonctionne sur un systeme de navigation par boutons : l'utilisateur clique sur des questions predefinies et recoit des reponses contextuelles.

Le chatbot couvre les sujets suivants : presentation detaillee de chaque destination, grille tarifaire complete, processus de reservation, securite des voyages temporels, durees et points de depart, questions frequentes (bagages, vetements, politique d'annulation).

Ce systeme a ete choisi plutot qu'une API externe pour garantir un fonctionnement fiable sans dependance a un service tiers, et pour assurer une experience utilisateur fluide quel que soit le contexte de consultation.

### Quiz de recommandation

Un quiz interactif en 4 questions analyse les preferences du visiteur (type d'experience, periode historique, environnement, activites) et recommande la destination la plus adaptee. Un algorithme de scoring attribue des points a chaque destination en fonction des reponses, puis affiche un resultat personnalise avec une description immersive.

### Formulaire de reservation

Une section dediee permet de simuler une reservation complete : selection de la destination, choix de la date de depart via un calendrier, nombre de voyageurs (1 a 6), nom et email. A la validation, une confirmation visuelle s'affiche avec le recapitulatif detaille du voyage (destination, date, prix, nombre de voyageurs). Le formulaire est fonctionnel cote interface mais ne transmet pas de donnees a un serveur (projet fictif).

### Section "L'Agence"

Quatre cartes presentent les valeurs de l'agence : securite, immersion totale, service premium et personnalisation par intelligence artificielle.

---

## Direction artistique

Le design suit une direction artistique sombre et raffinee, articulee autour de trois couleurs :

| Element            | Couleur     | Usage                                      |
|--------------------|-------------|---------------------------------------------|
| Gris anthracite    | #17181C     | Fond principal, surfaces                    |
| Emeraude           | #2EC486     | Accents, boutons, elements interactifs      |
| Dore discret       | #C9A84C     | Prix, details premium, touche de luxe       |

Les typographies utilisees sont :

- **DM Serif Display** pour les titres (serif elegant)
- **Libre Baskerville** pour les accents et labels (serif classique, italique)
- **Sora** pour le corps de texte et l'interface (sans-serif moderne, leger)

Les animations sont volontairement subtiles : apparitions progressives au scroll via Intersection Observer, transitions douces sur les interactions, et particules flottantes discretes sur la hero section.

---

## Outils IA utilises

| Usage                        | Outil                          |
|------------------------------|--------------------------------|
| Generation du code           | Claude (Anthropic)             |
| Generation des visuels       | A completer                    |
| Generation des videos        | A completer                    |

Le code a ete genere par IA puis revu, adapte et structure manuellement par l'equipe. Les reponses du chatbot et les textes du quiz ont ete rediges specifiquement pour le contexte du projet.

---

## Deploiement

Le site est heberge sur GitHub Pages.

**URL du site** : *(a completer avec votre URL GitHub Pages)*

Procedure de deploiement :

1. Les fichiers sont pushes sur la branche main du repository.
2. Dans les parametres du repository (Settings puis Pages), GitHub Pages est configure pour deployer depuis la branche main, dossier racine.
3. Le site est accessible sous quelques minutes a l'adresse attribuee par GitHub.

Aucun build, aucune installation, aucune commande n'est necessaire. Le site fonctionne directement depuis les fichiers statiques.

---

## Licence

Projet pedagogique — M1/M2 Digital & IA. Utilisation non commerciale uniquement.
