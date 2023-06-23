// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

/*LA CREATIONS DES 4 ELEMENTS   pieces.js */
 const article = pieces[0];
 const imageElement = document.createElement("img");
 imageElement.src = article.image;

 const nomElement = document.createElement("h2");
 nomElement.innerText = article.nom;

 const prixElement = document.createElement("p");
 prixElement.innerText = `Prix: ${article.prix} €`;

 const categorieElement = document.createElement("p");
 categorieElement.innerText = article.categorie;
 
 
 /*Rattaché le avec querySelector:*/
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);