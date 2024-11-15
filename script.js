let allumettes = 50

const joueursListElement = document.getElementById("joueurs_list");

const nombreJoueurs = prompt ("Définissez un nombre de joueur !!!!")
const joueurs = []
//défini mon tableau avec le nom des joueurs
for (i=0; i< nombreJoueurs; i++){
        const nomJoueur = prompt ("Donner votre nom de joueur !");
        const joueur = {
            nom: nomJoueur
        }
    joueurs.push(joueur)
    //je récupère la balise <li> pour pouvoir lui incrémenter les noms récupérer par le prompt dans le HTML
    // const joueurElement = document.createElement('li');
    // joueurElement.textContent = joueur.nom;
    // joueursListElement.appendChild(joueurElement);
}

function allumettesRestantes (){
    let joueurActuel= 0
    //tant que le nombre d'allumettes est supérieur a zéro la boucle continue
    while(allumettes > 0){
        alert("C'est au tour de " + joueurs[joueurActuel].nom)
        let nombreDemander = allumettesARetirer()
        //soustrait le nombre d'allumettes demander au nombre restant et donne un message pour dire combien il en reste
        if (nombreDemander <= allumettes){
            allumettes -= nombreDemander;
            alert('il reste actuellement ' + allumettes + ' allumettes')
            //si jamais le nombre d'allumettes atteint zéro, le jeu s'arrête et déclare le gagnant
            if(allumettes == 0){
                alert(joueurs[joueurActuel].nom + "a gagné !!!")
            }
            //une fois le nombre d'allumettes donner, je passe au joueur suivant
            joueurActuel = (joueurActuel + 1) % nombreJoueurs
        }else {
            //si jamais le joueur tente de retirer plus d'allumettes que celle qui reste, montre un message pour dire combien il en reste
            alert('Vous ne pouvez retirer que ' + allumettes + ' allumettes')
        }
    }
}

//fonction pour demander au joueur le nombre d'allumettes à retirer
function allumettesARetirer(){
    let nombreDemander;
    while(true){
        nombreDemander = prompt("Donner un nombre d'allumettes à retirer du jeu !")
        //si jamais le nombre demander est en 1 et 6 (1 et 6 inclus), on retourne le nombre donner
        if (nombreDemander >= 1 &&  nombreDemander <= 6){
            return nombreDemander
        }else {
            //renvois un message si jamais un joueur déclare un nombre inférieur à 1 ou supérieur 6 et lui demande de redonner un chiffre
            alert("Donner un nombre entre 1 et 6 !!")
        }
    }
}

allumettesRestantes()