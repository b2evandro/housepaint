
let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const opcoes = document.querySelector(".opcoes");


function show_option() {
    console.log(show)
    document.body.style.overflow = "hidden" ? "initial" : "hidden"
    menuSection.classList.toggle("on", show)
    show = !show;

    console.log(show)
}

opcoes.addEventListener("click", () => {
    show_option();

})

menuToggle.addEventListener("click", () => {
    show_option();
})
