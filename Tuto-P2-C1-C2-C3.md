P2-Manipulez les listes en js

* FILTER :pour filtrer les produits   : Prends une function et il ne peut être utilisé qu'une fois  par function anonyme
* ```js
  filter(function(pieces)) //ile prend comme argument  1 true 2 false 
  ```
* SORT :Pour réordonner une liste elle :  negatif positif  null
* ```js
  sort(function(a,b))
  ```
* BOUCLE FOR
* ```js
  for (let i = 0; i < pieces.length; i++) {

  // Récupération de l'élément du DOM qui accueillera les fiches
  const sectionFiches = document.querySelector(".fiches");
  // Création d’une balise dédiée à une pièce automobile
  const pieceElement = document.createElement("article");
  // On crée l’élément img.
  const imageElement = document.createElement("img");
  // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
  imageElement.src = pieces[i].image;
  // Idem pour le nom, le prix et la catégorie...

  // On rattache la balise article à la section Fiches
  sectionFiches.appendChild(pieceElement);
  // On rattache l’image à pieceElement (la balise article)
  pieceElement.appendChild(imageElement);
  // Idem pour le nom, le prix et la catégorie...
  }
  ```
* Récupérer le css

Lundi matin


CODE FINAL COUR P2C1
