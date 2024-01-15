"use strict";
class Animal {
    // 생성자
    constructor(name) {
        this.age = 0;
        this.name = name;
    }
    // 메서드
    move(distance = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}
class Dog extends Animal {
    // 생성자 오버라이딩
    constructor(name) {
        super(name); // 부모 클래스 생성자 호출
    }
    // 메서드 오버라이딩
    move(distance = 5) {
        super.move(distance);
    }
    // 새로운 메서드 추가
    bark() {
        console.log("Woof! Woof!");
    }
}
let dog = new Dog("Buddy");
dog.move();
dog.bark();
