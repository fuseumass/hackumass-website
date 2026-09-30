const schedule = document.querySelector("#schedule");

schedule.querySelectorAll(".schedule-events li").forEach((event) => {
    const title = event.querySelector(".schedule-event-title").textContent;
    event.dataset.category = /workshop|talk|coffee chats/i.test(title) ? "workshop"
        : /breakfast|lunch|dinner|cookies/i.test(title) ? "food" : "hackathon";
});
