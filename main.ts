// Type Literals

enum Color {
    Red, // 0
    Yellow = 5, 
    Green, // 6
}

console.log(Color.Red) // print index number (0 ,1 ,2)
console.log(Color[5]); // print value (Red, Yellow, Green)
console.log(Color["Green"]) // print index number (0 ,1 ,2)




// error enum (2nd console)
const enum Colors {
    Red = 5, // 5
    Yellow, // 6
    Green, // 7
}

console.log(Colors.Red) // print index number (0 ,1 ,2)
// console.log(Colors[5]); // in const enum this method cannot exicute
console.log(Colors["Green"]) // print index number (0 ,1 ,2)




// Home work 
// chatgpt: switchcase and enum create one example from chatgpt