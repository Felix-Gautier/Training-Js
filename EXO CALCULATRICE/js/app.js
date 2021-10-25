const screen = document.querySelector('.calculator-screen');

function Display(text){
    const screenContent = screen.value;
    screen.value = screenContent.length===1 && screenContent === '0' ? 
    text: screenContent + text;
}

function Equal(){
    const screenTextContent = screen.value;
    // screen.value = eval(screenTextContent);
    const TABLEAU = screen.value.split('')
    for (let nbre = 0; nbre<TABLEAU.length; nbre++){
        if(TABLEAU[nbre]=== '√'){
            TABLEAU.splice(nbre, nbre+2, `Math.sqrt(${TABLEAU[nbre+1]})`);
        }
    }
    console.log(TABLEAU.join())
    screen.value = eval(TABLEAU.join());
}

function Vide(){
    screen.value = 0;
}

function keyboard(e){
    const Tool = ["0", "1", "2", "3", "4", "5", "6", 
                "7", "8", "9", "0", ".", "+", "-", "/"];
    const Touch = String.fromCharCode(e.keyCode);
    // console.log(Touch,e.keyCode)
    if(Tool.includes(Touch)){
        Display(Touch);
    }else if(Touch === '='){
        Equal();
    }else if(Touch === 'd'){
        Vide();
    }
}

function Delete(){
    const TAB = screen.value.split('');
    TAB.pop();
    TAB === 0 ? Vide() : screen.value = TAB.join();   
}