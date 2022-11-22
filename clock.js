
var hourElement = document.querySelector('#hour');
var minuteElement = document.querySelector('#minute');
var secondElement = document.querySelector('#second');
var am_pm = document.querySelector('#am-toggle');

function start() {
    var date = new Date();
    var second = String(date.getSeconds());
    var minute = String(date.getMinutes());
    var hour = String(date.getHours());
    updateTime(secondElement, second);
    updateTime(minuteElement, minute);
    updateTime(hourElement, hour);
    toggleAMPM(am_pm, hour);
}

setInterval(() => start(), 1000);

function updateTime(element, time) {
    if (time < 10) {
        element.querySelector('.left-digit').innerHTML = '0';
        element.querySelector('.right-digit').innerHTML = time[0];
    } else {
        element.querySelector('.left-digit').innerHTML = time[0];
        element.querySelector('.right-digit').innerHTML = time[1];
    }

}

function toggleAMPM(element, hour) {
    if (element) {
        if (hour < 13) {
            element.innerHTML = 'AM';
        } else {
            element.innerHTML = 'PM';
        }
    }
} 
