import { ajoutListenersAvis } from "./avis.js"; 

// Récupération des pièces depuis le fichier JSON  // P2C3
const reponse = await fetch("http://localhost:8081/pieces/");
const pieces = await reponse.json();

  function genererPieces(pieces){
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
  prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
  const categorieElement = document.createElement("p");
  categorieElement.innerText = article.categorie ?? "(aucune catégorie";
  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = article.descriptionElement ?? "Pas de description pour le moment.";
  const stockElement = document.createElement("p");
  stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
  
  const avisBouton = document.createElement("button");
  avisBouton.dataset.id = article.id;
  avisBouton.textContent = "Afficher les avis";
  

  /*Rattaché le avec querySelector: VP1C4*/
  sectionFiches.appendChild(pieceElement);
  pieceElement.appendChild(imageElement);
  pieceElement.appendChild(nomElement);
  pieceElement.appendChild(prixElement);
  pieceElement.appendChild(categorieElement);
  pieceElement.appendChild(descriptionElement);
  pieceElement.appendChild(stockElement);
  pieceElement.appendChild(avisBouton);

}
ajoutListenersAvis();
  }

genererPieces(pieces);
  
// Gestion des bouton
// Permets de trier dans  l'ordre  les pieces en fonction du prix
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
//   // création dune const pour mettre les pieces  dans un tableau en ordre de prix
  const pieceOrdonnées = Array.from(pieces);
  pieceOrdonnées.sort(function (a, b) {
    return a.prix - b.prix;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(pieceOrdonnées);
});

const boutonFilter = document.querySelector(".btn-filtrer");
boutonFilter.addEventListener("click", function () {
  // La function Filter
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.piecesFiltrees;
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
  pieceOrdonnées.sort(function (a, b) {
    return b.prix - a.prix;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(pieceOrdonnées);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");
boutonNoDescription.addEventListener("click", function () {
  // La function Filter
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.description;
  });
  document.querySelector(".fiches").innerHTML ="";
  genererPieces("piecesFiltrees");
});


// Pour uniquement les nom des pieces plus chère que 35
const noms = pieces.map((piece) => piece.nom);
for (let i = pieces.length -1; i >= 0; i--) {
  if (pieces[i].prix > 35) {
    noms.splice(i, 1);
  }
}

// console.table(noms);
// Création de l'en-tête

const pElement = document.createElement("p")
pElement.innerText = "Pieces abordables";

//  Création de la liste
const abordablesElements = document.createElement("ul");
// Ajout de chaque noms a la liste
for (let i = 0; i < noms.length; i++) {
  const nomElement = document.createElement("li");
  nomElement.innerText = noms[i];
  abordablesElements.appendChild(nomElement);
}

document.querySelector(".abordables")
.appendChild(pElement)
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
const pElementDisponible = document.createElement("p");
pElementDisponible.innerText = "Pièces disponibles :";
document.querySelector(".disponibles").appendChild(pElementDisponible).appendChild(disponiblesElement);

// P2C3 Correction
// // Efface le contenu d'une balise body et donc l'écran
// document.querySelector(".fiches").innerHTML = "";

const inputPrixMax = document.querySelector("#prix-max")
inputPrixMax.addEventListener("input", function(){
// Filtrer les pieces
const piecesFiltrees = pieces.filter(function(piece){ 
return piece.prix <= inputPrixMax.value;
})
// Effacer l'écran et faite générer piece
document.querySelector(".fiches").innerHTML = "";
genererPieces(piecesFiltrees);
});



