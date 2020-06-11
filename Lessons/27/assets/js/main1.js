'use strict';

class Circle {
    constructor(radius, diametr) {
        this.radius = parseInt(radius);
        this.diametr = parseInt(diametr);
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(new_radius) {
        this.radius = parseInt(new_radius);
    }
    get getDiametr() {
        return this.diametr;
    }
    calcArea() {
        let a = Math.PI * Math.pow(this.radius, 2);
        return a.toFixed(2);
    }
    calcLength() {
        let l = Math.PI * this.diametr;
        return l.toFixed(2);
    }

}

let circle_info = () => {
    let rad = document.getElementById('var1').value,
        diam = document.getElementById('var2').value;
    if (rad != "" && diam != "") {
        rad = parseInt(rad);
        diam = parseInt(diam);
        let radius = new Circle(rad);
        document.getElementById('radius').innerText = 'Radius: ' + radius.getRadius;

        rad = radius.setRadius = 15;
        document.getElementById('new_radius').innerText = 'Radius: ' + radius.getRadius;

        let diametr = new Circle(rad, diam);
        document.getElementById('diametr').innerText = 'Diametr: ' + diametr.getDiametr;

        let a = new Circle(rad, diam);
        document.getElementById('area').innerText = 'Area: ' + a.calcArea();

        let l = new Circle(rad, diam);
        document.getElementById('length').innerText = 'Length: ' + l.calcLength();
    } else {
        alert('Enter values');
    }
}


