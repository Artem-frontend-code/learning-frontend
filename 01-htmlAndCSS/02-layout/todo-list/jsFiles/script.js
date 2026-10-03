
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
// deleteButton = document.querySelector("delete-task")
const list = document.querySelector(".todo-list");
const template = document.getElementById("liTemplate");
const tasks = loadTodos();
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const done = document.querySelector(".done");
const clear = document.querySelector(".clear");
import {saveTodos, loadTodos} from "./storage.js";
let currentFilter = "all";

function clearList () {
    while (list.firstChild) {
    list.firstChild.remove();
    }
}

function render () {
    
    let tasksToShow;
        if (currentFilter === "all") {
            tasksToShow = tasks;
        } else if (currentFilter === "active") {
            tasksToShow = tasks.filter(({done}) => done === false);
        } else if (currentFilter === "done") {
            tasksToShow = tasks.filter(({done}) => done === true);
        }
        clearList();
        tasksToShow.forEach(todo => renderTodo(todo));

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
        const index = tasks.findIndex(task => task.id === idTask);
        if(checkbox.checked) {
            const updatedTodo = {...todo, done: true};
            tasks.splice(index,1,updatedTodo);
            saveTodos(tasks);
        } else {
            const updatedTodo = {...todo, done: false};
            tasks.splice(index,1,updatedTodo);
            saveTodos(tasks);
        }

        render();
    })


}

tasks.forEach (todo => {
    renderTodo(todo);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") {
        return;
    }
    const todo = {id: Date.now(),
        text: text,
        done:false,};
    tasks.push(todo);
    saveTodos(tasks);
    renderTodo(todo);
    

    input.value="";
});

done.addEventListener("click", function() {
    currentFilter = "done";
    render();
});

active.addEventListener("click", function() {
    currentFilter = "active";
    render();
});

all.addEventListener("click", function() {
    currentFilter = "all";
    render();

});

clear.addEventListener("click", function() {
    const filtered = tasks.filter((task) => task.done === false);
    tasks.splice(0,tasks.length, ...filtered);
    saveTodos(tasks);
    render();

});

