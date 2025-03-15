document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeButton = document.getElementById("toggle-theme");
    const body = document.body;
    const progressBars = document.querySelectorAll(".progress");

    // Barras de progreso animadas
    progressBars.forEach(bar => {
        let width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
            bar.style.transition = "width 2s ease-in-out";
            bar.style.width = width;
        }, 500);
    });

    // Tema oscuro guardado
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
    }

    toggleThemeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
    });
});
