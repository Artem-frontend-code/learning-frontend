const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
// deleteButton = document.querySelector("delete-task")
const list = document.querySelector(".todo-list");
const template = document.getElementById("liTemplate");
const tasks = loadTodos();

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const raw = localStorage.getItem('todos');
    if (!raw) return [];
    return JSON.parse(raw);
}

function renderTodo (todo) {
    const text = todo.text;
    const clone = template.content.cloneNode(true);
    const todoText = clone.querySelector(".todo-text");
    clone.querySelector('.todo-text').textContent = text;
    const deleteButton = clone.querySelector(".delete-task");
    const currentLi = clone.querySelector(".todo-item");
    const checkbox = clone.querySelector(".todo-checkbox");
    const idTask = todo.id;
    deleteButton.dataset.id = idTask;

    deleteButton.addEventListener("click", function() {
        const id = this.dataset.id; 
        const index = tasks.findIndex(task => task.id == id);
        tasks.splice(index,1);
        saveTodos(tasks);
        
        currentLi.remove();
    })
    list.appendChild(clone);
   
    if (todo.done) {
        checkbox.checked = true;
        todoText.style.textDecoration = "line-through";
        todoText.style.textDecorationThickness = "3px";
    }

    checkbox.addEventListener("change", function() {
        if(checkbox.checked) {
            todoText.style.textDecoration = "line-through";
            todoText.style.textDecorationThickness = "3px";
            todo.done = true;
            saveTodos(tasks);
        } else {
            todoText.style.textDecoration = "none";
            todo.done = false;
            saveTodos(tasks);
        }
        
    })


}

tasks.forEach (todo => {
    renderTodo(todo);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    const todo = {id: Date.now(),
        text: text,
        done:false,};
    tasks.push(todo);
    saveTodos(tasks);
    renderTodo(todo);
    

    input.value="";
});


