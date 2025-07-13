const buttons = document.querySelectorAll("button");
const btnLabel = document.querySelector(".btn-label");

buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const buttonName = e.target.getAttribute('data-name');
        btnLabel.textContent = buttonName;
        btnLabel.style.display = 'block';
    });
    button.addEventListener('mousemove', (e) => {
        btnLabel.style.left =`${e.pageX + 20}px`;
        btnLabel.style.top = `${e.pageY + 20}px`;
    });
    button.addEventListener('mouseleave', () => {
        btnLabel.style.display = 'none';
    });
});