let startTime, updatedTime, difference, tInterval;
let running = false;
let lapCounter = 0;

function start() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(updateDisplay, 1000);
        running = true;
    }
}

function stop() {
    clearInterval(tInterval);
    running = false;
}

function reset() {
    clearInterval(tInterval);
    difference = 0;
    running = false;
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('laps').innerHTML = '';
    lapCounter = 0;
}

function lap() {
    if (running) {
        const lapTime = document.createElement('li');
        lapCounter++;
        lapTime.innerText = `Lap ${lapCounter}: ${document.getElementById('display').innerText}`;
        document.getElementById('laps').appendChild(lapTime);
    }
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById('display').innerText = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);
