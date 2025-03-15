document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeButton = document.getElementById("toggle-theme");
    const body = document.body;
    const progressBars = document.querySelectorAll(".progress");

    // Tema guardado
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
    }

    toggleThemeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
    });

    // Barras de progreso
    progressBars.forEach(bar => {
        let width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});