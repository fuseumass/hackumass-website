const header = document.querySelector(".hum-header");
const menuToggle = header.querySelector(".hum-menu-toggle");
const setMenuOpen = (open) => {
    header.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    menuToggle.firstElementChild.textContent = open ? "×" : "☰";
};
header.classList.add("menu-ready");
menuToggle.hidden = false;
menuToggle.addEventListener("click", () => setMenuOpen(!header.classList.contains("menu-open")));
header.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));
header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("menu-open")) {
        setMenuOpen(false);
        menuToggle.focus();
    }
});
