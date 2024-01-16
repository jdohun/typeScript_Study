import {Animal} from './class';

// import 시 해당 파일 내부를 전부 로딩하기 때문에 기존 파일에서 호출된 함수(메서드) 또한 호출된다.
// at src/class.ts:34~36
// 때문에 import 될 파일은 정의만 하고 내부에서 동작하지 않는 구조로 설계하는 것이 예상치 못한 동작을 피할 수 있다.
const myAnimal = new Animal('뭐로하지');

// console.log(myAnimal.name);
myAnimal.move()