let hour = 0
let minute = 0
let second = 0
let millisecond = 0

let timeHour = document.getElementById("hour")
let timeMinute = document.getElementById("minute")
let timeSecond = document.getElementById("second")
let timeMilli = document.getElementById("millisecond")

let startButton = document.getElementById("start")
let resetButton = document.getElementById("reset")
let pauseButton = document.getElementById("pause")

pauseButton.disabled = true
resetButton.disabled = true

let interval;

function startTimer() {
    startButton.disabled = true
    pauseButton.disabled = false
    resetButton.disabled = false
    millisecond++
    timeMilli.innerHTML = millisecond
    if (millisecond > 1000) {
        second++
        timeSecond.innerHTML = second
        millisecond = 0
        if (second > 60) {
            minute++
            timeMinute.innerHTML = minute
            second = 0
            if (minute > 60) {
                hour++
                timeHour.innerHTML = hour
                minute = 0
            }
        }
    }
}
function startWatch() {
    interval = setInterval(startTimer, 0.5);
}
function pauseWatch() {
    clearInterval(interval)
}
function resetWatch() {
    hour = "00 :"
    minute = "00 :"
    second = "00 : "
    millisecond = "00"
    timeMilli.innerHTML = millisecond
    timeSecond.innerHTML = second
    timeMinute.innerHTML = minute
    timeHour.innerHTML = hour
    pauseWatch()
    startButton.disabled = false
    pauseButton.disabled = true
    resetButton.disabled = true
}