// Partie générale

let epreuve1 = document.getElementById('epreuve1');
let epreuve2 = document.getElementById('epreuve2');
let epreuve3 = document.getElementById('epreuve3');
let ready = document.getElementById('ready');
let pret = document.getElementById('pret');

epreuve1.style.display = "none";
epreuve2.style.display = "none";
epreuve3.style.display = "none";
epreuve4.style.display = "none";

let temps = 0;

// Partie commencer

pret.addEventListener('click',() => {

 epreuve1.style.display = "block";
 ready.style.display = "none";




 function diminuerTemps() {
   console.log(temps);
   temps++
 }
 
 setInterval(diminuerTemps, 1000);

compterlesespaces();
 
});

// Partie compteur temps





// Partie espace

function compterlesespaces() {

let i = 0;
let compteurespace = document.getElementById('compteurespace');

document.addEventListener('keyup', (event) => {

    if (event.key === " ") {
        console.log(i);
        i++;
        compteurespace.innerHTML = i;
    }
    if (i == 30) {
        epreuve1.style.display = "none";
        epreuve2.style.display = "block";
    }
    
    
});
 
}

let phrase = document.getElementById('phrase');


// Partie phrase


let phrasedebut = ['Je suis un dev web'];
let phrasefin = ['né en 1998','né en 1997','né en 1989'];

let randomNumber = Math.floor(Math.random()*(phrasedebut.length));
let randomNumber2 = Math.floor(Math.random()*(phrasefin.length));

let afficherphrase = document.getElementById('afficherphrase');

afficherphrase.innerHTML = phrasedebut[randomNumber] + " " + phrasefin[randomNumber2];



phrase.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
    verifphrase();
    }
})



function verifphrase() {


if(phrase.value == phrasedebut[randomNumber] + " " + phrasefin[randomNumber2]) {

    epreuve2.style.display = "none";
    epreuve3.style.display = "block";
    let myError = document.getElementById('error');
        while (myError.firstChild) {
            myError.removeChild(myError.firstChild);
        }
} else {
    let myError = document.getElementById('error');
        myError.innerHTML = "Tu l'as mal écris !";
        myError.style.color = "red";
        
}

}


// Partie rond




let compteurrond = 0;



let d1 = document.getElementById('d1');

d1.addEventListener("click", () => {

    d1.style.display = "none";
    compteurrond++;
    console.log(compteurrond);
    if (compteurrond == 8) {
        alert("Félicitation tu as fini le jeu en " + temps + " secondes !");
      } 

});

let d2 = document.getElementById('d2');

d2.addEventListener("click", () => {

    d2.style.display = "none";
    compteurrond++;
    console.log(compteurrond);
    if (compteurrond == 8) {
        alert("Félicitation tu as fini le jeu en " + temps + " secondes !");
      } 

 
});

let d3 = document.getElementById('d3');

d3.addEventListener("click", () => {

    d3.style.display = "none";
    compteurrond++;
    console.log(compteurrond);
    if (compteurrond == 8) {
        alert("Félicitation tu as fini le jeu en " + temps + " secondes !");
      } 

});

let d4 = document.getElementById('d4');

d4.addEventListener("click", () => {

    d4.style.display = "none";
    compteurrond++;
    console.log(compteurrond);
    if (compteurrond == 8) {
        alert("Félicitation tu as fini le jeu en " + temps + " secondes !");
      } 

});

let d5 = document.getElementById('d5');

d5.addEventListener("click", () => {

    d5.style.display = "none";
    compteurrond++;
    console.log(compteurrond);
    if (compteurrond == 8) {
        alert("Félicitation tu as fini le jeu en " + temps + " secondes !");
      } 

});

let d6 = document.getElementById('d6');

d6.addEventListener("click", () => {

    d6.style.display = "none";
    compteurrond++;
    console.log(compteurrond);
    if (compteurrond == 8) {
        alert("Félicitation tu as fini le jeu en " + temps + " secondes !");
      } 

});


let d7 = document.getElementById('d7');

d7.addEventListener("click", () => {

    d7.style.display = "none";
    compteurrond++;
    console.log(compteurrond);
    if (compteurrond == 8) {
        alert("Félicitation tu as fini le jeu en " + temps + " secondes !");
      } 

});

let d8 = document.getElementById('d8');

d8.addEventListener("click", () => {

    d8.style.display = "none";
    compteurrond++;
    console.log(compteurrond);
    if (compteurrond == 8) {
        alert("Félicitation tu as fini le jeu en " + temps + " secondes !");
      } 
});


// Partie mario


let mario = document.getElementById('mario');
mario.style.position = 'absolute';
mario.style.left = 0;
mario.style.top = 0;

compteurdroite = 0;
compteurbas = 0;

document.addEventListener('keyup', (event) => {

    if (event.key === "z") {
        console.log('haut');
        mario.style.top = parseInt(mario.style.top) - 5 + "vh";
        compteurbas--;
        console.log(compteurbas);
        mario.style.transition = " all 0.5s";
    }
    if (event.key === "q") {
        console.log('gauche');
        mario.style.left = parseInt(mario.style.left) - 5 + "vw";
        mario.style.transition = " all 0.5s";
        compteurdroite--;
        console.log(compteurdroite);
    }
    if (event.key === "s") {
        console.log('bas');
        mario.style.top = parseInt(mario.style.top) + 5 + "vh";
        mario.style.transition = " all 0.5s";
        compteurbas++;
        console.log(compteurbas);
    }
    if (event.key === "d") {
        console.log('droite');
        mario.style.left = parseInt(mario.style.left) + 5 + "vw";
        mario.style.transition = " all 0.5s";
        compteurdroite++;
        console.log(compteurdroite);
    }

   if(compteurdroite == 16 && compteurbas == 16) {
    alert('GG');
    epreuve3.style.display = "none";
    epreuve4.style.display = "block";
   }

   if(compteurdroite == 11 && compteurbas == 10) {
    mario.style.left = 0;
    mario.style.top = 0;
    compteurdroite = 0;
    compteurbas = 0;
   }

   if(compteurdroite == 14 && compteurbas == 8) {
    mario.style.left = 0;
    mario.style.top = 0;
    compteurdroite = 0;
    compteurbas = 0;
   }

   if(compteurdroite == 8 && compteurbas == 14) {
    mario.style.left = 0;
    mario.style.top = 0;
    compteurdroite = 0;
    compteurbas = 0;
   }
    
   if(compteurdroite == 4 && compteurbas == 4) {
    mario.style.left = 0;
    mario.style.top = 0;
    compteurdroite = 0;
    compteurbas = 0;
   }

   if(compteurdroite == 3 && compteurbas == 9) {
    mario.style.left = 0;
    mario.style.top = 0;
    compteurdroite = 0;
    compteurbas = 0;
   }

   if(compteurdroite == 8 && compteurbas == 6) {
    mario.style.left = 0;
    mario.style.top = 0;
    compteurdroite = 0;
    compteurbas = 0;
   }
   if(compteurdroite == 16 && compteurbas == 2) {
    mario.style.left = 0;
    mario.style.top = 0;
    compteurdroite = 0;
    compteurbas = 0;
   }
    
});


