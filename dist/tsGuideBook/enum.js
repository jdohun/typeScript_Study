"use strict";
//////////////////////////////////////////////////
// 01. Sizes 이넘 데이터를 정의한 후
//     xsmall, small, medium, large, xlarge
//     를 멤버로 설정해봅니다.
//////////////////////////////////////////////////
var Sizes;
(function (Sizes) {
    Sizes[Sizes["xsmall"] = 0] = "xsmall";
    Sizes[Sizes["small"] = 1] = "small";
    Sizes[Sizes["medium"] = 2] = "medium";
    Sizes[Sizes["large"] = 3] = "large";
    Sizes[Sizes["xlarge"] = 4] = "xlarge";
})(Sizes || (Sizes = {}));
console.log(Sizes);
//////////////////////////////////////////////////
// 02. Sizes 이넘 데이터에 값을 할당해봅니다.
//     할당된 값을 통해 멤버의 키워드를 출력해보세요.
//////////////////////////////////////////////////
console.log(Sizes.large);
console.log(Sizes[101]);
