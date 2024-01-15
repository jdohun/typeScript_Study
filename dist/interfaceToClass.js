"use strict";
class cEmployee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name is ${this.name}, I am ${this.age} years old.`);
    }
    aging() {
        return ++this.age;
    }
}
let myCEmployee = new cEmployee("dh", 1);
myCEmployee.introduce();
console.log(myCEmployee.aging());
console.log(myCEmployee.age);
let age = myCEmployee.age;
