/* // For
for(var chiffres = 0; chiffres <= 9; chiffres++){
    console.log("Je compte " + chiffres )
}*/
/*
// For
for(var Multiples = 0; Multiples <= 10; Multiples++){
    console.log("Je calcule " + Multiples + " * 2 " + " = " + Multiples*2)
} */


// var price = 50;
// var value = prompt("Saisir une valeur");

// if(isNaN(value)){
//     alert("Cette opération ne peut s'effectuer");
// }

// while (value != price){
//     value = prompt("Saisir une valeur");
//     if(value < price){
//         console.log(" Cherhe encore... " + " C'est plus ");
//     }else if(value > price){
//         console.log(" Cherche encore... " + " C'est moins ");
//     }
//     else{
//         value = price;
//         console.log(" Ouais tu as bara mm... ");
//     }
// }

// function changeColor(color) { 
//     document.div.style.background = 'color';
// }

const matiere = ["français", "maths", "sport", "chimie"];
let i = 0;
var sommeDeMoyenne = 0;

while(i < matiere.length){
        sommeDeMoyenne += parseInt(prompt("Quelle est votre moyenne en " + matiere[i]));
    i++;
}

const moyenneGenerale = sommeDeMoyenne / matiere.length;
if(moyenneGenerale >= 10){
    console.log(`votre moyenne est de ${moyenneGenerale} \nVous êtes admis`);
}else{
    console.log(`votre moyenne est de ${moyenneGenerale} \nVous êtes refusé`);
}