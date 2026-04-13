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


let dropdownBtn = document.getElementById("btnDown")
let btnEdit = document.querySelector(".btn_edit")
let btnReset = document.querySelector(".btn_reset")
let sum = document.querySelector(".sum h4")
let btnTop = document.querySelector(".btn_top")
let btnBotton = document.querySelector(".btn_botton")
let dropdownOptions = document.querySelectorAll(".dropdown-content h6")


let count = Number(localStorage.getItem("tasbihCount")) || 0;
let step = Number(localStorage.getItem("tasbihStep")) || 1;


function saveData() {
    localStorage.setItem("tasbihCount", count);
    localStorage.setItem("tasbihStep", step);
}

sum.textContent = count;
dropdownBtn.innerText = "+" + step;


btnTop.addEventListener("click", () => {
    count += step;
    sum.textContent = count;
    saveData()
});


btnBotton.addEventListener("click", () => {
    if (count > step) {
        count -= step;
    } else {
        count = 0;
    }
    sum.textContent = count;
    saveData()

});


dropdownOptions.forEach(option => {
    option.addEventListener('click', () => {
        const val = option.innerText;
        step = parseInt(val.replace('+', ''));
        dropdownBtn.innerText = val;
        count += 0;
        sum.textContent = count;
        menu.style.display = "none";
        saveData()
    });
});


btnReset.addEventListener("click", () => {
    let result = confirm("Tasbihni ( 00 ) qilmoqchimisiz")
    if (result) {
        count = 0
        sum.textContent = count
        saveData()
    }
})


btnEdit.addEventListener("click", () => {
    let newValue = prompt("Yangi qiymat kiritmoqchimisiz?");

    if (newValue !== null && newValue !== "" && !isNaN(newValue)) {
        count = Number(newValue);
        sum.textContent = count;
        saveData()
    } else {
        alert("Son kiriting harflar taqiqlangan")
    }
});

