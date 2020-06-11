//task 1
function task1() {
    let n = prompt("What is your name?");
    alert("Hello, " + n);
}

//task 2
function task2() {
    const y = 2020;
    let a = parseFloat(document.getElementById('task2_var').value),
        b = y - a;
    document.getElementById('task2_rez').innerText = b;
}

//task 3
function task3() {
    let a = parseFloat(document.getElementById('task3_var').value),
        b = a * 4;
    document.getElementById('task3_rez').innerText = b;
}

//task 4
function task4() {
    let a = parseFloat(document.getElementById('task4_var').value),
        b = Math.PI * Math.pow(a, 2);
    document.getElementById('task4_rez').innerText = b;
}

//task 5
function task5() {
    let d = parseFloat(document.getElementById('task5_var1').value),
        h = parseFloat(document.getElementById('task5_var2').value),
        m = parseFloat(document.getElementById('task5_var3').value),
        s = (d / (h * 60 + m)) * 60;
    document.getElementById('task5_rez').innerText = s.toFixed(3) + ' km/h';
}

//task 6
function task6() {
    const r = 0.92
    let d = parseInt(document.getElementById('task6_var').value),
        e = d * r;
    document.getElementById('task6_rez').innerText = e;
}

//task 7
function task7() {
    let a = parseInt(document.getElementById('task7_var').value),
        b = a * 1024 / 820;
    document.getElementById('task7_rez').innerText = parseInt(b);
}

//task 8
function task8() {
    let a = parseFloat(document.getElementById('task8_var1').value),
        b = parseFloat(document.getElementById('task8_var2').value),
        c = parseInt(a / b),
        d = a - c * b;
    document.getElementById('task8_rez1').innerText = c;
    document.getElementById('task8_rez2').innerText = d.toFixed(2);
}

//task 9
function task9() {
    let a = parseInt(document.getElementById('task9_var').value),
        b = a % 10,
        c = parseInt(a % 100 / 10),
        d = parseInt(a / 100);
    document.getElementById('task9_rez').innerText = `${b}${c}${d}`;
}

//task 10
function task10() {
    let a = parseInt(document.getElementById('task10_var').value),
        b = (a * 5 / 100) / 12 * 2;
    document.getElementById('task10_rez').innerText = b.toFixed(2);
}

