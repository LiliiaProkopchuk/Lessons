let = map;

$(document).ready(function () {
    map = L.map('map').setView([46.943169, 32.049197], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    lc = L.control.locate({
        strings: {
            title: "Где я?"
        }
    }).addTo(map);

    let markers = L.markerClusterGroup();

    let Markers = [{

        n: 46.942257,
        e: 32.037335,
        name: 'Рибний магазин "Ракушка"',
        link: 'https://rakyshka.com.ua/',
        address: 'Богоявленський проспект, 41а',
        phone: 0633455774
    }, {
        n: 46.938179,
        e: 32.040661,
        name: 'EVA',
        link: 'https://eva.ua/',
        address: 'вулиця Космонавтів, 60',
        phone: 0800303700
    }, {
        n: 46.940253,
        e: 32.042346,
        name: 'Горожанин',
        link: '',
        address: 'вулиця 28-ї Армії, 9А',
        phone: 0512226136
    }, {
        n: 46.943195,
        e: 32.049237,
        name: 'Доярушка',
        link: 'https://doyarushka.com/',
        address: 'вулиця Миколаївська, 34б/1',
        phone: 0675141475
    }, {
        n: 46.950527,
        e: 32.044746,
        name: 'Супермаркет Мида',
        link: 'https://mida.mk.ua/',
        address: 'проспект Миру, 18',
        phone: 0675751477
    }, {
        n: 46.949646,
        e: 32.046272,
        name: 'SushiYam',
        link: 'https://sushiyam.mk.ua/',
        address: 'проспект Миру, ріг вул. 5 лінії',
        phone: 0987628319
    }, {
        n: 46.948720,
        e: 32.048335,
        name: 'Гостиный двор',
        link: '',
        address: 'вулиця Генерала Свиридова, 37',
        phone: 0512500101
    }, {
        n: 46.944388,
        e: 32.057124,
        name: 'Спортивный клуб "Графит"',
        link: 'https://grafit.com.ua/',
        address: 'проспект Миру, 54В',
        phone: 0966159641
    }, {
        n: 46.948127,
        e: 32.048277,
        name: 'Pizza Celentano',
        link: 'https://egoisty.com/',
        address: 'проспект Миру, 30А',
        phone: 0512709871
       }, {
        n: 46.942814,
        e: 32.057854,
        name: 'Торговая сеть "Мида"',
        link: 'https://mida.mk.ua/',
        address: '57/, вулиця Космонавтів, 3',
        phone: 0504937533
       }, {
        n: 46.942950,
        e: 32.057556,
        name: 'Суши Wok',
        link: 'https://sushiwok.ua/',
        address: 'вулиця Космонавтів, 57/1',
        phone: 0662707766
    }, {
        n: 46.940763,
        e: 32.053686,
        name: 'Салон красоты Rock&Beauty',
        link: 'https://rockbeauty.com.ua/',
        address: 'вулиця Космонавтів, 51',
        phone: 0512593132
       }, {
        n: 46.939543,
        e: 32.060724,
        name: 'ТЦ «ТАВРИЯ-В»',
        link: 'https://tavriav.ua/',
        address: 'проспект Миру, 72',
        phone: 0512766550
    }, {
        n: 46.946303,
        e: 32.050807,
        name: 'Ковровый дом',
        link: 'https://kovervdom.com/',
        address: 'проспект Миру, 40',
        phone: 0500640677
    }, {
        n: 46.947863,
        e: 32.050110,
        name: 'АТБ-Маркет',
        link: 'https://atbmarket.com/',
        address: 'проспект Миру, 34/3',
        phone: 0800500415
    }, {
        n: 46.944933,
        e: 32.042786,
        name: 'Спортивный комплекс «Зоря»',
        link: '',
        address: 'вулиця Театральна, 8',
        phone: 0512214062
    }, {
        n: 46.942750,
        e: 32.044256,
        name: 'Парикмахерская Фея',
        link: '',
        address: 'вулиця Миколаївська, 19',
        phone: 0512212007
    }, {
        n: 46.943829,
        e: 32.054542,
        name: 'Кафе Подкова',
        link: '',
        address: 'проспект Миру, 54',
        phone: 0969553736
    }, {
        n: 46.945821,
        e: 32.051536,
        name: 'NOVUS',
        link: '',
        address: 'проспект Миру, 40',
        phone: 0800601729
    }, {
        n: 46.944385,
        e: 32.051879,
        name: 'Супермаркет Копейка',
        link: 'https://kopeyka.com.ua/',
        address: '17-г/15, проспект Миру',
        phone: 0800400444
    }, {
        n: 46.943169,
        e: 32.049197,
        name: 'Ресторан немецкой кухни Зубр',
        link: '',
        address: 'вулиця Миколаївська, 34Б',
        phone: 0506304512
    }, {
        n: 46.941925,
        e: 32.055292,
        name: 'АТБ-Маркет',
        link: 'https://atbmarket.com/',
        address: 'вулиця Космонавтів, 76/1',
        phone: 0800500415
    }, {
        n: 46.944166,
        e: 32.051397,
        name: 'Ресторан Mon Amour',
        link: '',
        address: 'проспект Миру, 17г',
        phone: 0675157664
    }];


    for (let i = 0; i < Markers.length; i++) {
        let popup_dot = `<h2>${Markers[i].name}</h2><p>${Markers[i].address}</p>`;
        if (Markers[i].link != 0) {
            popup_dot += `<a href="${Markers[i].link}" target="_blank">Перейти на сайт</a>`;
        }
        if (Markers[i].phone != 0) {
            popup_dot += `<p>&#9742; ${Markers[i].phone}</p>`
        }
        markers.addLayer(L.marker([Markers[i].n, Markers[i].e]).bindPopup(popup_dot));

    };
    map.addLayer(markers);
});

