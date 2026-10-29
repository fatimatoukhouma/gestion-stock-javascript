# Gestion de produits avec JavaScript

## Présentation

Ce projet est un exercice réalisé dans le cadre de mon apprentissage du développement web. Il consiste à créer une petite application de gestion de produits en utilisant HTML et JavaScript.

Les styles sont appliqués directement aux éléments HTML à l'aide de JavaScript, sans fichier CSS séparé.

## Fonctionnalités

- Ajouter un produit avec son nom, son prix, sa quantité et sa catégorie.
- Modifier les informations d'un produit.
- Supprimer un produit.
- Appliquer une couleur différente à chaque catégorie de produits.
- Afficher l'état du stock selon la quantité disponible.

## Technologies utilisées

- HTML
- JavaScript
- DOM (Document Object Model)

## Notions JavaScript pratiquées

- Sélection des éléments HTML avec `getElementById()` et `querySelector()`.
- Gestion des événements avec `addEventListener()`.
- Création d'éléments HTML avec `createElement()`.
- Modification du contenu avec `textContent` et `innerHTML`.
- Application de styles avec `element.style`.
- Utilisation des conditions `if`, `else if` et `else`.
- Suppression d'éléments avec `remove()`.

## Fonctionnement du stock

- Quantité inférieure à 5 : stock faible.
- Quantité comprise entre 5 et 15 : stock moyen.
- Quantité supérieure à 15 : stock suffisant.

## Utilisation

1. Ouvrir la page `index.html` dans un navigateur.
2. Saisir le nom, le prix et la quantité du produit.
3. Choisir une catégorie, puis cliquer sur « Ajouter ».
4. Utiliser les boutons « Modifier » et « Supprimer » pour gérer les produits.

## Remarque

Les produits sont affichés dynamiquement dans la page. Pour le moment, ils ne sont pas enregistrés de façon permanente : un rechargement de la page les efface.


Projet réalisé dans le cadre de mon apprentissage personnel du développement web.
