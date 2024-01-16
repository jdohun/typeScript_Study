"use strict";
// 숫자형
var Brands;
(function (Brands) {
    Brands[Brands["Nike"] = 0] = "Nike";
    Brands[Brands["Adidas"] = 1] = "Adidas";
    Brands[Brands["NewBalance"] = 2] = "NewBalance"; // 2
})(Brands || (Brands = {}));
const myShoes = Brands.Nike; // 0
// 문자형
var Player;
(function (Player) {
    Player["kim"] = "\uAE40";
    Player["park"] = "\uBC15";
})(Player || (Player = {}));
const player = Player.park; // 박
var Str;
(function (Str) {
    Str[Str["\uAE40"] = 0] = "\uAE40";
    Str[Str["\uC774"] = 1] = "\uC774";
    Str[Str["\uBC15"] = 2] = "\uBC15";
    Str[Str["\uCD5C"] = 3] = "\uCD5C";
    Str[Str["\uC815"] = 4] = "\uC815";
})(Str || (Str = {}));
const 김 = Str.김;
