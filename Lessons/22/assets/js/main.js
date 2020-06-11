//task 1
function task1() {
    let age = parseInt(document.getElementById('task1_var').value),
        group = '';
    if (age > 0 && age < 12) {
        group = 'Child';
    } else if (age >= 12 && age < 18) {
        group = 'Teenager';
    } else if (age >= 18 && age < 60) {
        group = 'Adult';
    } else if (age >= 60) {
        group = 'Retiree';
    } else {
        group = 'Incorrectly entered return';
    }

    document.getElementById('task1_rez').innerText = group;
}

//task 2
function task2() {
    let num = parseInt(document.getElementById('task2_var').value),
        sym = '';

    switch (num) {
        case 0:
            sym = ')';
            break;
        case 1:
            sym = '!';
            break;
        case 2:
            sym = '@';
            break;
        case 3:
            sym = '#';
            break;
        case 4:
            sym = '$';
            break;
        case 5:
            sym = '%';
            break;
        case 6:
            sym = '^';
            break;
        case 7:
            sym = '&';
            break;
        case 8:
            sym = "*";
            break;
        case 9:
            sym = '(';
            break;
        default:
            sym = 'Only numbers from 1 to 9';
            break;
    }
    document.getElementById('task2_rez').innerText = sym;
}

//task 3
function task3() {
    let num = parseInt(document.getElementById('task3_var').value),
        a = num % 10,
        b = parseInt(num % 100 / 10),
        c = parseInt(num / 100);
    if (num < 1000 && num >= 100) {
        if (a == b || a == c || b == c) {
            r = 'Yes'
        } else {
            r = 'No';
        }
    } else {
        r = 'Not a right number';
    }
    document.getElementById('task3_rez').innerText = r;
}

//task 4
function task4() {
    let y = parseInt(document.getElementById('task4_var').value),
        r = '';
    if (y > 0) {
        if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
            r = 'Yes';
        } else {
            r = 'No';
        }
    } else {
        r = 'Not a right number';
    }

    document.getElementById('task4_rez').innerText = r;
}

//task 5
function task5() {
    let num = parseInt(document.getElementById('task5_var').value),
        a = Math.floor(num / 10000),
        b = Math.floor(num / 1000 % 10),
        c = Math.floor(num / 100 % 10),
        d = Math.floor(num / 10 % 10),
        e = num % 10,
        r = '';
    if (num >= 10000 && num < 100000) {
        if (a == e && d == b && c != a && c != b) {
            r = 'Yes';
        } else {
            r = 'No';
        }
    } else {
        r = 'Enter a right number';
    }
    document.getElementById('task5_rez').innerText = r;
}

//task 6
function task6() {
    const e = 0.91;
    const u = 27.18;
    const a = 1.70;
    let d = parseFloat(document.getElementById('task6_var').value),
        rez = '';
    if (document.getElementById('task6_v1').checked) {
        rez = d * e;
    } else if (document.getElementById('task6_v2').checked) {
        rez = d * u;
    } else if (document.getElementById('task6_v3').checked) {
        rez = d * a;
    }
    document.getElementById('task6_rez').innerText = rez.toFixed(2);
}

//task 7
function task7() {
    let sum = parseFloat(document.getElementById('task7_var').value),
        r = '';
    if (sum > 0) {
        if (sum < 200) {
            r = sum;
        } else if (sum >= 200 && sum < 300) {
            r = sum - (sum / 100 * 3);
        } else if (sum >= 300 && sum < 500) {
            r = sum - (sum / 100 * 5);
        } else if (sum >= 500) {
            r = sum - (sum / 100 * 5);
        }
    } else {
        r = 'Amount not specified';
    }
    document.getElementById('task7_rez').innerText = r.toFixed(2);
}

//task 8
function task8() {
    let l = parseFloat(document.getElementById('task8_var1').value),
        p = parseFloat(document.getElementById('task8_var2').value),
        r = l / (2 * Math.PI),
        d = p / 4,
        rez = '';
    if (r <= d / 2) {
        rez = 'Yes';
    } else {
        rez = 'No';
    }
    document.getElementById('task8_rez').innerText = rez;
}

//task 9
function task9() {
    let rez = '';
    if (document.getElementById('q1_var1').checked &&
        document.getElementById('q2_var2').checked &&
        document.getElementById('q3_var1').checked) {
        rez = '6';
    } else if ((document.getElementById('q1_var1').checked && document.getElementById('q2_var2').checked) ||
        (document.getElementById('q1_var1').checked && document.getElementById('q3_var1').checked) ||
        (document.getElementById('q2_var2').checked && document.getElementById('q3_var1').checked)) {
        rez = '4';
    } else if (document.getElementById('q1_var1').checked ||
        document.getElementById('q2_var2').checked ||
        document.getElementById('q3_var1').checked) {
        rez = '2';
    } else {
        rez = '0';
    }
    document.getElementById('task9_rez').innerText = rez;
}

