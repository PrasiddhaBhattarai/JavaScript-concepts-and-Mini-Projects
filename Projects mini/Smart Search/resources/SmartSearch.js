const searchBox = document.querySelector(".search-box");
const input = document.querySelector(".search-input");
const crossIcon = document.querySelector(".cross-icon");

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");


crossIcon.addEventListener("click", (e) => {
    input.value = "";
    e.currentTarget.classList.add("hide");
    users.forEach(user => {
        user.element.classList.remove("hide");
    });
});

searchBox.addEventListener("click", () => {
    input.focus();
});


let users = [];

// classList.toggle("hide", boolean);
// adds when true;
// removes when false;

input.addEventListener("input", (e) => {
    const value = e.currentTarget.value.toLowerCase();
    crossIcon.classList.toggle("hide", value == "");
    
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
        user.element.classList.toggle("hide", !isVisible);
    });
});


//cloneNode clones its content
// refer mdn
// const card = userCardTemplate.content.cloneNode(true);
// console.log(card);
//->#document-fragment
//   ><div class="card">...</div> 

fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => {
        users = data.users.map(user => {
            // console.log(user);
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            let userName = `${user.firstName} ${user.maidenName} ${user.lastName}`
            header.textContent = userName;
            body.textContent = user.email;
            userCardContainer.append(card);
            return {name: userName, email: user.email, element: card};
        });
    });