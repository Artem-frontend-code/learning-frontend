
//Переключение тем
let buttonDark = document.querySelector('.theme-button-dark');
let buttonLight = document.querySelector('.theme-button-light');

buttonDark.onclick = function () {
    buttonDark.classList.add('active');
    buttonLight.classList.remove('active');
    document.body.classList.add('dark');
}

buttonLight.onclick = function () {
    buttonLight.classList.add('active');
    buttonDark.classList.remove('active');
    document.body.classList.remove('dark');
}

//Переключение шрифта
let buttonSansSerif = document.querySelector('.font-button-sans-serif');
let buttonSerif = document.querySelector('.font-button-serif');

buttonSansSerif.onclick = function () {
    buttonSansSerif.classList.add('active');
    buttonSerif.classList.remove('active');
    document.body.classList.remove('serif');
}

buttonSerif.onclick = function () {
    buttonSerif.classList.add('active');
    buttonSansSerif.classList.remove('active');
    document.body.classList.add('serif');
}


//Скрывание и раскрывание статей

let blogs = document.querySelectorAll('.blog-article');


for (let blog of blogs) {
    let more = blog.querySelector('.more');
    more.onclick = function () {
        blog.classList.remove('short');
    }
    
}


//Раскладка карточек
let cards = document.querySelector('.cards');
let buttonGrid = document.querySelector('.card-view-button-grid');
let buttonList = document.querySelector('.card-view-button-list');

buttonGrid.onclick = function () {
    buttonGrid.classList.add('active');
    buttonList.classList.remove('active');
    cards.classList.remove('list');
}

buttonList.onclick = function () {
    buttonList.classList.add('active');
    buttonGrid.classList.remove('active');
    cards.classList.add('list');
}

//Галерея
let mainPhoto = document.querySelector('.active-photo');
let gallery = document.querySelector('.gallery');
let items = gallery.querySelectorAll('a');


for (let activeItem of items) {
    activeItem.onclick = function (evt) {
        evt.preventDefault();
        mainPhoto.src = activeItem.href;
        let currentActiveItem = gallery.querySelector('.active-item');
        currentActiveItem.classList.remove('active-item');
        activeItem.classList.add('active-item');


    }
}