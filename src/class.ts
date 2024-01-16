export class Animal {
    // 속성
    name: string;
    age: number = 0;

    // 생성자
    constructor(name: string) {
        this.name = name;
    }

    // 메서드
    move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    // 생성자 오버라이딩
    constructor(name: string) {
        super(name); // 부모 클래스 생성자 호출
    }

    // 메서드 오버라이딩
    move(distance: number = 5): void {
        super.move(distance);
    }

    // 새로운 메서드 추가
    bark(): void {
        console.log("Woof! Woof!");
    }
}

let dog = new Dog("Buddy");
dog.move();
dog.bark();