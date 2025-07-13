const input = document.querySelector(".search-input");
// used default cross-icon provied by browser for input type="search"
// const crossIcon = document.querySelector(".cross-icon");
const search = document.querySelector(".search");

// classList.toggle("hide", boolean);
// adds when true;
// removes when false;

search.addEventListener("click",() => {
    console.log("cliked");
    input.focus();
})

// input.addEventListener("input", (e) => {
//     crossIcon.classList.toggle("hide", e.currentTarget.value == "");
// })

// crossIcon.addEventListener("click", (e)=>{
//         input.value = "";
//         e.currentTarget.classList.add("hide");
// })