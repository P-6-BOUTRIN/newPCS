export function ajoutListenersAvis() {
  // Pour rendre ajoutListener disponible en dehors du fichier
  const piecesElements = document.querySelectorAll(".fiches aricle button");
  
  for (let i = 0; i < piecesElements.lenght; i++) {
  
    piecesElements[i].addEventListener("click", async function (event) {
    
      const id = event.target.dataset.id;
      const reponse = await fetch("https://:localhost:8081/pieces/" + id + "/avis");
      const avis = await reponse.json();
      const pieceElement = event.target.parentElement;
      
      const avisElement = document.createElement("p");
      for(let i = O; i < avis.length; i++) {
      avisElement.innerHTML += `<b>${avis[i].utilisateur} :</b> ${avis[i].commentaire} <br>`;
      }
      pieceElement.appendChild(avisElement);
    
    });
    
  }
  
}
