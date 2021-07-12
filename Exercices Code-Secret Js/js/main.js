function demanderMDP(){
    var input = prompt('Code Secret ? (3 chiffres)');
    if(input.match(/\d{3}$/) && verification(input)){
        alert('BRAVO !');
    }else{
        demanderMDP();
    }
}

function verification(trucAverif){
    // Code de vérification !
    console.log(trucAverif);

    // Exo 1: Le code est 007
    
    if(trucAverif == 007){
        return true;
    }else{
        return false;
    }

    // Exo 2: Le code doit être supérieur à 10
    
    // if(trucAverif > 10){
    //     return true;
    // }else{
    //     return false;
    // }

    // Exo 3: Le code est multiple de 3
    // console.log(trucAverif % 3);
    // if(trucAverif % 3 == 0){
    //     return true;
    // }else{
    //     return false;
    // }

    // Exo 4: Le code est multiple de 5 et supérieur à 505
    // var mult5 = trucAverif %5 == 0;
    // console.log(mult5);
    // var sup505 = trucAverif > 505;
    // console.log(sup505);
    // if(mult5 && sup505){
    //     return true;
    // }else{
    //     return false;
    // }

    // Exo 5: Le code est divisible par 3, 5 et compris entre 100 et 200
    // var divisible  = trucAverif % 3 == 0 && trucAverif % 5 == 0;
    // console.log(divisible);

    // var borne = trucAverif > 100 && trucAverif < 200;
    // console.log(borne);

    // if(divisible && borne){
    //     return true;
    // }else{
    //     return false;
    // }

    // Exo 6: Le code se termine par 7
    // console.log(trucAverif % 10);
    // if(trucAverif % 10 == 7){
    //     return true;
    // }else{
    //     return false;
    // } 

    // Exo 7: Le code est multiple de 3 ou 7, se termine par 8 et doit compris entre 138 et 478
    // var multiple = trucAverif % 3 == 0 || trucAverif % 7 == 0;
    // console.log(multiple);
    // var termine = trucAverif % 10 == 7;
    // console.log(termine);
    // var borne = trucAverif > 138 && trucAverif < 478;
    // console.log("borne :" + borne);
    // if(multiple && termine && borne){
    //     return true;
    // }else{
    //     return false;
    // }
}

// function generateur(){
//     for(var nombre = 0; nombre < 1000; nombre++){
//         if(verification(nombre)){
//             console.log(nombre + " est une solution !");
//         }
//     }
// }
// generateur();
// Fabriquer un générateur pour le dernier exercice
demanderMDP();