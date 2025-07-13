const counter = document.getElementById("counter");

const incrBtn = document.getElementById("inc");
const decrBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

// if no specific radix specified, (default base-10)

function increment() {
    counter.textContent = parseInt(counter.textContent) + 1;
};

function decrement() {
    if (parseInt(counter.textContent) == 0) {
        return;
    }
    counter.textContent = parseInt(counter.textContent) - 1;
};

resetBtn.addEventListener('click', () => {
    counter.textContent = 0
});


// to record single click
incrBtn.addEventListener('click', () => {
    increment()
});
decrBtn.addEventListener('click', () => {
    decrement()
});


//to record mouse long press
//'mousedown'
//to stop when mouse button is releases
//'mouseup;
//to stop when mouse leaves button
//'mouout'

//both mouseup and mouseout needs to be used to stop 

// he code provided will not work on touch displays as expected because the mousedown, mouseup, and mouseout events are designed specifically for mouse interactions. For touch screens, we need to listen for the corresponding touch events such as
// touchstart, 
// touchend, and 
// touchmove.


let timeoutId;
let incrementInterval;
let decrementInterval;
// Add mousedown event listener to start continuous increment when the button is held down
incrBtn.addEventListener('mousedown', function () {
    // Start a timeout of 350ms before starting continuous increment
    timeoutId = setTimeout(() => {
        // Start the interval that increases the count every 50ms
        incrementInterval = setInterval(increment, 50);
    }, 350);
});

// Add mouseup event listener to stop the increment when the mouse button is released
incrBtn.addEventListener('mouseup', function () {
    clearTimeout(timeoutId); // Clear the initial delay timeout if mouse is released early
    clearInterval(incrementInterval); // Stop the increment interval
});

// Add mouseout event listener to stop incrementing if the mouse leaves the button
incrBtn.addEventListener('mouseout', function () {
    clearTimeout(timeoutId); // Clear the initial delay timeout if mouse is released early
    clearInterval(incrementInterval); // Stop the increment if the mouse leaves the button
});


decrBtn.addEventListener('mousedown', function () {
    timeoutId = setTimeout(() => {
        decrementInterval = setInterval(decrement, 50);
    }, 350);
});

decrBtn.addEventListener('mouseup', function () {
    clearInterval(decrementInterval);
    clearTimeout(timeoutId);
});

decrBtn.addEventListener('mouseout', function () {
    clearInterval(decrementInterval);
    clearTimeout(timeoutId);
});