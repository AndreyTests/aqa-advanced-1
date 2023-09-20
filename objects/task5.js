const users = [
    {name : "John", email : "john@gmail.com", age : 25},
    {name : "Stefan", email : "stefan@gmail.com", age : 30},
    {name : "Daniel", email : "daniel@gmail.com", age : 32}
]

for (const newUser of users) {
    const { name, email, age } = users;

    console.log("newName:", newUser.name);
    console.log("newEmail:", newUser.email);
    console.log("newAge:", newUser.age);
}