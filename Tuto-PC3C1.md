# ENVOYER UNE REQUETTE DEPUIS LE NAVIGATEUR

**RECUPERER LES DONNEES EN LIGNE AVEC UNE API**

UNE API PEUT CREER. RECUPERER. METTRE A JOUR. SUPPRIMER PERSISTER LES DONNEES   /LES STOCKER

```

```

/

```js
ligne de code pour se connecter a une API
git clone https://github.com/OpenClassrooms-Student-Center/7697016-Back-End.git api-http 
cd api-http 
npm install 
npm start
```

```JS
Récuperation des donner depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
```


Le serveur peut traiter différents types de requêtes. Les quatre types les plus courants sont :

 la création, la récupération, la modification et la suppression. 

Pour que le serveur identifie quel type de requête il doit traiter, nous devons utiliser les **verbes HTTP** ci-dessous :

* GET pour la récupération ;
* POST pour la création ;
* PUT pour la modification ;
* DELETE pour la suppression.

L’association de la ressource et du verbe permet de décrire l’opération demandée par le navigateur et qui sera traitée par le service web. Par exemple :

* `GET /pieces`  permet de récupérer toutes les pièces automobiles ;
* `POST /avis`  permet de créer un nouvel avis ;
* `DELETE /avis/42`  permet de supprimer l’avis numéro 42.

## Utilisez la fonction fetch pour envoyer une requête

```JS
fetch("http://localhost:8081/pieces");
```

## Récupérez les avis des autres utilisateurs sur les pièces automobiles

```JS
INSEREZ CE CODE DANS pieces.js  
const avisBouton = document.createElement("button");
avisBouton.dataset.id = article.id;
 avisBouton.textContent = "Afficher les avis";
```

```js
Pour ajouter le code vous-même, insérez le code ci-dessous dans avis.js :
export function ajoutListenersAvis() {
    const piecesElements = document.querySelectorAll(".fiches article button");

    for (let i = 0; i < piecesElements.length; i++) {
      piecesElements[i].addEventListener("click", async function (event) {
           /* ... */
      });
    }
}
```

```js
Dans un deuxième temps, nous appelons cette fonction ajoutListenersAvis 
dans le fichier pieces.js après la boucle for de génération des éléments du DOM qui se trouve dans la fonction genererPieces. Comme ceci 

function genererPieces(pieces){
   for (let i = 0; i < pieces.length; i++) {
   //...
    }
    // Ajout de la fonction ajoutListenersAvis
    ajoutListenersAvis();
}
```

### Pour que l’ajout de cette fonction ne génère pas d’erreur dans notre code, nous devons l’importer avant de l’utiliser. Cet import doit être réalisé à la première ligne du fichier pieces.js :

```js
import { ajoutListenersAvis } from "./avis.js";
```

### Cette syntaxe moderne de JavaScript permet d’importer des variables et des fonctions dans nos fichiers sans rajouter d’autres balises script dans notre HTML. Pour cela, il nous suffit d’ajouter la propriété *type *à notre balise script avec la valeur  *module* , comme ceci :

```html
<script type="module" src="pieces.js"></script>
```

#### Enfin, dans l’event listener du fichier avis.js, nous récupérons l’identifiant de la pièce automobile pour laquelle l’utilisateur a cliqué sur le bouton “Afficher les avis”. Nous récupérons la valeur de l’attribut data-id grâce à la propriété “dataset.id”. Nous utilisons ensuite cet identifiant pour construire le chemin de la ressource sur laquelle créer la requête HTTP avec la fonction fetch.

```js
const id = event.target.dataset.id;
fetch(`http://localhost:8081/pieces/${id}/avis`);
```

```js
const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";
```

L’attribut data-id que nous avons utilisé sur la balise button n’est pas spécifique aux identifiants. En réalité, nous pouvons créer n’importe quelle balise data-xxx et récupérer sa valeur en JavaScript avec dataset.xxx. Pour plus d’informations, n’hésitez pas à consulter [cette page](https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/data-*) sur le site MDN.

code final
