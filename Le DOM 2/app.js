// padding: 20px;
//     height : 500px;
//     width : 500px;
//     display : grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 50%;
//     grid-gap: 10px;
// const boxes = document.createElement("div");

// boxes.style = `
//     height : 500px;
//     width : 100%;
//     background-color: goldenrod;
// `
// document.querySelector("body").append(boxes);

// const contain = document.createElement("div");

// contain.style = `
//     height : 500px;
//     width : 100%;
//     background-color: tomato; 
//     display : grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 50%;
//     gap: 10px;
//     padding: 20px;
// `

// const box = document.querySelectorAll(".box");
// Array.from(box).forEach((div) => div.style=`background:coral`);

// document.querySelector("body").append(contain);

// const cards1 = document.createElement("div");

// cards1.style = `
//     height : 200px;
//     width : 200px;
//     background-color: pink;
// `
// contain.append(cards1);

// const cards2 = document.createElement("div");

// cards2.style = `
//     height : 200px;
//     width : 200px;
//     background-color: pink;
// `
// contain.append(cards2);

// const cards3 = document.createElement("div");

// cards3.style = `
//     height : 200px;
//     width : 200px;
//     background-color: pink;
// `
// contain.append(cards3);

// const cards4 = document.createElement("div");

// cards4.style = `
//     height : 200px;
//     width : 200px;
//     background-color: pink;
// `
// contain.append(cards4);

// const box = document.createElement("div");

// box.style = `
//     height : 500px;
//     width : 100%;
//     background-color: goldenrod;
// `
// document.querySelector("body").append(box);

let next = document.getElementById('text');
console.log(next.nextElementSibling)
console.log(next.nextSibling)
console.log(next.previousElementSibling)
console.log(next.previousSibling)
console.log(next.getAttribute('class'))
console.log(next.textContent)
document.body.innerHTML='<div>Hello</div>';