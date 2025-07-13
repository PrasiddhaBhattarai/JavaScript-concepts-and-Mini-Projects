// we discuss about javaScript promises, promise chaining.

// its about e-commerce payment

const cart = ["shoes", "pants", "shirt"];

// const prom = createOrder(cart); //returns orderId 

//prom.then();

createOrder(cart)
    .then((orderId) => {
        // proceedToPayment(orderId);
        console.log(orderId);
        // if no return in promise handler, no promise chaining will occur
        // return is compulsory for chaining 
        return orderId;
    })
    // we can have custom catch() for block of promise rather than a common catch()
    // here chaining continues even if first promise fails
    // this catch() will handle errors on top of this 
    // .catch()
    .then((orderId) => {
        return proceedToPayment(orderId);
    })
    .then((paymentInfo) => {
        console.log(paymentInfo);
    })
    // common catch for all above promises
    // if first promise is rejected, below catch will be called and other chained promises will not be resolved
    .catch((error) => {
        console.log(error);
    });

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        //validate cart
        if (!validateCart(cart)) {
            reject('Cart is invalid.');
        }

        //generates order ID
        const orderId = "12345";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 1000);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    // for demostration, directly resolved promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("payment successful");
        }, 1000);
    })
}
function validateCart(cart) {
    return true;
}