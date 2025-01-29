"use strict";
const title = document.querySelector("#mode-title");
const changeThemeBtn = document.querySelector("#change-theme");
const productPrices = document.querySelectorAll(".price-product");
function toggleTitle() {
    if (!document.body.classList.contains("dark")) {
        title.textContent = "Light Mode";
    }
    else {
        title.textContent = "Dark Mode";
    }
}
function formatPrice(price) {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
productPrices.forEach((price) => {
    price.textContent = formatPrice(Number(price.textContent));
});
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme) {
        toggleDarkMode();
    }
}
loadTheme();
toggleTitle();
changeThemeBtn.addEventListener("change", () => {
    toggleDarkMode();
    toggleTitle();
    localStorage.removeItem("theme");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
});
