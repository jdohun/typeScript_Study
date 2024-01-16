// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const class_1 = require("./class");
// // import 시 해당 파일 내부를 전부 로딩하기 때문에 기존 파일에서 호출된 함수(메서드) 또한 호출된다.
// // at src/class.ts:34~36
// // 때문에 import 될 파일은 정의만 하고 내부에서 동작하지 않는 구조로 설계하는 것이 예상치 못한 동작을 피할 수 있다.
// const myAnimal = new class_1.Animal('뭐로하지');
// // console.log(myAnimal.name);
// myAnimal.move();

console.log("Start");

// 매크로 태스크 큐
setTimeout(() => console.log("Macro Task"), 0);

// 마이크로 태스크 큐
Promise.resolve().then(() => console.log("Micro Task"));

console.log("End");

// Call Stack > microtast Queue > macrostack queue