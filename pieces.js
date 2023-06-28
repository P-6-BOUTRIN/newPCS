// P2C3
// Récupération des pieces depuis le fichier JSON
const pieces = await fetch("pieces-auto.json")
.then(pieces => pieces.json());
// Function qui génère toute la page web
function genererPieces(piece){
for(let i = 0; i < piece.length; i++) {
// Création d'une balise à  une piece auto
const pieceElement = document.createElement("article");
// On créer l'élément img
const imageElement = document.createElement("img");
// On accède a l'indice i de la liste piece pour configurer la source de l'image
imageElement.src = piece[i].image
// On rattache l'image à pieceElement(la balise article
pieceElement.appendChild(imageElement);
// Idem pour le nom le prix et la catégorie ...
const nomElement = document.createElement("p");
const prixElement = document.createElement("p");
const categorieElement = document.createElement("p");

pieceElement.appendChild(prixElement)
pieceElement.appendChild(nomElement);
pieceElement.appendChild(categorieElement);

}
}
document.body.appendChild(pieceElement)


// P2C3 SUITE
// Premier affichage de la page
genererPieces(pieces);
// Ajout du listener pour trier les pieces par ordre de prix croissant
const boutonTrier = document.querySelector(".btnTrier")
boutonTrier.addEventListener("click", function(){
const pieceOrdonnées = Array.from(pieces)
pieceOrdonnées.sort(function (a, b){
return b.prix - a.prix;
});
// Effacement de l'écran et regénération de la page
document.querySelector(".fiches").innerHTML = "";
genererPieces(pieceOrdonnées)
})




// Récupération des pièces depuis le fichier JSON
// const reponse = await fetch("pieces-autos.json");
// const pieces = await reponse.json();

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
// Permets de trier dans  l'ordre  les pieces en fonction du prix
// const boutonTrier = document.querySelector(".btn-trier");
// boutonTrier.addEventListener("click", function () {
//   // création dune const pour mettre les pieces  dans un tableau en ordre de prix
//   const pieceOrdonnées = Array.from(pieces);
//   pieceOrdonnées.sort(function (a, b) {
//     return a.prix - b.prix;
//   });
//   // console.table(pieces);
// });

const boutonFilter = document.querySelector(".btn-filtrer");
boutonFilter.addEventListener("click", function () {
  // La function Filter
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.disponibilite;
  });
  // Effacement de l'écran et regénération de la page
document.querySelector(".fiches").innerHTML = "";
genererPieces(piecesFiltrees)
});

// / Permets de trier  le prix du plus grand au plus petit
const boutonDecr = document.querySelector(".btn-decroissant");
boutonDecr.addEventListener("click", function () {
  // création dune const pour mettre les pieces  dans un tableau en ordre de prix
  const pieceDecr = Array.from(pieces);
  pieceDecr.sort(function (a, b) {
    return b.prix - a.prix;
  });
  console.table(pieceDecr);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");
boutonNoDescription.addEventListener("click", function () {
  // La function Filter
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.description;
  });
  console.table(piecesFiltrees);
});

// Pour uniquement les nom des pieces plus chère que 35
const noms = pieces.map((piece) => piece.nom);
for (let i = pieces.length -1; i >= 0; i--) {
  if (pieces[i].prix > 35) {
    noms.splice(i, 1);
  }
}
// console.table(noms);

//  Création de la liste
const abordablesElements = document.createElement("ul");
// Ajout de chaque noms a la liste
for (let i = 0; i < noms.length; i++) {
  const nomElement = document.createElement("li");
  nomElement.innerText = noms[i];
  abordablesElements.appendChild(nomElement);
}
// Rattacher l'élément ul  a l'élément present dans la page
// Ajout de l'en-tête puis de le liste au bloc résultat filtres
document.querySelector(".abordables")
.appendChild(abordablesElements);


// P2C2
// Description des pieces disponible et le prix des pieces
const nomsDisponibles = pieces.map(piece => piece.nom);
const prixDisponibles = pieces.map(piece => piece.prix);

for (let i = pieces.length -1; i >= 0; i--) {
  if (pieces[i].disponibilite === false) {
    nomsDisponibles.splice(i,1);
    prixDisponibles.splice(i,1);
  }
}
// console.table(nomsDisponibles);
// Parcourir la liste du début a la fin.
const disponiblesElement = document.createElement("ul");

for (let i=0; i < nomsDisponibles.length; i++) {
const nomElement = document.createElement("li");
nomElement.innerText =`${nomsDisponibles[i]}-${prixDisponibles[i]} €`;
// Rattacher l'élément li a sont parent
disponiblesElement.appendChild(nomElement);
}
// Rattacher l'élément 
// document.querySelector(".disponibles").appendChild(disponiblesElement);
document.querySelector(".disponibles").appendChild(disponiblesElement);

// P2C3
// // Efface le contenu d'une balise body et donc l'écran
// document.querySelector(".fiches").innerHTML = "";


