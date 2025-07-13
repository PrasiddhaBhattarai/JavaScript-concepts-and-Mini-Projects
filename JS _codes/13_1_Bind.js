// In JavaScript, .bind() is a method used to create a new function that, when invoked, has its this keyword set to a specific value, along with a given sequence of arguments, regardless of how the new function is called.
// It doesn't override this in the original function; rather, it creates a new function with a bound context.

// syntax
// bind(thisArg)
// bind(thisArg, arg1)
// bind(thisArg, arg1, arg2, /* …, */ argN)

// Key Points:
//  1) The .bind() method does not immediately call the function; instead, it returns a new function with the specified this value and the provided arguments.
// 2) The new function can be called later, and it will retain the this value and the initial arguments from .bind().


// Example 1: Binding this

// When a method is called as a function, its this can be lost or be different from what you expect. .bind() is used to ensure that the correct this is used when calling the function.

const obj = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
};

const greetFunction = obj.greet;
greetFunction();  //Hello, undefined
// undefined (because `this` is lost)

const greetFunction2 = obj.greet.bind(obj);
greetFunction2(); //Hello, Alice



// Example 2: Pre-setting arguments/ partial application

// You can use .bind() to pre-set arguments that are passed when the function is eventually called.

function multiply(a, b) {
    return a * b;
}

const multiplyByTwo = multiply.bind(null, 2);  // bind the first argument as 2
console.log(multiplyByTwo(5));  // Output: 10
// In this case, multiplyByTwo is a new function where the first argument (a) is always 2, and you can provide the second argument (b) when calling it.
console.log(multiplyByTwo(7));  // 14



// Example 3: in next file