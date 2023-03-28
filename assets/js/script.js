// ======================== PRELOADER ========================
let loader = document.getElementById("perloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})
// ======================== PRELOADER ========================
// ======================== NAVBAR FIXED ========================
let nav = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    if (this.scrollY > 250) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
})
// ======================== NAVBAR FIXED ========================