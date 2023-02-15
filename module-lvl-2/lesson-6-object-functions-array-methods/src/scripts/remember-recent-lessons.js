// JS

// Single thread
// Weak typed

//! Data types

//!* 1. Numbers

const num = 23;

// + , - , * , / , ** , %

//* 2. Strings

const str = "Hello world";

// Static property
const strLength = str.length;

// Methods
const newStr = str.concat(" !!!");
const slicedStr = newStr.slice(-3);
const indexOfStr = str.indexOf("o");
const char = str.charAt(indexOfStr);
const lastIndexOfStr = str.lastIndexOf("d");
const includedFullStop = str.includes(".");
const helloUser = str.replace("world", "user");

// console.log("[str]", str);
// console.log("[newStr]", newStr);
// console.log("[slicedStr]", slicedStr);
// console.log("[char]", char);
// console.log("[indexOfStr]", indexOfStr);
// console.log("[lastIndexOfStr]", lastIndexOfStr, str.charAt(lastIndexOfStr));
// console.log("[includedFullStop]", includedFullStop);
// console.log("[helloUser]", helloUser);
// console.log("---------------");

// * 3. Boolean

// ! equation
// true / false
// < , > , == , === , >= , <= , !
// console.log(2 > 5);

// * 4. Null
// let name = null;
// name = "Bob";

// const userValue = prompt("Enter your name :");
// console.log("[userValue]", userValue);

// * 5. undefined

// let bob;
// console.log(bob);

// console.log(bob);
// var bob = "Bob";

// console.log(bob);

//! conditions

// * if..else
// if age > 23 (24 ,25 ,26 , ...)
// if (2 > 2) {
//   console.log("No");
// } else {
//   console.log("Yep");
// }

// * switch

//  ? break -> it destroy : cycles , switch , ...

// const john = "John";

// switch (john) {
//   case "John":
//     console.log("John");
//     break;
//   case "Mike":
//     console.log("Mike");
//     break;

//   default:
//     console.log("Bye bye");
//     break;
// }

// * ternar
// const age = 13;

// const condition = age === 23 ? "Hello" : "Goodbye";

// console.log(condition);

// *** typeof
// *** alert() , prompt() , confirm() => functions

// * Cycles

// while - when amount of itteration not fixed
// for - when amount of itteration fixed
// do...while - stupid while twin

// continue , break ;
