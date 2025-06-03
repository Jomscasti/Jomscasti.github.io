
let durations = {
    study: 25 * 60,
    short: 5 * 60,
    long: 15 * 60
};

let currentMode = 'study';
let remaining = durations[currentMode];
let intervalId = null;

const display = document.getElementById('timer-display');
const alarmAudio = document.getElementById('alarmAudio');
const bgAudio = document.getElementById('bgAudio');

function updateDisplay() {
    const min = String(Math.floor(remaining / 60)).padStart(2, '0');
    const sec = String(remaining % 60).padStart(2, '0');
    display.textContent = `${min}:${sec}`;
}

function setMode(mode) {
    pauseTimer();
    currentMode = mode;
    remaining = durations[mode];
    updateDisplay();
    highlightMode(mode);
}

function highlightMode(active) {
    ['study', 'short', 'long'].forEach(mode => {
        document.getElementById(`${mode}-btn`).classList.remove('active-mode');
    });
    document.getElementById(`${active}-btn`).classList.add('active-mode');
}

function startTimer() {
    if (intervalId) return;
    if (document.getElementById('bgSoundToggle').checked) bgAudio.play();
    intervalId = setInterval(() => {
        if (remaining > 0) {
            remaining--;
            updateDisplay();
        } else {
            clearInterval(intervalId);
            intervalId = null;
            playAlarm();
            bgAudio.pause();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null;
    bgAudio.pause();
}

function resetTimer() {
    pauseTimer();
    remaining = durations[currentMode];
    updateDisplay();
}

function applySettings() {
    durations.study = parseInt(document.getElementById('studyTime').value) * 60;
    durations.short = parseInt(document.getElementById('shortBreakTime').value) * 60;
    durations.long = parseInt(document.getElementById('longBreakTime').value) * 60;

    const selectedSound = document.getElementById('alarmSound').value;
    document.getElementById('alarmAudio').src = `assets/sounds/${selectedSound}.mp3`;

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById("startBtn").textContent = "Start";
    }

    remaining = durations[currentMode];
    updateDisplay();
}


function playAlarm() {
    alarmAudio.currentTime = 0;
    alarmAudio.play();
}

updateDisplay();
highlightMode('study');