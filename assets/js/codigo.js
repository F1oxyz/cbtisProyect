const nav = document.querySelector("#nav");;
const buttonMenu = document.querySelector("#button1");
const buttonBack = document.querySelector(".button__back");

buttonMenu.addEventListener("click", () => {
    nav.classList.toggle("activo");
})




buttonBack.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
