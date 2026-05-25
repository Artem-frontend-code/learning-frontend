let switchTheme = document.querySelector(".switch-theme");
let card = document.querySelector(".card");



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

form.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.textContent = comment.value;
    list.append(newComment);
    textArea.value= '';
}