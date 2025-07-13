const button = document.querySelector(".display-svg");
const useSVG = document.querySelector(".use-svg");

button.addEventListener("click", ()=>{
    useSVG.getAttribute("href")=== "#home-hollow"
        ? useSVG.setAttribute("href", "#home-filled")
        : useSVG.setAttribute("href", "#home-hollow");
})