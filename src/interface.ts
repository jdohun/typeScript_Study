// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     // sayMyName(parameter1:string, parameter2:string):void;
// }
//
// interface Employee extends Person {
//     role: string;
// }

interface OnlyFunction {
    (x: number, y: number): number;
}

const addTwoNum: OnlyFunction = (x, y) => x + y;

let result = addTwoNum(1, 2);
console.log(`1 + 2 = ${result}`);

// const sayHello = function (person: Person): void {
//     console.log(`Hello, ${person.firstName} ${person.lastName}!`);
// }
//
// const introduce = (employee: Employee): void => {
//     console.log(`My role is ${employee.role}, my age is ${employee.age}`)
// }

// const myFriend: Person = {firstName: "John", lastName: "Doe", age: 20};
// sayHello(myFriend); // "Hello, John Doe!"
//
// const myEmployee: Employee = {firstName: "John", lastName: "Doe", age: 20, role: "member"};
// introduce(myEmployee);

interface StringArr {
    [index: number]: string;
}

let arr: StringArr = ["a", "b", "c"];

console.log(arr[1]);

interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

type Capt = Person & Developer;

let devPerson: Capt = {
    name: "kim",
    age: 777,
    skill: "FE"
};