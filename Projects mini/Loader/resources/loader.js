// $(window).on("load", function () {
//     $(".loader-wrapper").fadeOut("slow");
// });
window.onload = () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');

    setTimeout(() => {
        loaderWrapper.style.opacity = '0';
        loaderWrapper.addEventListener('transitionend', () => {
            loaderWrapper.style.display = 'none';
        });
    }, 600);
}