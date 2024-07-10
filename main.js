"use strict";
// Type Literals
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 5] = "Yellow";
    Color[Color["Green"] = 6] = "Green";
})(Color || (Color = {}));
console.log(Color.Red); // print index number (0 ,1 ,2)
console.log(Color[5]); // print value (Red, Yellow, Green)
console.log(Color["Green"]); // print index number (0 ,1 ,2)
console.log(5 /* Colors.Red */); // print index number (0 ,1 ,2)
// console.log(Colors[5]); // in const enum this method cannot exicute
console.log(7 /* Colors["Green"] */); // print index number (0 ,1 ,2)
let x = 1;
console.log(x);
console.log(++x);
console.log(x);
// Home work 
// chatgpt: switchcase and enum create one example from chatgpt
