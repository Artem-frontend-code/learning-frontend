
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
