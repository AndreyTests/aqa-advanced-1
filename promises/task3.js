let todo;
let user;
async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
}

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
}
async function getData() {
    todo = await fetchTodo();
    user = await fetchUser();
    return {todo, user};
}

getData();