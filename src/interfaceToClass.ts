interface iPerson {
    name: string;
    age: number;

    introduce(): void;
}

class cEmployee implements iPerson {
    age: number;
    name: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`My name is ${this.name}, I am ${this.age} years old.`)
    }

    aging(): number {
        return ++this.age;
    }
}

let myCEmployee = new cEmployee("dh", 1);
myCEmployee.introduce();
console.log(myCEmployee.aging());
console.log(myCEmployee.age);

let age: number = myCEmployee.age!;