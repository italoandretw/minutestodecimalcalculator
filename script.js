'use strict'

function updateResult() {
    let hours = document.getElementById('hours').value;
    let minutes = document.getElementById('minutes').value;

    if (minutes >= 60 || minutes < 0) {
        alert("Minutes should range from 0 to 59");
    }

    let result = document.getElementById('total_in_decimal');

    result.value = hours + "." + calculateMinutes(minutes);
}

function calculateMinutes(minutes) {
    return Math.floor((minutes * 10) / 6);
}