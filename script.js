
//////////////////////////////////////

//------------todolist-----------------

///////////////////////////////////////


//s'active quand le formulaire est soumis, evenement.preventDefault empeche le comportement par defaut (de renvoyer sur une autre page) et on appelle addTask
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});

const addTask = () => {
    //on attrappe le ul dans lequel on va glisser nos li
    const ul = document.getElementById("tasksTodo");
    const ulCheck = document.getElementById("tasksDone");

    //on attrappe input via son id
    const input = document.getElementById("input");
    // on prend la valeur de l'input input
    const value = input.value;
    //on accepte pas les valeurs vide
    if (value === "") {
        return;
    }
    //on créé un element html li
    const li = document.createElement("li");
    //on ajoute la valeur de l'input au li avec textContent (innerhtml peut etre dangereux)
    li.textContent = value;

    //rajouter des classes a li
    li.setAttribute("class", "p-2 li border");

    //creer une div
    const div = document.createElement("div");
    //rajouter des classes à la div
    div.setAttribute("class", "m-2 d-flex");

    //creationdun bouton modification
    const modifyButton = document.createElement("button");
    //ajouter des classes au bouton de modification
    modifyButton.setAttribute("class", "btn btn-primary btnLi");
    //ajout d'un texte au bouton
    modifyButton.textContent = "modify";
    div.appendChild(modifyButton);
    modifyButton.addEventListener("click", () => {
        const modifyValue = prompt("modifier");
        if (modifyValue === "") {
            return;
        }
        li.firstChild.textContent = modifyValue;
    });

    //creation du bouton delete
    const deleteButton = document.createElement("button");
    //ajouts des classes a deletebouton
    deleteButton.setAttribute("class", "btn btn-danger btnLi");
    // du texte a delete button
    deleteButton.textContent = "delete";
    //ajout de ce bouton a la div
    div.appendChild(deleteButton);
    //supression de l'element li(le parent du bouton)
    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    //creation d'un input
    const checkbox = document.createElement("input");
    //ajout d'un attribut type définit sur checkbox pour en faire un checkbox
    checkbox.setAttribute("type", "checkbox");
    //ajout des classes a ceckbox
    checkbox.setAttribute("class", "checkbox");
    //ajout de checkbox à la div
    div.appendChild(checkbox);
    checkbox.addEventListener("click", () => {
        if (li.parentNode === ul) {
            ulCheck.prepend(li);
        } else {
            ul.prepend(li);
        }
    });

    //ajout de classes à la div
    div.setAttribute("class", "divButton");

    //ajout de la div au li
    li.appendChild(div);

    //on ajoue notre nouvel li au debut du ul
    ul.prepend(li);
    //on redefinit la valeur du champ a vide
    input.value = "";
};









////////////////////////////////////////////

//----------TIKTAKTOE-------------

///////////////////////////////////////////



//definition d'une variable par case
let b1, b2, b3, b4, b5, b6, b7, b8, b9;

//attribution des cases au variable via leurs id
b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");
b4 = document.getElementById("b4");
b5 = document.getElementById("b5");
b6 = document.getElementById("b6");
b7 = document.getElementById("b7");
b8 = document.getElementById("b8");
b9 = document.getElementById("b9");

//creation d'un tableau cases contenant toutes les cases(pour boucler dessus)
const cases = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

//defintion du joueur par defaut à x
let player = "X";

//prend dans le html l'element dans lequel on indiquera a qui c'est de jouer
const turnPlayer = document.getElementById('turnPlayer')
//affichage du joueur qui doit jouer
turnPlayer.textContent = player


//boucle for of qui parcours chaques cases afin de toutes les ecouter
for (let i of cases) {
    //ecoute du clic par case
  i.addEventListener("click", () => {
    //si la case cliqué n'a pas d'enfant on créé un element p
      if (!i.firstChild){ 
        const p = document.createElement("p");
        // on y ajoute un class pour lui ajouter du style
        p.setAttribute("class", "p");
        //puis on y inscri le joueur actuel (soit x soit o)
        p.textContent = player;
        //et enfin on ajoute l'element à la case concerné
        i.appendChild(p);
        //fonction qui verifie si le coup est gagnant
        checkWin();
        //changement de joueur
        if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }}
    //affichage du joueur qui doit jouer
turnPlayer.textContent = player
  });
}

//fonction pour effacer la partie en cours
const reset = () => {
    //parcourt les cases en effacant le contenu
    for (i of cases) {
        i.textContent = "";
    }
    //redefinit le joueur par defaut sur x
    player = 'X'

    //affichage de x comme joueur a qui de jouer
turnPlayer.textContent = player
//efface le message du gagnant
winner.textContent = ''
};

//prend l'element bouton qui sera le bouton pour reset
const resetButton = document.getElementById("resetButton");
//application de reset au clique du bouton
resetButton.addEventListener("click", () => {
    reset();
});

//tableau comprenant un tableau de chaques composition gagnante (pour boucler dedans et verifier si il y a une de ses compositions en jeu)
allWin = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
    [b1, b5, b9],
    [b3, b5, b7],
]

//creation de la variable qui prendra la valeur du joueur gagnant
let winnerPlayer = ''
//attribution de la variable du message gagnant a un p dans le html
const winner = document.getElementById('winner')

//fonction qui verifie si le coup est gagnant (est appelé plus haut pour chaques clique)
const checkWin = () => {
    //on boucle sur le tableau des combinaisons gagnante
    for(let arrWin of allWin){
        //on boucle sur chaques cases par combinaison gagnante
        for(let caseWin of arrWin)
            //si la case potentiellement gagnante à un enfant
            if(caseWin.firstChild){
                //et si la suite de la comosition a le meme enfant (le joueur en question donc soit : x x x sit : o o o)
            if(arrWin[0].textContent === arrWin[1].textContent && arrWin[1].textContent === arrWin[2].textContent ){
                //alors on design le joueur gagnant en attrapant l'enfant responsable de la victoire (si c'etait x x x alors cest le joueur x qui a gagné)
                 winnerPlayer = caseWin.textContent
                 //deffinition du message gagnant avec le nom du gagnant
                 winner.textContent = `le gangnant est ${winnerPlayer}`
            }
        }
    }
}


