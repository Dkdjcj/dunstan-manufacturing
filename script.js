const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const menuIsOpen = navLinks.classList.contains("active");

    menuToggle.textContent = menuIsOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", menuIsOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});