import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { timer } from "./play_sound.js";



const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}
//----------------------------------------------------------------------------------
const timerForm = document.getElementById("timer");
let timerRemain = document.getElementById("timer_remain");
const timerStart = document.getElementById("start");
const timerStop = document.getElementById("stop");
let sound = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

timerForm.addEventListener("submit", timerGO);
//timerStart.addEventListener("submit", );
timerStop.addEventListener("click", timerSTOP);
let melting;

function timerGO(event) {
    event.preventDefault();

    let { time } = event.target.elements;
    time = time.value.split(':');
    time = time[0] * 1000 * 60 * 60 + time[1] * 1000 * 60;

    setTimeout(timer, time, sound);

    melting = setInterval(() => {
        let hours = Math.floor(time / 1000 / 60 / 60);
        let minutes = Math.floor((time - hours * 1000 * 60 * 60) / 1000 / 60);
        let seconds = Math.floor((time - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
        timerRemain.innerText = `${hours} часов, ${minutes} минут, ${seconds} секунд`;
        time = time - 1000;
    }, 1000)
}

function timerSTOP() {
    clearInterval(melting);
    timerRemain.innerText = "";
    timerForm.reset();
}  