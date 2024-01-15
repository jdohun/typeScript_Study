// 호이스팅으로 인한 함수 사용 : 권장 X
console.log(functionAdd(1, 2));

function functionAdd(num1: number, num2: number): number {
    return num1 + num2;
}

// 함수 할당 전에 사용 불가
//console.log(multiply(1,2));

// 함수 표현식
const multiply = function (num1: number, num2: number): number {
    return num1 * num2;
}

console.log(multiply(1, 2));

// 함수 할당 전에 사용 불가
// console.log(divide(2, 2));

// 화살표 함수
const divide = (num1: number, num2: number): number => {
    return num1 / num2;
}

console.log(divide(2, 2));
