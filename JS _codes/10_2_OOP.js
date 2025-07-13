// oop 1

let obj = {
    a: 1,
    b: "Kane"
}

console.log(obj);

let animal = {
    eats: true,
    one: false
}

let rabbit = {
    jumps: true,
    one: true
}

//sets rabbit.[Prototype] = animal
//rabbit can methods and data members of animal
// rabbit.__proto__ = animal;

// modern way of doing above 
Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.eats); // returns true

console.log(rabbit.one);  // returns true

// console.log(rabbit);
// output:
//  Object { jumps: true }
//    jumps: true
//    <prototype>: Object { eats: true }
//      eats: true
// ​​     <prototype>: Object { … }    


class Animal {
    constructor(name) {
        this.name = name;
        console.log("animal constructor");
    }

    eats() {
        console.log(`${this.name} eats`);
    }

    walks() {
        console.log(`${this.name} walks`);
    }
}

let a = new Animal("panda");
a.walks();


// extends, Lion is child class and Animal is base class
class Lion extends Animal {
    constructor() {
        //     Uncaught ReferenceError: must call super constructor before using 'this' in derived class constructor

        //compulsory to call parent constructor
        super();
        console.log("lion constructor");
    }

    // method overriding
    eats(){
        // super.eats();
        console.log("lion eats other animals");
    }

    sound() {
        console.log("it roars");
    }
}

let l = new Lion();
l.walks();
l.eats();
console.log(l instanceof Animal);