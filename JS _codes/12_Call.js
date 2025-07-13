// The call() method of Function instances calls this function with a given this value and arguments provided individually.

//syntax
// call(thisArg)
// call(thisArg, arg1)
// call(thisArg, arg1, arg2, /* …, */ argN)

// The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).

// syntax
// apply(thisArg)
// apply(thisArg, [arg1, arg2, ...])


function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);