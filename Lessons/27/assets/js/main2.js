'use strict';

class Marker {
    constructor(amount, color) {
        this.amount = amount;
        this.color = color;
    }
    print(text) {
        let result = `<p style="color: ${this.color}"> `;
        let string = text.split('');
        let performed = false;
        let i = 0;
        let ink = 100;
        do {
            if (string[i] != " " && string != "") {
                ink -= 0.5;
            }
            result += string[i];
            i++;
            if (i > string.length - 1 || ink == 0) {
                performed = true;
            }
        } while (!performed);
        result += `</p>`;
        this.amount = ink;
        return result;
    }
    get remainingInk() {
        return this.amount;
    }
}

class FullMarker extends Marker {
    set setInk(full) {
        this.amount = full;
    }
}

function print_text() {
    let color = document.getElementById('var_color').value,
        amount = 100,
        text = document.getElementById('var_text').value;
    let printer = new Marker(amount, color);
    let rez = printer.print(text);
    document.getElementById('text').innerHTML = rez;
    document.getElementById('remaining').innerText = printer.remainingInk;
}

/*function fullMarker() {

    let amount = 0;
    amount = amount.setInk = 100;
    let full_printer = new FullMarker(amount);
    document.getElementById('remaining').innerText = full_printer.remainingInk;
}*/

function fullMarker() {
    let amount = 0;
    let full_printer = new FullMarker(amount);
    full_printer.setInk = 100;
    document.getElementById('remaining').innerText = full_printer.remainingInk;
}


