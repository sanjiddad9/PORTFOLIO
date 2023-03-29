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
// ======================== PORTFOLIO FILTER ========================
let filterNumber = document.getElementById("filter").children;
let itemNumber = document.getElementById("projects").children;
for (let i = 0; i < filterNumber.length; i++) {
    filterNumber[i].addEventListener("click", function () {
        for (let j = 0; j < filterNumber.length; j++) {
            filterNumber[j].classList.remove("active");
        }
        this.classList.add("active");
        let target = this.getAttribute("data-target");
        for (let k = 0; k < itemNumber.length; k++) {
            itemNumber[k].style.display = "none";
            if (target == itemNumber[k].getAttribute("data-id")) {
                itemNumber[k].style.display = "block";
            }
            if (target == "all") {
                itemNumber[k].style.display = "block";
            }
        }
    })
}
// ======================== PORTFOLIO FILTER ========================