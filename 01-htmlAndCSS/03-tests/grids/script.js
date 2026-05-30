let switchTheme = document.querySelector(".switch-theme");
let card = document.querySelector(".card");
let globalSwitch = document.querySelector(".globalSwitch");


let button = document.querySelector(".submit-button");
let textArea = document.querySelector(".comment");
let list = document.querySelector(".comment-list");

switchTheme.onclick = function () {
    if (switchTheme.classList.contains('black')) {
        card.classList.add('card-black');
        card.classList.remove('card');
        switchTheme.classList.add('white');
        switchTheme.classList.remove('black');
    } else {
        card.classList.add('card');
        card.classList.remove('card-black');
        switchTheme.classList.add('black');
        switchTheme.classList.remove('white');

    }

}

let form = document.querySelector(".comment-form");



globalSwitch.onclick = function () {
    if (document.body.classList.contains("blackBody")) {
        document.body.classList.remove("blackBody");
        document.body.classList.add("whiteBody");
    } else {
        document.body.classList.remove("whiteBody");
        document.body.classList.add("blackBody");
    }
    

}