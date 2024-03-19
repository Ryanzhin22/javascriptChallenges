const start = document.getElementById('start');
const reset = document.getElementById('reset');
const mark = document.getElementById('mark');
const marks = document.getElementsByClassName('marks')[0];

const milisecond = document.getElementById('milisecond');
const second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');
let numbers = 0;
let timerInterval;
let writeDown = [];
let clickCount = 0;

const timeFormater = (time) => {
    let secondChanger;
    let milisecondChanger;
    let minuteChanger;
    let hourChanger;

    hourChanger = Math.floor(time / 144000);
    minuteChanger = Math.floor((time % 144000) / 6000);
    secondChanger = Math.floor((time % 6000) / 100);
    milisecondChanger = time % 100;

    secondChanger < 10
        ? (secondChanger = secondChanger.toString().padStart(2, '0'))
        : secondChanger;
    milisecondChanger < 10
        ? (milisecondChanger = milisecondChanger.toString().padStart(2, '0'))
        : milisecondChanger;
    minuteChanger < 10
        ? (minuteChanger = minuteChanger.toString().padStart(2, '0'))
        : minuteChanger;
    hourChanger < 10
        ? (hourChanger = hourChanger.toString().padStart(2, '0'))
        : hourChanger;

    hour.innerText = hourChanger;
    minute.innerText = minuteChanger;
    second.innerText = secondChanger;
    milisecond.innerText = milisecondChanger;
};

const resetTimer = () => {
    hour.innerText = '00';
    minute.innerText = '00';
    second.innerText = '00';
    milisecond.innerText = '00';

    numbers = 0;
};

start.addEventListener('click', () => {
    if (start.classList.contains('start')) {
        start.setAttribute('class', 'pause');
        start.innerText = 'Pausar';

        timerInterval = setInterval(() => {
            numbers += 1;
            timeFormater(numbers);
        }, 10);
    } else if (start.classList.contains('pause')) {
        start.setAttribute('class', 'start');
        start.innerText = 'Start';

        clearInterval(timerInterval);
    }
});

reset.addEventListener('click', () => {
    clearInterval(timerInterval);
    resetTimer();
    start.setAttribute('class', 'start');
    start.innerText = 'Start';
});

mark.addEventListener('click', () => {
    if (writeDown.length >= 0) {
        marks.style.display = 'flex';
    }

    clickCount += 1;

    const arrayMark = [];

    arrayMark.push(hour.innerText);
    arrayMark.push(minute.innerText);
    arrayMark.push(second.innerText);
    arrayMark.push(milisecond.innerText);

    const div = document.createElement('div');
    div.setAttribute('class', 'markdown');
    div.innerHTML = `${clickCount}ºMarcação: ${arrayMark}`;
    marks.appendChild(div);

    writeDown.push(arrayMark);
    console.log(writeDown);
});
