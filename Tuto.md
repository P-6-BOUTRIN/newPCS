P1C2
LEURS  FORMATS ET LEURS EMPLACEMENTS
les formats utiliser pour  lire:  csv xml json

Base de données SQL

Stocker les données

pour récuperer les informations en ligne API

P1C3 LA SYNTHAX JSON

```json
la synthax json  [
    {
        "id": 1,
        "nom": "Ampoule LED",
        "prix": 60,
        "categorie": "Optiques",
        "description":"Distance d'éclairage 100 mètre",
        "disponibilite":"Oui"
    },
```

P1C4:

Générer du contenu  avec le DOM

1. Choisir des balises HTML
2. 1Créer les éléments  : ATTENTION À LA SYNTAXE des element 

   ```js
   const = titreElement document.createElement("h2")
   const = prixElement document.createElement("p")
   const = imgElement document.createElement("img")
   const = categoriesElement document.createElement("p")

   ```
   ```js
   //LA CREATIONS DES 4 ELEMENTS   pieces.js */
    const article = pieces[0];
    const imageElement = document.createElement("img");
    imageElement.src = article.image;

    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} €`;

    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie;
   ```
3. 1Rattaché  les aux reste du document du DOM .fiches

   ```js
   Rattaché le avec querySelector:
   const sectionFiches = document.querySelector(".fiches");
   sectionFiches.appendChild(imageElement);
   sectionFiches.appendChild(nomElement);
   sectionFiches.appendChild(prixElement);
   sectionFiches.appendChild(categorieElement);
   ```
   3.2 Récupération des pièces depuis le fichier JSON

   ```js

   // Récupération des pièces depuis le fichier JSON
   const reponse = await fetch("pieces-autos.json");
   const pieces = await reponse.json();
   ```
4. Vérifier les  données
