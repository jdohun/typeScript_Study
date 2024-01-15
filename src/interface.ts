interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

interface Employee extends Person {
    role: string;
}

const sayHello = function (person: Person): void {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
}

const introduce = (employee: Employee): void => {
    console.log(`My role is ${employee.role}, my age is ${employee.age}`)
}

const myFriend: Person = {firstName: "John", lastName: "Doe", age: 20};
sayHello(myFriend); // "Hello, John Doe!"

const myEmployee: Employee = {firstName: "John", lastName: "Doe", age: 20, role: "member"};
introduce(myEmployee);