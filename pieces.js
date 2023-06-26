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
 prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
 const categorieElement = document.createElement("p");
 categorieElement.innerText = article.categorie ?? "(aucune catégorie";
 const descriptionElement = document.createElement("p");
 descriptionElement.innerText = article.descriptionElement ?? "Pas de description pour le moment.";
 const stockElement = document.createElement("p");
 stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

 /*Rattaché le avec querySelector: VP1C4*/

sectionFiches.appendChild(pieceElement)
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
pieceElement.appendChild(descriptionElement);
pieceElement.appendChild(stockElement)
}
