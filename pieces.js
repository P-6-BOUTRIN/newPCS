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

// Pour uniquement les nom des pieces plus chère que 35
const noms = pieces.map(piece => piece.nom)
 for(let i = pieces.length -1; i >= 0; i--){
 if( pieces[i].prix > 35){
 noms.splice(i,1)
 }
 }
 
//  Création de la liste
const abordablesElements = document.createElement("ul")
// Ajout de chaque noms a la liste
for(let i=0; i < noms.length; i++){
const nomElement = document.createElement("li");
nomElement.innerHTML = noms[i];
abordablesElements.appendChild(nomElement)
}
// Rattacher l'élément ul  a l'élément present dans la page
// Ajout de l'en-tête puis de le liste au bloc résultat filtres
document.querySelector(".abordables").appendChild(abordablesElements)
