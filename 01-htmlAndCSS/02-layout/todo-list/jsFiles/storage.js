export function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

export function loadTodos() {
    const raw = localStorage.getItem('todos');
    if (!raw) return [];
    return JSON.parse(raw);
}