# SPA

## installation

Pour pouvoir installer le projet en local, il suffit de cloner le dépôt.
```sh
git clone git@github.com:aflori/greenhub-SPA.git
# or without token
git clone https://github.com/aflori/greenhub-SPA.git
```

puis d'installer les dépendances
```sh
npm install
```

Pour vérifier l'installation, on peut lancer en local le serveur
```sh
npm run dev
```
et aller [ici](http://localhost:5173/) une fois le serveur lancé sans erreurs.

## dépendances

Sera fait plus tard, si on a le temps (trop pressé par le temps)

***
***

Pour déployer l'application:

```sh
npm run build
```

Pour utiliser [ESLint](https://eslint.org/)

```sh
npm run lint
```

***

# le CSS

pour le CSS, on utilisera les couleurs:
- default (#F9A000) pour les bandes de rassurences et boutons principaux
- primary (#FEE5B4) pour les fiches de description
- secondary (#267126) pour les autres boutons
- accent (#0A320A) pour l'en-tête/pied-de-pages
- neutral (#B8BCC8) pour les champs d'input/gris de l'en-tête
