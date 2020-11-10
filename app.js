const play = document.getElementById("play-button")

play.onclick = () => {
    location.href = "./game.html"
}
var timer = document.getElementById("timer")
var timerId

function startTimer() {
    time = 3
    timer.innerHTML = time
    timerId = setInterval(() => {
        time--;
        if (time == 0) {
            location.href = "./gameover.html?score" + score;
        }
        timer.innerHTML = time
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId)
    startTimer();
}

startTimer();