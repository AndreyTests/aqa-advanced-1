const person = {
    firstName : "John",
    lastName : "Wick",
    age : 59
};

person.email = "johnWick@hollywood.com";

delete person.age;

console.log (person);
