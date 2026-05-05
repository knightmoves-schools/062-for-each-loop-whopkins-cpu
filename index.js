function markAsDone(todos) {
    var newTodos = [];
    todos.forEach(todo => {
        newTodos.push('done - ' + todo);
    });
    return newTodos;
}