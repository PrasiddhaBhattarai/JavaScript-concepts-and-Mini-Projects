/* create a faulty calculator using JavaScript
   
    this faulty calculator does following:
    1) takes two numbers as input from the  user
    2) performs wrong operations as follows:
       + ---> -
       * ---> +
       - ---> /
       / ---> **

    It performs wrong operations 10% of the time
*/

let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random>0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c= obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}