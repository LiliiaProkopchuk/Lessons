//Задача 1
//Условие 
let cars = {
    manufacturer: "Ford",
    model: "Mustang",
    year: 1966,
    average_speed: 180
}

//Решение Задача 1.1
function drawInf() {
    let str = '<ul>';
    for (let key in cars) {
        str += `<li> ${key} : ${cars[key]}`;
    } str += '</ul>';
    document.getElementById('draw_car').innerHTML = str;
}

//Решение Задача 1.2
function neenedTime() {

    let dist = parseInt(document.getElementById('task2_var').value),
        rez = 0,
        rezh = 0,
        rezm = 0,
        reztime = '';
    rez += (dist / cars.average_speed);
    if (dist > cars.average_speed * 4) {
        if ((dist % 4) == 0) {
            rez += 1;
        }
    }
    rezh = Math.floor(rez);
    rezm = Math.floor((rez * 60) - (rezh * 60));
    reztime = rezh + ':' + addZero(rezm);
    document.getElementById('task2_rez').innerText = reztime;
}
function addZero(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}

//Задача 2 
//Условие 

let fractionFirst = {
    numerator: 14,
    denominator: 56
}
let fractionSecond = {
    numerator: 9,
    denominator: 30
}

//Решение

let frac_result = {};

function draw_frac() {
    let str = '<ul>';
    for (let key in frac_result) {
        str += `<li> ${key} : ${frac_result[key]}`;
    } str += '</ul>';
    document.getElementById('draw_frac').innerHTML = str;
}

function addFraction() {
    let a = fractionFirst.numerator,
        b = fractionFirst.denominator,
        c = fractionSecond.numerator,
        d = fractionSecond.denominator,
        inf = '',
        rezsum = sumFraction(a, b, c, d),
        rezdif = difFraction(a, b, c, d),
        rezpro = proFraction(a, b, c, d),
        rezpriv = privFraction(a, b, c, d),
        ab = nod(a, b),
        cd = nod(c, d),
        rezred = '';
    inf = a + '/' + b + " and " + c + '/' + d;
    rezred = (a / ab) + '/' + (b / ab) + ' and ' + (c / cd) + '/' + (d / cd);
    frac_result["Preset Fractions"] = inf;
    frac_result["Sum of fractions"] = rezsum;
    frac_result["Fraction difference"] = rezdif;
    frac_result["Fraction Product"] = rezpro;
    frac_result["Private fractions Product"] = rezpriv;
    frac_result["Reduced fractions"] = rezred;
    draw_frac();
}

function sumFraction(a, b, c, d) {
    return ((a * d) + (b * c)) + '/' + (b * d);
}
function difFraction(a, b, c, d) {
    return ((a * d) - (b * c)) + '/' + (b * d);
}
function proFraction(a, b, c, d) {
    return (a * c) + '/' + (b * d);
}
function privFraction(a, b, c, d) {
    return (a * d) + '/' + (b * c);
}
function nod(x, y) {
    while (y !== 0) y = x % (x = y);
    return x;
}

//Задача 3

//Условие
let time = {
    hours: 6,
    minutes: 25,
    seconds: 12
}

//Решение 
//Задача 3.1
function drawTime() {
    let str = '<ul>';
    for (let key in time) {
        str += `<li> ${key} : ${time[key]}`;
    } str += '</ul>';
    document.getElementById('time_inf').innerHTML = str;
}

//Задача 3.2
function incSec() {
    let secdif = document.getElementById('change_sec').value,
        h = time.hours,
        m = time.minutes,
        s = time.seconds,
        rez = 0,
        reztime = '';
    rez = parseInt(timeToSec(h, m, s)) + parseInt(secdif);
    reztime = secToTime(rez);
    drawTime();
}
function redSec() {
    let secdif = document.getElementById('change_sec').value,
        h = time.hours,
        m = time.minutes,
        s = time.seconds,
        rez = '';
    rez = timeToSec(h, m, s) - secdif;
    rez = secToTime(rez);
    drawTime();
}

//Задача 3.3
function incMin() {
    let mindif = document.getElementById('change_min').value,
        h = time.hours,
        m = time.minutes,
        s = time.seconds,
        rez = 0,
        reztime = '';
    rez = parseInt(timeToSec(h, m, s)) + (parseInt(mindif) * 60);
    reztime = secToTime(rez);
    drawTime();
}
function redMin() {

    let mindif = document.getElementById('change_min').value,
        h = time.hours,
        m = time.minutes,
        s = time.seconds,
        r = timeToSec(h, m, s),
        rez = '';
    if (r > mindif * 60) {
        rez = r - (mindif * 60);
        rez = secToTime(rez);
    } else if (r < mindif * 60) {
        alert("Very big difference!")
    }
    drawTime();
}

//Задача 3.3
function incHours() {
    let hoursdif = document.getElementById('change_hours').value,
        h = time.hours,
        m = time.minutes,
        s = time.seconds,
        rez = 0,
        reztime = '';
    rez = parseInt(timeToSec(h, m, s)) + (parseInt(hoursdif) * 3600);
    reztime = secToTime(rez);
    drawTime();
}
function redHours() {
    let hoursdif = document.getElementById('change_hours').value,
        h = time.hours,
        m = time.minutes,
        s = time.seconds,
        r = timeToSec(h, m, s),
        rez = '';
    if (r > hoursdif * 3600) {
        rez = r - (hoursdif * 3600);
        rez = secToTime(rez);
    } else if (r < hoursdif * 3600) {
        alert("Very big difference!")
    }
    drawTime();
}

function timeToSec(hours, minutes = 0, second = 0) {
    return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(second);
}

function secToTime(sec) {
    sec = parseInt(sec);
    let hours = Math.floor(sec / 3600),
        minutes = Math.floor((sec - hours * 3600) / 60),
        seconds = sec - (hours * 3600 + minutes * 60);
    return time.hours = hours,
        time.minutes = addZero(minutes),
        time.seconds = addZero(seconds);
}

function addZero(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}