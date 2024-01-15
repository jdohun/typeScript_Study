"use strict";
const sayHello = function (person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
};
const introduce = (employee) => {
    console.log(`My role is ${employee.role}, my age is ${employee.age}`);
};
const myFriend = { firstName: "John", lastName: "Doe", age: 20 };
sayHello(myFriend); // "Hello, John Doe!"
const myEmployee = { firstName: "John", lastName: "Doe", age: 20, role: "member" };
introduce(myEmployee);
