// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolved");
//     }, 300);
// });

async function getData(){
    //simulate getting data from server
    let d = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // if await not used above
    // let data = (await d).json();
    // let data = d.json();

    // its better to use await in both case
    let jsonData = await d.json();
    console.log(jsonData);
}

async function handlePromise1() {
    console.log("Hello");
    setTimeout(() => {
        console.log("what's up ");
        
    }, 0);
    // const val = await p;
    
    let data = await getData();
    
    // console.log(val);
    console.log(data);
    
    console.log("thank you");
    
}

handlePromise1();

console.log("Welcome to async await");



//output:
// hello
// Welcome to async await
// what's up 
// resolved

//Why was "What's up" logged before val/data
//due to call stack,