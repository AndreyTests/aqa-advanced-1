let newUser;
let newTodo;
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json());
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json());
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
        newUser = user;
        newTodo = todo;
        return {newUser, newTodo};
    })
Promise.race([fetchTodo, fetchUser])
    .then((result) => {
        console.log('Race Result:', result);
    });