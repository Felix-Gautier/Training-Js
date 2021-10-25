// let nombre1 = 5;
// let nombre2 = 3;
// let nombre3 = nombre2;
// nombre1 = nombre3 + nombre1;

// console.log(nombre1);

// steve = 13;
// console.log(steve);
// var steve;

// AVEC IF ET ELSE
// let age = prompt("Entrez votre age");

// const MAJEUR = 18;

// if(age <= 17){
//     alert("vous êtes mineur");
//     let age = prompt("Entrez votre age");
// }else{
//     alert("vous êtes majeur");
//     console.log("vous avez l'âge requis qui est " + MAJEUR + " ans.")
// }

// AVEC SWITCH
// const MAJEUR = 18;
// let Age = prompt("Entrez l'age");
// switch(parseInt(Age)){
//     case MAJEUR:
//     console.log('Autoriser')
//     break
//     default:
//     console.log('non autorisé')
// }

// const fruits = ['banane', 'kiwi', 'orange', 'mangue', 'pomme'];
// // la taille
// console.log(fruits.length);
// // l'index
// // commence à partir de zero
// console.log(fruits[0]);
// fruits[0] = 'ananas';
// console.log(fruits[0])

// // ajouter au debut
// fruits.unshift('coco');
// console.log(fruits)

// // supprimer au debut
// fruits.shift('coco');
// console.log(fruits);

// // ajouter à la fin
// fruits.push('mandarine');
// console.log(fruits);

// // supprimer à la fin
// fruits.pop('mandarine');
// console.log(fruits);

// let nombre = parseInt(prompt('Entrer un nombre'));
// let chiffre = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let result = chiffre.includes(nombre);
// console.log(result);

// if (result === true) {
//     console.log(chiffre);
//     console.log(nombre)
// } else {
//     console.log(undefined)
// }

// chiffre.forEach(Element => console.log(Element))


// EXERCICE 
// const MY_ARRAY = ['element1', ['element2', 'element3', 
// ['element4', 'element5', ['element6', 'element7'] ] ] ]
// console.log(MY_ARRAY[0])
// console.log(MY_ARRAY[1][0])
// console.log(MY_ARRAY[1][1])
// console.log(MY_ARRAY[1][2][0])
// console.log(MY_ARRAY[1][2][1])
// console.log(MY_ARRAY[1][2][2][0])
// console.log(MY_ARRAY[1][2][2][1])

// en utilisant FLAT
// let result = MY_ARRAY.flat(Infinity)
// console.log(result)

// EXERICE 
// const NOM = prompt('Entrer votre nom');
// const PRENOM = prompt('Entrer votre prenom');
// const AGE = parseInt(prompt("Entrer votre age"));
// const LIEU = prompt('Entrer le lieu');
// const SEXE = prompt('Quel est votre sexe ?');

// const PERSON = {
//     Nom: NOM,
//     Prenom: PRENOM,
//     Age: AGE,
//     Lieu: LIEU,
//     Sexe: SEXE, 
// }

// console.log("Votre nom : " + PERSON.Nom)
// console.log("Votre prenom : " + PERSON.Prenom)
// console.log("Votre age : " + PERSON.Age)
// console.log("Votre lieu : " + PERSON.Lieu)
// console.log("Votre sexe : " + PERSON.Sexe)

// let Tableau = [];
// Tableau.push(PERSON)
// console.log(Tableau)

// function Salutation(){
//     console.log("Bonjour");
// }
// Salutation();

// function calculBizarre(){
//     let Number = parseInt(prompt('Donne un chiffre'))
//     for(let Multiples = 0; Multiples <= Number; Multiples++){
//         console.log("Je calcule " + Multiples + " * " + Number + " = " +(Multiples*Number) )
//     }
// }
// calculBizarre();

function Inscription(firstName, lastName, birthday,...plusElement){
    const NOM = firstName
    const PRENOM = lastName
    const ANNIV = birthday
    const OTHERS = plusElement
}

Inscription(NOM)