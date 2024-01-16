"use strict";
//////////////////////////////////////////////////
// 01. 암시적으로 설정된 array 타입을
//     명시적으로 변경해봅니다.
//////////////////////////////////////////////////
let national_team_members = ['손홍민', '이승우', '이강인'];
console.log(national_team_members);
//////////////////////////////////////////////////
// 02. 모든 데이터 유형을 아이템으로 하는
//     array 타입을 명시적으로 설정해봅니다.
//////////////////////////////////////////////////
let data_list = [
    { type: '뉴스' },
    false,
    (x) => Math.pow(x, 3)
];
console.log(data_list);
//////////////////////////////////////////////////
// 03. 숫자 또는 문자 또는 불리언 타입 중 하나를 아이템으로
//     설정 가능한 array 타입을 명시적으로 설정해봅니다.
//////////////////////////////////////////////////
// 둘 다 가능
// let only_num_str_boo: (number | boolean | string)[] = [];
let only_num_str_boo = [];
only_num_str_boo.push(10);
only_num_str_boo.push(true);
only_num_str_boo.push('프로그래밍');
console.log(only_num_str_boo);
