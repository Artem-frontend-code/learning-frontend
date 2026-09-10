const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
// deleteButton = document.querySelector("delete-task")
const list = document.querySelector(".todo-list");
const template = document.getElementById("liTemplate");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    const clone = template.content.cloneNode(true);
    const todoText = clone.querySelector(".todo-text");
    clone.querySelector('.todo-text').textContent = text;
    const deleteButton = clone.querySelector(".delete-task");
    const currentLi = clone.querySelector(".todo-item");
    const checkbox = clone.querySelector(".todo-checkbox");

    deleteButton.addEventListener("click", function() {
        currentLi.remove();
    })
    list.appendChild(clone);

    checkbox.addEventListener("change", function() {
        if(checkbox.checked) {
            todoText.style.textDecoration = "line-through";
            todoText.style.textDecorationThickness = "3px";
        } else {
            todoText.style.textDecoration = "none";
        }
        
    })

    input.value="";
});


