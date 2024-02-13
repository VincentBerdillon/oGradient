# Gradient :

## Objectifs

Créer un sélecteur de couleur aléatoire divisé en deux zones, gauche et droite avec la possibilité de créer une couleur random uniquement oà gauche, à droite ou les deux. Inscrire la valeur hexa au dessus de chaque couleur. Compter le nombre de couleurs générées. Varier l'angle de présentation des couleurs.

## Instructions

### Etape 1

- Ajouter 1 premier bouton dans le html (voir `src/assets/index.html)` pour changer la direction à `45 degrés`
- Ajouter un écouteur au click pour émettre une action qu'on traduira en nouveau state dans le reducer

### Etape 2

- ajouter 3 nouveaux boutons pour changer la direction du dégradé
  - 135 degrés
  - 225 degrés
  - 315 degrés
- modifier le reducer et les actions pour gérer toutes les directions avec 1 seule action :thinking:
