const team = document.querySelector("#hum-team");
const panels = Array.from(team.querySelectorAll(":scope > section"));
const menu = document.createElement("div");
menu.className = "team-menu";
menu.setAttribute("role", "tablist");
menu.setAttribute("aria-label", "Team departments");

function selectTab(index) {
    panels.forEach((panel, panelIndex) => {
        const selected = panelIndex === index;
        panel.hidden = !selected;
        menu.children[panelIndex].setAttribute("aria-selected", String(selected));
        menu.children[panelIndex].tabIndex = selected ? 0 : -1;
    });
}

panels.forEach((panel, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.id = `${panel.id}-tab`;
    button.textContent = panel.querySelector("h2").textContent;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", panel.id);
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", button.id);
    panel.tabIndex = 0;

    panel.querySelectorAll("img").forEach((photo) => {
        photo.alt = photo.parentElement.querySelector("h3").textContent;
        photo.addEventListener("error", () => {
            photo.src = "assets/headshots/Default.jpg";
        }, { once: true });
    });

    button.addEventListener("click", () => selectTab(index));
    button.addEventListener("keydown", (event) => {
        let next;
        if (event.key === "ArrowRight") next = (index + 1) % panels.length;
        if (event.key === "ArrowLeft") next = (index - 1 + panels.length) % panels.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = panels.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        selectTab(next);
        menu.children[next].focus();
    });
    menu.append(button);
});

team.querySelector("h1").after(menu);
selectTab(0);
