const users = [
    {name : "John", email : "john@gmail.com", age : 25},
    {name : "Stefan", email : "stefan@gmail.com", age : 30},
    {name : "Daniel", email : "daniel@gmail.com", age : 32}
]

for (const user of users) {
    const { name, email, age } = user;

    console.log("newName:", user.name);
    console.log("newEmail:", user.email);
    console.log("newAge:", user.age);
}
