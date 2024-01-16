"use strict";
//////////////////////////////////////////////////
// 함수 매개변수로 적절한 데이터 타입을 설정해봅니다.
//////////////////////////////////////////////////
// function first(o: any[]): any {
//     return o[0];
// }
//
// function nth(o: any[], n: number): any {
//     return o[n];
// }
//
// function last(o: any[]): any {
//     return o[o.length - 1];
// }
//
// const numbers: any[] = [
//     'one',
//     'double',
//     3,
//     () => console.log('라스트 넘버')
// ];
//
// console.log(first(numbers));
// console.log(nth(numbers, 2));
// console.log(last(numbers)());
//////////////////////////////////////////////////
// 함수 매개변수로 적절한 데이터 타입을 유니온으로 설정해봅니다.
//////////////////////////////////////////////////
// function first(o: string): any {
//     return o[0];
// }
//
// function nth(o: any[], n: number): any {
//     return o[n];
// }
//
// function last(o: any): any {
//     return o[o.length - 1];
// }
//
// const numbers: any[] = [
//     'one',  // string
//     'double',   // string
//     3,  // number
//     () => console.log('라스트 넘버') // arrow function
// ];
//
// const messages: string = `사건의 핵심 '시그니처'를 파악하라`;
//
// console.log(first(messages));
// console.log(nth(numbers, 2));
// console.log(last(numbers)());
//////////////////////////////////////////////////
// 함수 반환값의 적절한 타입을 지정해보세요.
//////////////////////////////////////////////////
function setStyle(el, prop, value) {
    // @ts-ignore
    el.style[prop] = value;
}
function getStyle(el, prop) {
    // @ts-ignore
    return el.style[prop];
}
setStyle(document.body, 'background', '#9c1e04');
console.log(getStyle(document.body, 'background-color'));
