"use strict";

const alterColorPage = document.querySelector(".btn");

alterColorPage.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme")

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark"
    } else {
        this.textContent = "Light"
    }
    console.log("Estilo da página alterado")
});