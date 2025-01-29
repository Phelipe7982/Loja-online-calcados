const title = document.querySelector("#mode-title") as HTMLHeadingElement;
const changeThemeBtn = document.querySelector("#change-theme") as HTMLInputElement;
const productPrices = document.querySelectorAll(".price-product") as NodeListOf<HTMLSpanElement>;

// Toggle tittle
function toggleTitle(): void {
    if (!document.body.classList.contains("dark")) {
        title.textContent = "Light Mode";
    } else {
        title.textContent = "Dark Mode";
    }
}

// Price format
function formatPrice(price: number): string {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

productPrices.forEach((price) => {
    price.textContent = formatPrice(Number(price.textContent));
})

// toggle Dark Mode
function toggleDarkMode(): void {
    document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme(): void {
    const theme = localStorage.getItem("theme");

    if (theme) {
        toggleDarkMode();
    }
}

loadTheme();
toggleTitle();

changeThemeBtn.addEventListener("change", (): void => {
    toggleDarkMode();

    toggleTitle();

    // Save or remove dark mode
    localStorage.removeItem("theme");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
})