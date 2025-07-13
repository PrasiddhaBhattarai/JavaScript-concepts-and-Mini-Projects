// Spread syntax (...)
// "Spread syntax allows an iterable (...) to be expanded"

// to make collection act as array
// can use Array.from also
// let boxes = [...document.body.firstElementChild.children];
// let boxes = document.querySelectorAll(".box");
let boxes = [...document.getElementsByClassName("box")];

// function to return rgb(n1,n2,n3) values
// return n1, n2, n3 as array
// function getRGB(){
//     //as RGB values are from 0 to 255
//     let max = 255;
//     let r = Math.floor(Math.random()*max);
//     let g = Math.floor(Math.random()*max);
//     let b = Math.floor(Math.random()*max);

//     return [r, g, b];
// }

//instead return the template literals
function getRGB() {
  //as RGB values are from 0 to 255
  let max = 255;
  let r = Math.floor(Math.random() * max);
  let g = Math.floor(Math.random() * max);
  let b = Math.floor(Math.random() * max);

  return `rgb(${r}, ${g}, ${b})`;
}

// boxes.forEach((elem) => {
//   let rgbVal_1 = getRGB();
//   let rgbVal_2 = getRGB();
//   elem.style.color = rgbVal_1;
//   elem.style.backgroundColor = rgbVal_2;
// });

// document.body.onload = () => {let timerId = setInterval(randColor, 1000000)};

let timerId = setInterval(randColor, 100);

function randColor() {
  boxes.forEach((elem) => {
    let rgbVal_1 = getRGB();
    let rgbVal_2 = getRGB();
    elem.style.color = rgbVal_1;
    elem.style.backgroundColor = rgbVal_2;
  });
  document.body.style.backgroundColor = getRGB();
}

let buttonStop = document.querySelector(".stop");
let buttonStart = document.querySelector(".start");

buttonStop.addEventListener("click", (() => {
  clearInterval(timerId);
  buttonStop.classList.toggle("hidden");
  setTimeout(() => {
    buttonStart.classList.toggle("hidden");
  }, 200);
}));


buttonStart.addEventListener("click", (() => {
  buttonStart.classList.toggle("hidden");
  setTimeout(() => {
    location.reload();
  }, 200);
}));
