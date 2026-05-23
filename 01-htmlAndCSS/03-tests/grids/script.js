let switchTheme = document.querySelector(".switch-theme");
let card = document.querySelector(".card");
let body
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