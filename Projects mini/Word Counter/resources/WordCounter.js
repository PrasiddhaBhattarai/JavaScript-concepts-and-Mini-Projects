const textArea = document.getElementById("textArea");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");


// innerText vs textContent
// When you need to account for styles, you should consider using innerText. Modifying the innerText of an element means the browser may need to adjust the layout to accommodate the changes in text size, which can have performance implications.
// Also, textContent only deals with the raw text and doesn't account for styles. So, in situations where performance is a concern and you don't need to account for styles, textContent might be a more efficient choice compared to innerText.

// e.target vs e.currentTarget
// target is the element that triggered the event (e.g., the user clicked on)
// currentTarget is the element that the event listener is attached to.

textArea.addEventListener('input', (e) => {
    charCount.textContent = e.currentTarget.value.length;
    // .value: This property returns the current value of the element. It's typically used with form elements like <input>, <textarea>, and <select>, where users can interact with the content and change its value

    //when textarea erased
    //was showing Word Count = 1, so
    if (charCount.textContent == 0) {
        wordCount.textContent = 0;
    }
    else {
        const str = e.currentTarget.value;
        wordCount.textContent = str.trim().split(/\s+/).length;//regular expression /.../
    }

    // .trim() removes any leading or trailing spaces from the string.
    // .split(/\s+/) splits the string into an array of words, where \s+ matches one or more whitespace characters (spaces, tabs, newlines, etc.).
});


// Q) why .trim() executed before .split()?
// -> chaining methods in js
//  ->The reason .trim() executes first in the code is due to the sequence of method calls on the string in JavaScript. In JavaScript, methods are executed in the order in which they are written, from left to right. This is fundamental to how JavaScript operates and how method chaining works.


// Q) why .length executed at  last?
// -> The reason .length (or any property or method that is accessed on the result) is executed last in the chain is due to the difference between method calls and property accesses in JavaScript.