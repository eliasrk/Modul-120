function updateClock() {
    let time = new Date().toLocaleString();
    document.getElementById('time').innerHTML = time;
}

setInterval(updateClock, 1000);