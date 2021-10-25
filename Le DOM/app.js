// const FORM = document.getElementsByName('formulaire');
// console.log(FORM)

// const FORM = document.getElementsByTagName('form');
// console.log(FORM);

const FORM = document.getElementById('formu').elements;
// console.log(FORM);
// for(let i = 0; i<FORM.lenth; i++){
//     console.log(FORM[i].value)
// }

// const FORM = document.getElementsByClassName('Formulaire');
// console.log(FORM);

// const FORM = document.querySelector('#formu');
// console.log(FORM);


[...FORM].forEach(element => {  
    console.log(element.value)   
});


Array.from(FORM).forEach((input)=>{
    checkFild(input)
})

function checkFild(element){
    // const CHIFFRE = parseInt(prompt("Entrer un chiffre"));
    if(element.value.length > 5){
        element.style.backgroundColor = "lightgreen"
    }else{
        element.style.backgroundColor = "coral"
    }
}
checkFild()