//task 1

document.addEventListener('keydown', function (event) {

    if (event.code == 'KeyE' && event.ctrlKey) {
        event.preventDefault();
        let text = document.getElementById('task1').innerText;
        console.log(text);
        document.getElementById('task1').remove();

        let textarea = document.createElement('textarea');
        textarea.setAttribute("style", "width:300px");
        textarea.setAttribute("id", "new_text");
        textarea.innerHTML = `${text}`;
        document.body.prepend(textarea);
    }
    if (event.code == 'KeyS' && event.ctrlKey) {
        event.preventDefault();
        let text2 = document.getElementById('new_text').value;
        document.getElementById('new_text').remove();

        let div = document.createElement('div');
        div.setAttribute("id", "task1_rez");
        div.innerHTML = `${text2}`;
        document.body.prepend(div);
    }

});

//task2  Сортировка только от меньшего к большему

let info = [
    {
        name: 'John',
        surename: 'Smith',
        country: 'Ukrain',
        profession: 'Student',
        age: 25
    },
    {
        name: 'Kate',
        surename: 'Pupko',
        country: 'USA',
        profession: 'Doctor',
        age: 31
    },
    {
        name: 'Anna',
        surename: 'Opik',
        country: 'Australia',
        profession: 'Driver',
        age: 45
    },
    {
        name: 'Vitya',
        surename: 'Grinko',
        country: 'Italia',
        profession: 'Actor',
        age: 35
    },
    {
        name: 'Dima',
        surename: 'Vukin',
        country: 'Spain',
        profession: 'Waiter',
        age: 23
    },
    {
        name: 'Lena',
        surename: 'Ivanuk',
        country: 'Tailand',
        profession: 'Cook',
        age: 33
    },
    {
        name: 'Slava',
        surename: 'Galagin',
        country: 'India',
        profession: 'Cleaner',
        age: 20
    },
    {
        name: 'Vasya',
        surename: 'Mulkin',
        country: 'France',
        profession: 'Student',
        age: 10
    },
    {
        name: 'Petr',
        surename: 'Gusin',
        country: 'Finland',
        profession: 'Engineer',
        age: 42
    }
];
function sortAge() {
    table.remove();
    info.sort(function (a, b) {
        return a.age - b.age;
    });
    drawInfo();
}
function sortName() {
    table.remove();
    info.sort(function (a, b) {
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        } else if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    });
    drawInfo();
}
function sortSurename() {
    table.remove();
    info.sort(function (a, b) {
        if (a.surename.toLocaleLowerCase() > b.surename.toLocaleLowerCase()) {
            return 1;
        } else if (a.surename.toLocaleLowerCase() < b.surename.toLocaleLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    });
    drawInfo();
}
function sortCountry() {
    table.remove();
    info.sort(function (a, b) {
        if (a.country.toLocaleLowerCase() > b.country.toLocaleLowerCase()) {
            return 1;
        } else if (a.country.toLocaleLowerCase() < b.country.toLocaleLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    });
    drawInfo();
}
function sortProf() {
    table.remove();
    info.sort(function (a, b) {
        if (a.profession.toLocaleLowerCase() > b.profession.toLocaleLowerCase()) {
            return 1;
        } else if (a.profession.toLocaleLowerCase() < b.profession.toLocaleLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    });
    drawInfo();
}
function drawInfo() {
    let list = `<table id="table">
                <tr>
                <th onclick="sortName()">Name</th>
                <th onclick="sortSurename()">Surname</th>
                <th onclick="sortCountry()">Country</th>
                <th onclick="sortProf()">Profession</th>
                <th onclick="sortAge()">Age</th>
                </tr>`;
    for (let i in info) {
        list += `<tr>`;
        for (let key in info[i]) {
            list += `<td>${info[i][key]}</td>`;
        }
        list += `</tr>`;
    }
    list += '</table>'
    sort_table.insertAdjacentHTML('beforeend', list)
}
drawInfo();


//task3 Здесь сам div растягивается, но курсор отпрыгивает вверх и при отпускании кнопки действие не заканчивается

let $border = document.getElementById('move');
let $ramka = document.getElementById('task3')
let action = false;
let startX = 0,
    startY = 0,
    borderW = parseInt(window.getComputedStyle($ramka, null).getPropertyValue("width")),
    borderH = parseInt(window.getComputedStyle($ramka, null).getPropertyValue("height"));

$border.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    startY = e.clientY;
    action = true;
});

document.body.addEventListener('mousemove', (e) => {
    if (action) {
        let deltaX = 0,
            deltaY = 0;
        let newWidth = 0,
            newHeight = 0;
        deltaX = startX - e.screenX;
        deltaY = startY - e.screenY;

        newWidth = borderW - deltaX;
        newHeight = borderH - deltaY;
        $ramka.style.width = newWidth + 'px';
        $ramka.style.height = newHeight + 'px';
    }
});

$border.addEventListener('mousedoup', (e) => {
    action = false;
});
