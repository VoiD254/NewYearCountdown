'use strict';

const newYear = '1 Jan 2024';

const daysD = document.getElementById("days");
const hoursD = document.getElementById('hours');
const minsD = document.getElementById('minutes');
const secondsD = document.getElementById('seconds');

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysD.innerHTML = days;
    hoursD.innerHTML = zeroBefore(hours);
    minsD.innerHTML = zeroBefore(minutes);
    secondsD.innerHTML = zeroBefore(seconds);

    console.log(days, hours, minutes, seconds);
}

function zeroBefore(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
