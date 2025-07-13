// similar to previous file: 08_2_AsyncAwait
// but we execute promises using function

function p1(){
    // const p1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("This is promise 1");
    //     }, 5000);
    // });
    // return p1;
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("This is promise 1");
        }, 5000);
     });
}
function p2(){
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("This is promise 2");
        }, 5000);
     });
}
function p3(){
    return new Promise( (resolve) => { 
        setTimeout(() => {
            resolve("This is promise 3");
        }, 5000);
     });
}

async function handlePromise2() {
    console.log("Welcome to handle function two");
    let data1 = await p1();
    console.log(data1);

    console.log("interval");


    let data2 = await p2();
    console.log(data2);

    // here, we use await in two ocassions
    // but the above await result isn't used in below one
    // hence they are mutually independent
    // so we can await them at once using below syntax hence saving time
    let dataArray = await Promise.all([p1(),p2()]);
    console.log(dataArray);
    
}

async function handlePromise1() {
    console.log("Welcome to handle function one");
    
    let data3 = await p3();
    console.log(data3);
}

handlePromise1();

handlePromise2();


// console output:

// Welcome to handle function one
// Welcome to handle function two
// This is promise 3
// This is promise 1
// interval
// This is promise 2



// execution in brief:

// instantly logged "welcome .... one"
// instantly logged "welcome .... two"
//   call-stack empty
//   after delay of around 5000ms, p3 and p1 get in micro-queue
// logged "This is promise 3"
// logged "This is promise 1"
// instantly logged "interval"
//   call-stack empty
//   after delay of around 5000ms, p2 gets in micro-queue
// logged "this is promise 2"




// Detailed Execution, under event loop:
// note: all promises have equal delay

// 1) after global execution code (gec), handlePromise1() is pushed to call-stack
// 2) inside the function, "Welome to ..... one" is logged
// 3) then await is encountered which calls p3()
// 4) p3() is at top of the call-stack
// 5) promise is ecountered, which is sent to web-api
// 6) since we initially had await, we suspend the execution of function p3() then of handlePromise2()
// 7) now we procede further execution and handlePromise2() is pushed to call-stack
// 8) inside that function, "Welcome to .... two" is logged
// 9) then await is encountered which calls p1()
// 10) p1() is at top of call-stack
// 11) promise is encounterd which is sent to web-api
// 12) since we had await, we suspend execution of functions
// 13) now, there's nothing in gec to execute
// 14) so we wait for settled promise to enter the micro-task-queue
// 15) p3()-promise-reactionHandler enters the micro-task-queue and eventually p1()-promise-reactionHandler. this change in queue gets detected by event loop
// 16) so functions related to p3()-promise are pushed to call stack, which are handlePromise1() and p3()
// 17) finally promise-result value is returned to data3, p3() gets popped from call-stack
// 18) stack top is handlePromise1() and data3 gets logged which is a string "This is promise 3"
// 19) since call-stack is now empty the first of micro-task-queue which p1()-promise-reactionHandler is send to call-stack
// 20) then as above related function are pushed to call-stack 
// 21) eventually data1 gets logged
// 22) another await for p() is ecountered
// 22) p2() has another promise with delay of 5000 ms
// 23) after waiting for promise fulfillment, data2 will be logged