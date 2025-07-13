// factorial of 6

// first  method is from for loop 

// here we did it after creating array then using reduce

let a = 6;

function factorial(number){
    //creats the array from 0 to (num-1)
    //so to include n, we do (number + 1)
    let arr = Array.from(Array(number+1).keys());
    // arr made
    console.log(arr.slice(1,));
    // slice(1,) to remove 0

    let c = arr.slice(1,).reduce((a,b) => {
        return a*b;
    })

    console.log(c);
}

factorial(a);