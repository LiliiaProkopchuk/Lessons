//task 1

let playList = [
    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },
    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },
    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },
    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },
    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },
    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },
    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },
    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }];

let addList = () => {
    let ol = document.createElement('ol');
    task1_rez.append(ol);

    for (let i = 0; i < playList.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${playList[i].author} : ${playList[i].song}`;
        ol.appendChild(li);
    }
}

let myWindow = () => {

    let divShadow = document.createElement('div');
    divShadow.setAttribute("id", "modal_shadow");
    document.body.append(divShadow);

    let divWindow = document.createElement('div');
    divWindow.setAttribute("id", "my_window");
    document.body.append(divWindow);

    let divWindowHead = document.createElement('div');
    divWindowHead.setAttribute("id", "window_header");
    my_window.appendChild(divWindowHead);

    let divWindowHeadTitle = document.createElement('div');
    divWindowHeadTitle.className = "window_header_title";
    divWindowHeadTitle.insertAdjacentText("afterbegin", `Modal window`);
    divWindowHead.appendChild(divWindowHeadTitle);

    let a = document.createElement('a');
    a.setAttribute("href", "javascript:;");
    a.setAttribute("id", "window_close");
    a.setAttribute("onclick", "closeMyWindow()");
    a.setAttribute("title", "Close");
    a.insertAdjacentText("afterbegin", `×`);
    divWindowHead.appendChild(a);

    let divWindowBody = document.createElement('div');
    divWindowBody.setAttribute("id", "window_body");
    my_window.appendChild(divWindowBody);

    let text = document.createElement('p');
    text.insertAdjacentText("afterbegin", `A modal window in the graphical user interface is a window that blocks 
    the user’s work with the parent application until the user closes this window.Modal dialog boxes are mainly
    implemented.Also, modal windows are often used to draw the user's attention to an important event or 
    emergency.`);
    divWindowBody.appendChild(text);
}
function closeMyWindow() {
    document.getElementById("modal_shadow").remove();
    document.getElementById("my_window").remove();
}

//task 3
let i = 0;
function setActiveLight() {
    i++;
    let list = document.getElementsByClassName("light");
    if (list[i - 1]) {
        list[i - 1].setAttribute("class", "light");
    }
    if (i == list.length) {
        i = 0;
    }
    list[i].setAttribute("class", "light active");
}
