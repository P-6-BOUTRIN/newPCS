P1C2
LEURS  FORMATS ET LEURS EMPLACEMENTS
les formats utiliser pour  lire:  csv xml json

Base de données SQL

Stocker les données

pour récuperer les informations en ligne API

P1C3 LA SYNTHAX JSON ajouter les informations à la place des x

Création des objets en json  

```json
[
    {
        "id": 1,
        "nom" : "X",
        "prix" : 60,
        "categorie" : "X",
        "image": "images/X.png",
        "description" : "X ",
        "disponibilte" : "X" 
    },

```

P1C4: Générer le  contenu  de votre page grace au dom

```js
IMPORTEZ LES DONNEES DU FICHIER JSON
//1 Inserez ce  code dans pieces.json
// 2 pour récupérer les pieces qui se trouve dans le fichier   pieces-autos.json
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
```

1//LA CREATIONS DES 4 ELEMENTS   pieces.js */

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

2:Rattaché les avec querySelector: et faite appelle a appendChild

```js

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);   ```js
   
```

4. Vérifier les  données
