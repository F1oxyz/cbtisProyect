const buttonCategorias = document.querySelector("#button2");
const navCategorias = document.querySelector(".container__menu__categorias")

buttonCategorias.addEventListener("click", () => {
    navCategorias.classList.toggle("activo");
})