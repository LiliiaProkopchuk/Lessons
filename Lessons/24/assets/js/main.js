//task 1
function task1() {
    let start = parseInt(document.getElementById('task1_var1').value),
        end = parseInt(document.getElementById('task1_var2').value),
        rez = 0;
    if (start < end) {
        while (start <= end) {
            rez += start;
            start++;
        }
    } else {
        alert("Invalid range")
    }
    document.getElementById('task1_rez').innerText = rez;
}

//task 2  Переделала

/* Первый вариант
function task2() {

    let first = parseInt(document.getElementById('task2_var1').value),
        second = parseInt(document.getElementById('task2_var2').value),
        rezSame = nod(first, second);
    document.getElementById('task2_rez').innerText = rezSame;
}
function nod(x, y) {
    while (y !== 0) y = x % (x = y);
    return x;
}*/

// Второй вариант
function task2() {
    let first = parseInt(document.getElementById('task2_var1').value),
        second = parseInt(document.getElementById('task2_var2').value),
        rezSame = 0;
    while (first != 0 && second != 0) {
        if (first > second) {
            first = first % second;
        } else if (second > first) {
            second = second % first;
        }
        rezSame = first + second;
        document.getElementById('task2_rez').innerText = rezSame;
    }
}

//task 3
function task3() {
    let num = parseInt(document.getElementById('task3_var').value),
        rez = ' ';
    for (let i = num; i != 0; i--) {
        if (num % i == 0) {
            rez += i + ' ';
        }
    }
    document.getElementById('task3_rez').innerText = rez;
}

//task 4  
function task4() {
    debugger
    let num = document.getElementById('task4_var').value,
        rez = 0;
    for (let i = 0; i != num.length; i++) {
        rez += 1;
    }

    document.getElementById('task4_rez').innerText = rez;

}

//task 5 Переделала
function task5() {

    let arNum = [],
        num = 0,
        rezPos = 0,
        rezNeg = 0,
        rezZero = 0,
        rezEven = 0,
        rezOdd = 0;
    do {
        num = prompt('Enter number');
        arNum.push(parseInt(num));
    } while (arNum.length < 10)
    for (let i = 0; arNum.length > i; i++) {
        if (arNum[i] > 0) {
            rezPos += 1;
        } else if (arNum[i] < 0) {
            rezNeg += 1;
        } else if (arNum[i] == 0) {
            rezZero += 1;
        } if (arNum[i] % 2 == 0 && arNum[i] != 0) {
            rezEven += 1;
        } if (arNum[i] % 2 !== 0 && arNum[i] != 0) {
            rezOdd += 1;
        }
    }


    document.getElementById('task4_rez1').innerText = rezPos;
    document.getElementById('task4_rez2').innerText = rezNeg;
    document.getElementById('task4_rez3').innerText = rezZero;
    document.getElementById('task4_rez4').innerText = rezEven;
    document.getElementById('task4_rez5').innerText = rezOdd;
    document.getElementById('task4_rez6').innerText = arNum;
}

//task 6
function task6() {
    let first = '',
        second = '',
        act = '',
        rez = 0,
        conf = true;
    do {
        first = prompt('Add first number');
        second = prompt('Add second number');
        act = prompt('Select action ');
        first = parseInt(first);
        second = parseInt(second);

        if (act == '+') {
            rez = first + second;
        } else if (act == '-') {
            rez = first - second;
        } else if (act == '/') {
            rez = first / second;
        } else if (act == '*') {
            rez = first * second;
        } else {
            alert('Incorrect action')
        }
        alert(rez);
        conf = confirm('One more time?');
    } while (conf);
    alert('Done')
}

//task 7
function task7() {

    let num = parseInt(document.getElementById('task7_var1').value),
        shift = parseInt(document.getElementById('task7_var2').value),
        numStr = num.toString(),
        arNum = numStr.split(''),
        rez = '';
    while (numStr.length != rez.length) {
        if (shift == numStr.length) {
            shift = 0;
        }
        rez += arNum[shift];
        shift++;
    }
    document.getElementById('task7_rez').innerText = rez;
}

//task 8
function task8() {
    debugger
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let day = prompt('Enter present day'),
        ind = week.indexOf(day),
        i = 1,
        rez = '',
        conf = true;
    do {
        if (ind + 1 < 7) {
            rez = week[ind + i];
            i++;
            alert(rez);
        } else {
            ind = 0;
            i = 0;
        }
        conf = confirm('One more time?');
    } while (conf);
    alert('That is all');
}

//task 9
function task9(id) {
    let result = '';
    for (let i = 2; i < 10; i++) {
        result += multiP(i);
    }
    document.getElementById(id).innerHTML = result;
}
function multiP(num) {
    let rez = 0;
    let str_rez = '<div class="table" style="width: 10%; border: 1px solid #147852; padding-left: 15px;">';
    for (let i = 1; i < 11; i++) {
        rez = i * num;
        str_rez += num + ' * ' + i + ' = ' + rez + '<br>';
    }
    str_rez += '</div>';
    return str_rez;
}

// 10 не пробовала