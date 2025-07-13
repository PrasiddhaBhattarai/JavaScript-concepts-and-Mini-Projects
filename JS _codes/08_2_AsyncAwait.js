const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is promise 1");
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is promise 2");
    }, 5000);
});

async function handlePromise2() {
    console.log("Welcome to handle function two");
    let data1 = await p1;
    console.log(data1);

    console.log("interval");


    let data2 = await p2;
    console.log(data2);

};

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is promise 3");
    }, 5000);
});

async function handlePromise1() {
    console.log("Welcome to handlePromise one");
    
    let data3 = await p3;
    console.log(data3);
};

handlePromise1();

console.log("hello");

handlePromise2();


//output at console
// Welcome to handlePromise one 
// hello 
// Welcome to handle function two 
// This is promise 1 
// interval 
// This is promise 2 
// this is promise 3

// here all three promises are able to pre-process (prior to await call) because they are implemented via variable const and arrow function.
// had they been inside a function, the execution and below explaination would have different


// Q) Even though p3 is called at first, why does it execute at last?

// Ans> its because:
// i) we declared const p1, const p2, const p3 in order chronologically in our code
// ii) p3->() enters web api after p1->()
// iii) due to p1->() and p3->() having equal execution time, the p1->() (first called) enters the micro-task-queue initially
// iv) since p3->() is last at miro-task-queue and await suspends the function until its promise execution, p1->() enters call-stack before p3->()


// but if had declared in order const(p2, p3, p1),
// p3 would be executed first
// this because second function awaits p1 initially before p2
// even so p2 might have been complete before p1, it's not able to enter micro-task-queue as it's not called yet and is still inside web-api