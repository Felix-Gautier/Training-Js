var nombrePair = [];

// Exo 1: Mettre dans le tableau les 20 premiers nombres paires dans le tableau
for(var Pair = 0; Pair < 40; Pair++){
    if(Pair%2 == 0){
        nombrePair.push(Pair);
    }
}
console.log(nombrePair);