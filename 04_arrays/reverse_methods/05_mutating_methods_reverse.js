const feed = document.getElementById("feed");

fetchActivityLogs().then(data => {
    // Clone first to avoid mutation.
    const latestFirst = data.slice().reverse();

    renderFeed(latestFirst);
});

function renderFeed(logs) {
    feed.innerHTML = "";

    logs.forEach(log => {
        const div = document.createElement("div");
        div.className = "log";

        div.innerHTML = `<strong>${log.action}</strong>
        <div class="time">${log.time}</div>`;

        feed.appendChild(div);
    });
}