// # javascript and classes

// # OOP 

// # Object 
//  - collection of properties and methods
 
// # Why use OOP

// # Parts of OOP
//  Object literal

// - Constructor function
// - Prototypes
// - Classes
// - Instances (new, this)

// # 4 pillars of Option
//  - Abstraction
//  - Encapsulation
//  - Inheritance
//  - Polymorphism





// object literal
const user_1 = {
    username : "Lamine",
    loginCount : 19,
    loggedIn : true,
    134 : 1,

    getUseDetails : function(){
        console.log(this);
    },

    getDetails : () => {
        console.log(this);
    }
}

console.log(user_1);
user_1.getUseDetails();
user_1.getDetails();


// constructor function gives new copy/ instance
// it creates new context
// not only in classes, but also in functions

function user_2(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this;
    // implicitly returns this, even if above return statement is absent
}

// const userOne = user2("lamine", 19, true);
// const userTwo = user2("fermin", 27, true);
// console.log(userOne); //returns window, this is pointing to window

// new keyword creates new instance
// it calls constructor function
// all the arguments is injected to this
const userOne = new user_2("lamine", 19, true);
const userTwo = new user_2("fermin", 27, true);
console.log(userOne);  //returns object, this refers to object of function-user_2

// what does new keyword do?
// -> 11_2_Prototye.js



console.log("for class");
console.log("for class");

class User_3 {
    constructor(name){
        // invokes setter
        this.name = name;
    }

    // getter
    get name(){
        return this._name;
        // the name property is changed to _name to avoid name collision between the (getter & setter) and the property itself.
    }

    //setter
    set name(value){
        if (value.length < 2) {
            alert("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User_3("J");
console.log(user.name); // user.name invokes getter as get is followed by 'name' in class 

let anotherUser = new User_3("Om");
console.log(anotherUser.name);

// Key Points:

// Encapsulation: The use of getter and setter ensures that the name property is protected and can be validated before it is set or retrieved.

// Private Property: The actual name value is stored in _name, which is not directly accessible from outside the class.