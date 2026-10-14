
const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Switch to Light Theme";
        themeButton.setAttribute("aria-pressed", "true");
    } else {
        themeButton.textContent = "Switch Theme";
        themeButton.setAttribute("aria-pressed", "false");
    }
});
