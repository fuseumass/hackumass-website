const schedule = document.querySelector("#schedule");
const scheduleGrid = schedule.querySelector(".schedule-grid");
const scheduleToolbar = schedule.querySelector(".schedule-toolbar");
scheduleToolbar.hidden = false;

schedule.querySelectorAll(".schedule-events li").forEach((event) => {
    const title = event.querySelector(".schedule-event-title").textContent;
    event.dataset.category = /ceremony|judging|deliberation/i.test(title) ? "ceremony"
        : /workshop|coffee chats/i.test(title) ? "workshop"
        : /breakfast|lunch|dinner|cookies/i.test(title) ? "food"
        : /hacking|submission/i.test(title) ? "hacking" : "general";
});

schedule.querySelectorAll(".schedule-day").forEach((day) => {
    const events = [...day.querySelectorAll("li")];
    const minutes = (event) => {
        const time = event.querySelector("time").getAttribute("datetime").slice(11, 16);
        const [hour, minute] = time.split(":").map(Number);
        return hour * 60 + minute;
    };
    // Start-only events are displayed as cards; card height does not imply duration.
    const firstHour = Math.floor(Math.min(...events.map(minutes)) / 60);
    const lastHour = Math.floor(Math.max(...events.map(minutes)) / 60);
    const list = day.querySelector(".schedule-events");
    list.style.setProperty("--calendar-height", `${(lastHour - firstHour + 1) * 320}px`);
    const ticks = document.createElement("div");
    ticks.className = "schedule-hours";
    ticks.setAttribute("aria-hidden", "true");
    for (let hour = firstHour; hour <= lastHour; hour++) {
        const tick = document.createElement("span");
        tick.textContent = `${hour % 12 || 12} ${hour < 12 ? "AM" : "PM"}`;
        tick.style.top = `${(hour - firstHour) * 320}px`;
        ticks.append(tick);
    }
    list.prepend(ticks);
    events.forEach((event) => {
        const simultaneous = events.filter((other) => minutes(other) === minutes(event));
        event.style.setProperty("--event-top", `${(minutes(event) - firstHour * 60) / 60 * 320}px`);
        event.style.setProperty("--event-count", simultaneous.length);
        event.style.setProperty("--event-column", simultaneous.indexOf(event));
    });
});

const setScheduleView = (view) => {
    scheduleGrid.dataset.view = view;
    scheduleToolbar.querySelectorAll("button").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.view === view));
    });
};
scheduleToolbar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => setScheduleView(button.dataset.view));
});
setScheduleView("calendar");
