var temperatures = [20,16,13,21,10,8,25];
// console.log(temperatures[0]);

var joursSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
// console.log(joursSemaine[0]);

/* for(var i = 0; i < 7; i++){
    console.log(i);
    console.log(joursSemaine[i] + ", il  a fait : " + temperatures[i]);
} */

var temperaturesS1 = [20,16,13,21,10,8,25];
var temperaturesS2 = [10,16,13,21,10,8,25];
var temperaturesS3 = [20,16,10,21,10,8,25];
var temperaturesS4 = [20,16,13,10,10,10,25];

var temperaturesMois =
    [temperaturesS1, 
    temperaturesS2, 
    temperaturesS3, 
    temperaturesS4];

for(var numSemaine = 0; numSemaine < 4; numSemaine++){
    console.log('Les températures de la semaine ' + (numSemaine+1) + " sont : ");
    
    for(var jour = 0; jour < 7; jour++){
        console.log(jour);
        console.log( joursSemaine[jour] + ", il  a fait : " + 
        temperaturesMois[numSemaine][jour]);
    }
    
}
document.write("Tous les " + joursSemaine[2] + ", Il gagne " + (temperaturesS3[0]*500) + " F CFA l'heure ..!! ");
