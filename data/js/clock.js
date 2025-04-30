const spanClock = document.getElementById('time-clock');
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

spanClock.textContent = `${hours}:${minutes}:${seconds}`;

setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    spanClock.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);