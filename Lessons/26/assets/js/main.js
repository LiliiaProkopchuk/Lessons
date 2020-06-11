//Задание 1
let shop_list = [
    {
        name: "Milk",
        amount: 2,
        buy: false
    },
    {
        name: "Tea",
        amount: 1,
        buy: true
    },
    {
        name: "Chicken",
        amount: 1,
        buy: false
    },
    {
        name: "Eggs",
        amount: 20,
        buy: false
    },
    {
        name: "Chocolate",
        amount: 2,
        buy: true
    }
]

function drawShopList() {
    let str = '',
        is_buy = '&#9658;';
    shop_list.sort((a, b) => {
        return a.buy - b.buy;
    });
    for (let i = 0; i < shop_list.length; i++) {
        if (shop_list[i].buy) {
            is_buy = '&#9989;';
        } else {
            is_buy = '&#9658;';
        }
        str += `<li class="without"><span>${is_buy} ${shop_list[i].name}</span>: <b>${shop_list[i].amount
            }</b ></li > `;
    }
    document.getElementById("shop_list").innerHTML = str;
}


function addProduct() {
    let name = document.getElementById('prod_name').value,
        amou = document.getElementById('prod_amou').value;
    if (name != "") {
        if (amou != "") {
            addToCart(name, amou);
        } else {
            addToCart(name);
        }
        document.getElementById('prod_name').value = '';
        document.getElementById('prod_amou').value = '';
    } else {
        alert("Enter product name!");
    }
    shop_list.sort((a, b) => {
        return a.buy - b.buy;
    });
    drawShopList();
}

function addToCart(prod_name, prod_amou = 1) {
    prod_amou = parseInt(prod_amou);
    let is_prod = shop_list.filter(function (prod, index) {
        if (prod.name === prod_name) {
            let new_amou = 0;
            if (shop_list[index].buy) {
                shop_list[index].buy = false;
                new_amou = prod_amou;
            } else {
                new_amou = shop_list[index].amount + prod_amou;
            }
            shop_list[index].amount = new_amou;
            return prod;
        }
    });
    if (is_prod.length == 0) {
        shop_list.push({
            name: prod_name,
            amount: prod_amou,
            buy: false
        });
    }
}

// получается, что объявила is_prod но не использовала. хотя функция работает нормально

function addPursh() {
    let name = document.getElementById('prod_name_add').value;
    let is_prod = shop_list.filter(function (prod, index) {
        if (name != "") {
            let new_buy = false;
            if (prod.name == name) {
                if (prod.buy === false) {
                    shop_list[index].buy = false;
                    new_buy = true;
                    shop_list[index].buy = new_buy;
                    return prod;
                } if (prod.buy === true) {
                    alert('Product already purchased');
                }
            }
        }
    });
    shop_list.sort((a, b) => {
        return a.buy - b.buy;
    })
    drawShopList();
}

drawShopList();


//Задание 2

let my_receipt = [
    {
        name: 'Milk',
        amount: 2,
        price: 12
    },
    {
        name: 'Coffee',
        amount: 1,
        price: 30
    },
    {
        name: 'Bread',
        amount: 1,
        price: 7
    },
    {
        name: 'Jelly',
        amount: 4,
        price: 15
    }
]
function printeCheck() {
    let str = '';
    for (let i = 0; i < my_receipt.length; i++) {
        str += `<li><span>${my_receipt[i].name}: ${my_receipt[i].amount}pc ${my_receipt[i].price}dollars</li > `;
    }
    document.getElementById("print_ckeck").innerHTML = str;
}
function totalCheck() {
    let str = 0;
    for (let i = 0; i < my_receipt.length; i++) {
        str += my_receipt[i].price * my_receipt[i].amount;
    }
    document.getElementById("total_ckeck").innerHTML = str + ' dollars';
}
function mostExProd() {
    let ex_price = 0;
    for (let i = 0; i < my_receipt.length - 1; i++) {
        if (my_receipt[i].price > my_receipt[i + 1].price) {
            ex_price = my_receipt[i].price;
        }
    }
    document.getElementById("most_exp").innerHTML = ex_price + ' dollars';
}
function averagePrice() {
    let aver_price = 0,
        total_check = 0,
        total_amount = 0;
    for (let i = 0; i < my_receipt.length; i++) {
        total_check += my_receipt[i].price * my_receipt[i].amount;
        total_amount += my_receipt[i].amount;
    }
    aver_price = total_check / total_amount;
    document.getElementById("aver_price").innerHTML = aver_price.toFixed(2) + ' dollars';
}


//Задание 3
let style = [{
    property: 'font-size',
    value: '30px'
},
{
    property: 'color',
    value: '#258741'
},
{
    property: 'font-family',
    value: 'Arial, sans-serif'
},
{
    property: 'text-decoration',
    value: 'line-through'
},
{
    property: 'text-align',
    value: 'center'
}
];


let text = 'Your ad could be here',
    style_str = '';
for (let i = 0; i < style.length; i++) {
    style_str += style[i].property + ':' + style[i].value + ';';
}
document.write(`<p style="${style_str}">${text}</p>`);

//Задача 4
let academy = [
    {
        audience: 'Right',
        numbers: 12,
        faculty: 'Faculty of Advocacy'
    },
    {
        audience: 'Philosophy',
        numbers: 20,
        faculty: 'Psychology faculty'
    },
    {
        audience: 'Psychology',
        numbers: 16,
        faculty: 'Faculty of Advocacy'
    },
    {
        audience: 'Information Technology',
        numbers: 10,
        faculty: 'Faculty of Cybersecurity'
    },
    {
        audience: 'Psychology',
        numbers: 15,
        faculty: 'Psychology faculty'
    }
]

function drawAcademyList() {
    let str = '';
    for (let i = 0; i < academy.length; i++) {
        str += `<li><span>${academy[i].audience} (${academy[i].numbers
            } seats) </span><i>${academy[i].faculty}</i></li > `;
    }
    document.getElementById("academy_list").innerHTML = str;
}

function showFaculty() {
    let name = document.getElementById('faculty').value,
        str = '';
    if (name != '') {
        for (let i = 0; i < academy.length; i++) {
            if (name == academy[i].faculty) {
                str += `<li>${academy[i].audience}</li>`;
            }
        }
    } else {
        alert('Enter faculty')
    }
    document.getElementById("faculty_list").innerHTML = str;
}


function sortAcademyList() {
    let str = '';
    academy.sort((a, b) => {
        return a.numbers - b.numbers;
    });
    for (let i = 0; i < academy.length; i++) {
        str += `<li><span>${academy[i].audience} (${academy[i].numbers
            } seats) </span><i>${academy[i].faculty}</i></li>`;
    }
    document.getElementById("academy_list_num").innerHTML = str;
}


//сортировка не выполняется

/*
function sortAudience() {
    let str = '';
    for (let i = 0; i < academy.length; i++) {
        str += `<li><span>${academy[i].audience} (${academy[i].numbers
            } seats) </span><i>${academy[i].faculty}</i></li>`;
    }
    academy.sort(function (a, b) {
        let aa = a.faculty.toLocaleLowerCase(),
            bb = b.faculty.toLocaleLowerCase();
        if (aa < bb) {
            return -1;
        } if (aa > bb) {
            return 1;
        } else {
            return 0;
        }
    });
    document.getElementById("academy_list_name").innerHTML = str;
}
*/

/* Это задание не поняла

Вывод на экран только тех аудиторий, которые подходят для переданной группы.
Объект-группа состоит из названия, количества студентов и названия факультета; */



/*function sortAudience() {
    let str = '',
        aa = a.audience.toLocaleLowerCase(),
        bb = b.audience.toLocaleLowerCase();
    academy.sort((a, b) => {
        if (aa < bb) {
            return -1;
        } if (aa > bb) {
            return 1;
        } else {
            return 0;
        }
    });
    for (let i = 0; i < academy.length; i++) {
        str += `<li><span>${academy[i].audience} (${academy[i].numbers
            } seats) </span><i>${academy[i].faculty}</i></li>`;
    }
    document.getElementById("academy_list_name").innerHTML = str;
}*/

/*academy.sort(function (a, b) {
    let aa = a.audience.toLocaleLowerCase(),
        bb = b.audience.toLocaleLowerCase();
    if (aa < bb) {
        return -1;
    } if (aa > bb) {
        return 1;
    } else {
        return 0;
    }
});*/

