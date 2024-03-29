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

correction 14.45

CODE FINAL COUR P2C1

![1687843028168](image/Tuto-P2C1/1687843028168.png)
    `<main>`

```js
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {
  // Remplacer le 0 par la variable  i qui permet de recupérer la piece au parcour de la boucle
  const article = pieces[i];
  // Récupération de l'élément du DOM qui accueillera les fiches
  const sectionFiches = document.querySelector(".fiches");
  /*Création d'une balise  dédiées a une pieces auto*/
  const pieceElement = document.createElement("article");
  // Création des balises
  const imageElement = document.createElement("img");
  imageElement.src = article.image;
  const nomElement = document.createElement("h2");
  nomElement.innerText = article.nom;
  const prixElement = document.createElement("p");
  prixElement.innerText = `Prix: ${article.prix} € (${
    article.prix < 35 ? "€" : "€€€"
  })`;
  const categorieElement = document.createElement("p");
  categorieElement.innerText = article.categorie ?? "(aucune catégorie";
  const descriptionElement = document.createElement("p");
  descriptionElement.innerText =
    article.descriptionElement ?? "Pas de description pour le moment.";
  const stockElement = document.createElement("p");
  stockElement.innerText = article.disponibilite
    ? "En stock"
    : "Rupture de stock";

  /*Rattaché le avec querySelector: VP1C4*/
  sectionFiches.appendChild(pieceElement);
  pieceElement.appendChild(imageElement);
  pieceElement.appendChild(nomElement);
  pieceElement.appendChild(prixElement);
  pieceElement.appendChild(categorieElement);
  pieceElement.appendChild(descriptionElement);
  pieceElement.appendChild(stockElement);
}

// BOUTON FILTRE
// Permets de trier dans  l'ordre  des pieces en fonction du prix
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
  // création dune const pour mettre les pieces  dans un tableau en ordre de prix
  const pieceOrdonnées = Array.from(pieces);
  pieceOrdonnées.sort(function (a, b) {
    return a.prix - b.prix;
  });
  console.table(pieces);
});

// / Permets de trier  le prix du plus grand au plus petit
const boutonDecr = document.querySelector(".prixDecroissant");
boutonDecr.addEventListener("click", function () {
  // création dune const pour mettre les pieces  dans un tableau en ordre de prix
  const pieceDecr = Array.from(pieces);
  pieceDecr.sort(function (a, b) {
    return b.prix - a.prix;
  });
  console.table(pieceDecr);
});

const boutonFilter = document.querySelector(".btn-filtrer");
boutonFilter.addEventListener("click", function () {
  // La function Filter
  const piecesFiltrees = pieces.filter(function (pieces) {
    return pieces.prix <= 35;
  });
  console.table(piecesFiltrees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");
boutonNoDescription.addEventListener("click", function () {
  // La function Filter
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.description
  });
  console.table(piecesFiltrees);
});

```
