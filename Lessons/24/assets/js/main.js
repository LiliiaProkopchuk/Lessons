//task 1
function task1() {
    let first = parseInt(document.getElementById('task1_var1').value),
        second = parseInt(document.getElementById('task1_var2').value),
        rez = '';
    rez = getRez(first, second);
    document.getElementById('task1_rez').innerText = rez;
}
function getRez(f, s) {
    let result = '';
    if (f > s) {
        result = 1;
    } else if (f < s) {
        result = -1;
    } else if (f == s) {
        result = 0;
    }
    return result;
}

//task 2
function task2() {
    let num = parseInt(document.getElementById('task2_var').value),
        rez = 0;
    rez = getFact(num);
    document.getElementById('task2_rez').innerText = rez;
}
function getFact(n) {
    result = 1;
    while (n != 0) {
        result *= n--;
    }
    return result;
}

//task 3
function task3() {
    let first = parseInt(document.getElementById('task3_var1').value),
        second = parseInt(document.getElementById('task3_var2').value),
        third = parseInt(document.getElementById('task3_var3').value),
        rez = 0;
    rez = getCombi(first, second, third);
    document.getElementById('task3_rez').innerText = rez;
}
function getCombi(f, s, th) {
    let result = 0;
    result = (f * 100) + (s * 10) + th;
    return result;
}


//task 4  Переделала
function task4() {
    let first = document.getElementById('task4_var1').value,
        second = document.getElementById('task4_var2').value,
        rez = 0;
    if (second != "") {
        rez = getArea(first, second);
    } else {
        rez = getArea(first);
    }
    document.getElementById('task4_rez').innerText = rez.toFixed(2);
}
function getArea(f, s = f) {
    let result = 0;
    return result = parseFloat(f) * parseFloat(s);
}

function timeToSec(hours, minutes = 0, second = 0) {
    return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(second);
}

function secToTime(sec) {
    sec = parseInt(sec);
    let hours = Math.floor(sec / 3600),
        minutes = Math.floor((sec - hours * 3600) / 60),
        seconds = sec - (hours * 3600 + minutes * 60);
    return addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
}

function addZero(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}

function isPerfect(num) {

    let sum = 0;
    for (let i = 1; i < num; i++) {
        if ((num % i) == 0) {
            sum += i;
        }
    }
    if (sum == num) {
        return true;
    } else {
        return false;
    }
}

//task 5
function task5() {
    let num = parseInt(document.getElementById('task5_var').value),
        rez = '';
    if (isPerfect(num)) {
        rez = "Yes";
    } else {
        rez = "No";
    }
    document.getElementById('task5_rez').innerText = rez;
}

//task 6
function task6() {
    let from = parseInt(document.getElementById('task6_var1').value),
        to = parseInt(document.getElementById('task6_var2').value),
        rez = '';
    if (to > from) {
        for (let i = from; i <= to; i++) {
            if (isPerfect(i)) {
                rez += i + " ";
            }
        }
    } else {
        rez = "Wrong range!"
    }
    document.getElementById('task6_rez').innerText = rez;
}

//task 7
function task7() {

    let h = parseInt(document.getElementById('task7_hours').value),
        m = parseInt(document.getElementById('task7_minutes').value),
        s = parseInt(document.getElementById('task7_seconds').value),
        r = "";
    if (m < 60 && s < 60) {
        r = h + ":" + addZero(m) + ":" + addZero(s);
    } else {
        r = "Wrong numbers";
    }
    document.getElementById('task7_rez').innerText = r;
}

//task 8
function task8() {

    let h = document.getElementById('task8_hourd').value,
        m = document.getElementById('task8_minutes').value,
        s = document.getElementById('task8_seconds').value,
        r = 0;
    if (m != "") {
        if (s != "") {
            r = timeToSec(h, m, s);
        } else {
            r = timeToSec(h, m);
        }
    } else {
        r = timeToSec(h);
    }
    document.getElementById('task8_rez').innerText = r;
}

//tak 9
function task9() {

    let sec = document.getElementById('task9_var').value,
        rez = '';
    if (sec != '') {
        rez = secToTime(sec);
    } else {
        rez = "Enter seconds";
    }
    document.getElementById('task9_rez').innerText = rez;
}

//task 10
function task10() {

    let hoursF = document.getElementById('task10_hours1').value,
        minutesF = document.getElementById('task10_minutes1').value,
        secondsF = document.getElementById('task10_seconds1').value,
        hoursTo = document.getElementById('task10_hours2').value,
        minutesTo = document.getElementById('task10_minutes2').value,
        secondsTo = document.getElementById('task10_seconds2').value,
        secF = 0,
        secTo = 0,
        rezsec = 0,
        rez = '';
    if (minutesF != "") {
        if (secondsF != "") {
            secF = timeToSec(hoursF, minutesF, secondsF);
        } else {
            secF = timeToSec(hoursF, minutesF);
        }
    } else {
        secF = timeToSec(hoursF);
    }
    if (minutesTo != "") {
        if (secondsTo != "") {
            secTo = timeToSec(hoursTo, minutesTo, secondsTo);
        } else {
            secTo = timeToSec(hoursTo, minutesTo);
        }
    } else {
        secTo = timeToSec(hoursTo);
    }
    if (secF > secTo) {
        rezsec = secF - secTo;
    } else {
        rezsec = secTo - secF;
    }
    rez = secToTime(rezsec);
    document.getElementById('task10_rez').innerText = rez;
}

