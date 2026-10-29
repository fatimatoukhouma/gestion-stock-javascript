// On récupère les elements
// getElementById() permet de sélectionner un élément HTML à partir de son identifiant
const Form = document.getElementById("form")
const nomInput = document.getElementById("nom");
const prixInput = document.getElementById("prix");
const quantiteInput = document.getElementById("quantite");
const categorieInput= document.getElementById("categorie");

// On créé une variable qui permet de savoir quelle carte est en cours de modification
// Au depart, aucune carte n'est selectionné
// On utilise let parce que cette variable va changer de valeur
let carteModifier = null;

// On écoute l'événement "submit" du formulaire
// "submit" se déclenche lorsque l'utilisateur valide le formulaire
// addEventListener() permet d'attendre qu'un événement se produise
Form.addEventListener("submit", function(event)
{
  // Empêche le comportement par défaut du formulaire
  // Normalement, l'envoi d'un formulaire peut provoquer le rechargement de la page
  // preventDefault() empêche ce rechargement
  event.preventDefault();   

  // RÉCUPÉRATION DES VALEURS SAISIES

  // .value permet de récupérer ce que l'utilisateur a écrit dans l'input
  const nom = nomInput.value;
  const prix = prixInput.value;
  const quantite = quantiteInput.value;
  const categorie = categorieInput.value;
  // Si une carte est actuellement en cours de modification
  if (carteModifier !== null)
  {
    // On recupère les enciennes informations de la carte
    const nomProduit = carteModifier.querySelector(".nomProduit");
    const prixProduit = carteModifier.querySelector(".prixProduit");
    const quantiteProduit = carteModifier.querySelector(".quantiteProduit");
    const categorieProduit = carteModifier.querySelector(".categorieProduit");

    // On remplace ces enciennes informations par les nouvelles
    nomProduit.innerHTML= `<strong>Produit:</strong>${nom}`;
    prixProduit.innerHTML= `<strong>Prix:</strong>${prix} FCFA`;
    quantiteProduit.innerHTML= `<strong>Quantite:</strong>${quantite}`;
    categorieProduit.innerHTML= `<strong>Catégorie:</strong>${categorie}`;

 // COULEUR DE LA CARTE SELON LA CATÉGORIE

    if (categorie === "Informatique")
    {
        carteModifier.style.backgroundColor = "lightblue";
    }
    else if (categorie === "Alimentation")
    {
        carteModifier.style.backgroundColor = "lightpink";
    }
    else if (categorie === "Vetements")
    {
        carteModifier.style.backgroundColor = "lightyellow";
    }
    else
    {
        carteModifier.style.backgroundColor = "lightgray";
    }

    // ÉTAT DU STOCK

    const stock = carteModifier.querySelector(".stock");

    if (quantite < 5)
    {
        stock.textContent = "Stock faible";
        stock.style.color = "red";
    }
    else if (quantite <= 15)
    {
        stock.textContent = "Stock moyen";
        stock.style.color = "orange";
    }
    else
    {
        stock.textContent = "Stock suffisant";
        stock.style.color = "green";
    }

  // La modification est terminée
    // On remet la variable à null
    carteModifier= null;

    // On vide le formulaire
     nomInput.value = "";
     prixInput.value = "";
     quantiteInput.value = "";
     categorieInput.value = "";

     // On arrete ici pour ne pas creer une nouvelle carte
     return;
  }

  // CRÉATION DE LA CARTE DU PRODUIT

  // On crée un nouvel élément <div> avec JavaScript
  // Cette div va représenter la carte entière du produit
  const div = document.createElement("div");

  // On ajoute à cette div le contenu HTML de notre carte
  // Les valeurs ${nom}, ${prix} et ${quantite} sont remplacées
  // par les valeurs saisies par l'utilisateur
  div.innerHTML =
  `
    <p class="nomProduit"><strong>Produit:</strong>${nom}</p>

    <p class="prixProduit"><strong>Prix:</strong>${prix} FCFA</p>

    <p class="quantiteProduit"><strong>Quantite:</strong>${quantite}</p>

    <p class="categorieProduit"><strong>Catégorie:</strong>${categorie}</p>

    <p class="stock"></p>

    <button class="modifier">Modifier</button>

    <button class="supprimer">Supprimer</button>


  `;
//
if(categorie === "Informatique")
{
  div.classList.add("informatique");
  div.style.backgroundColor="lightblue";
}

else if(categorie === "Alimentation")              
{                                             
    div.classList.add("alimentation");
    div.style.backgroundColor="lightpink";
}  

else if(categorie === "Vetements")              
{                                             
 div.classList.add("vetements");
 div.style.backgroundColor="lightyellow";
}                                                             

else          
{                                             
  div.classList.add("autre");
  div.style.backgroundColor="lightgray";
}                                                                                                 

// STYLE DE LA CARTE

  // On ajoute une bordure en pointillés en haut de la carte
  // "2px" représente l'épaisseur de la bordure
  // "dotted" signifie que la bordure est composée de points
  // "black" représente la couleur noire
  div.style.borderTop = "2px dotted black";
  div.style.borderBottom = "2px dotted black";

  // On ajoute un espace intérieur de 20px
  // padding crée de l'espace entre le contenu et les bordures de la carte
  div.style.padding = "20px";

  // On donne une largeur de 30% à la carte
  div.style.width = "30%";

  // RÉCUPÉRATION DES ÉLÉMENTS <p>

  // On récupère tous les éléments <p> qui se trouvent à l'intérieur de la div
  // querySelectorAll("p") sélectionne tous les paragraphes <p>
  // Le résultat est une NodeList contenant tous les paragraphes de cette carte
  const paragraphs = div.querySelectorAll("p");


  // On parcourt chaque paragraphe récupéré
  // forEach() permet d'exécuter une fonction pour chaque élément de la NodeList
  paragraphs.forEach(function(p)
  {
    // On ajoute un petit espace horizontal entre les p 
    p.style.marginRight = "0 3px";

  });
  const stock = div.querySelector(".stock");

  if(quantite < 5)
  {
    stock.textContent="Stock faible";
    stock.style.color="red";
  }
                                     
  else if(quantite <= 15)                 
  {                                
      stock.textContent="Stock moyen";
      stock.style.color="orange" ;        
                                     
  }    
                                     
  else                 
  {                                
      stock.textContent="Stock suffisant";
      stock.style.color="green";       
  }                                


  // AFFICHAGE DE LA CARTE DANS LA PAGE
  // On ajoute la div créée dans le <body> de la page
  // appendChild() permet d'ajouter un élément HTML comme enfant d'un autre élément
  // Ici, la carte est ajoutée à la fin du <body>
  document.body.appendChild(div);

  // VIDAGE DU FORMULAIRE
  nomInput.value = "";
  prixInput.value = "";
  quantiteInput.value = "";
  categorieInput.value = "";

  // BOUTON SUPPRIMER

  // On recherche le bouton "Supprimer" qui se trouve dans cette carte
  // querySelector(".supprimer") recherche l'élément possédant la classe "supprimer"
  const supprimer = div.querySelector(".supprimer");
 // On ajoute un événement "click" au bouton Supprimer
  // Cette fonction sera exécutée uniquement lorsque l'utilisateur cliquera
  // sur le bouton Supprimer de cette carte
  supprimer.addEventListener("click", function()
  {
    // remove() supprime la carte entière du document HTML
    // "div" représente précisément la carte liée à ce bouton
    // Donc seule la carte du produit sélectionné sera supprimée
    div.remove();
  });

  // BOUTON MODIFIER

  // On recherche le bouton "Modifier" qui se trouve dans cette carte
  // querySelector(".modifier") recherche l'élément possédant la classe "modifier"
  const modifier = div.querySelector(".modifier");


  // On ajoute un événement "click" au bouton Modifier
  // Le code à l'intérieur sera exécuté lorsque l'utilisateur cliquera
  // sur le bouton Modifier
  modifier.addEventListener("click", function()
  {
    // On recupère les elements de la carte
    const nomProduit = div.querySelector(".nomProduit");
    const prixProduit = div.querySelector(".prixProduit");
    const quantiteProduit = div.querySelector(".quantiteProduit");
    const categorieProduit= div.querySelector(".categorieProduit");
    // On recupère leur contenu
    // replace() permet de remplacer une partie d'un texte par autre chose
    const ancienNom= nomProduit.textContent.replace("Produit:" , "");
    const ancienPrix= prixProduit.textContent.replace("Prix:" , "").replace("FCFA" , "");
    const ancienneQuantite= quantiteProduit.textContent.replace("Quantite:" , "");
    const ancienneCategorie= categorieProduit.textContent.replace("Catégorie:","");
    // On place les enciennes informations dans le formulaire
    nomInput.value=ancienNom;
    prixInput.value=ancienPrix;
    quantiteInput.value=ancienneQuantite;
    categorieInput.value=ancienneCategorie;

    // On memorise la carte
    // Pour pouvoir le modifier lorsque le formulaire sera validé 
    carteModifier= div;
  });

} );
