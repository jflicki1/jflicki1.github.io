document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-button").forEach(button => {
        button.addEventListener("click", function () {
            let text = this.nextElementSibling; // Selects the <p> after the button
            text.classList.toggle("expanded");
            this.textContent = text.classList.contains("expanded") ? "See Less" : "See More...";
        });
    });
});
