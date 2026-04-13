const btn = document.querySelector(".dropbtn");
const menu = document.querySelector(".dropdown-content");

btn.addEventListener("click", () => {

    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
});

let count = 0
let step = 1

let btndrop = document.getElementById("btnDown")
let btnEdit = document.querySelector(".btn_edit")
let btnReset = document.querySelector(".btn_reset")
let sum = document.querySelector(".sum h4")
let btnTop = document.querySelector(".btn_top")
let btnBotton = document.querySelector(".btn_botton")
let items = document.querySelector(".dropdown-content h6")



btnTop.addEventListener("click", () => {
    count++
    sum.textContent = count
})

btnBotton.addEventListener("click", () => {
    if (count > 0) {
        count--
        sum.textContent = count
    }
})



