// * [DATA_TYPES] null (object) , undefined , number (bigInt) , string (symbol) , boolean
// * [DATA_STRUCTURE] : object

// function objectsData(obj) {
//   if (typeof obj === "object") {
//     return console.log("There is object");
//   }

//   console.log("There isn't object");
// }

// ! DATA TYPES / STRUCT
// objectsData("John");
// objectsData(true);
// objectsData(23);
// objectsData(undefined);
// objectsData({});
// objectsData([]);
// objectsData(function () {});
// objectsData(null);

// ! Numbers

// console.log(typeof 43 === "number");
// console.log(typeof 3.14 === "number");
// console.log(typeof Math.LN2 === "number");
// console.log(typeof Infinity === "number");
// console.log(typeof NaN === "number");
// console.log(typeof Number("1") === "number");
// console.log(typeof Number("John") === "number");

// ! String

// console.log(typeof "" === "string");
// console.log(typeof "Hello" === "string");
// console.log(typeof "1" === "string");
// console.log(typeof typeof 1 === "string");
// console.log(typeof String(""). === "string");

// ! Booleans

// console.log(typeof true === "boolean");
// console.log(typeof false === "boolean");
// console.log(typeof Boolean(1) === "boolean");
// console.log(typeof !!!0 === "boolean");

// ! undefined

// console.log("[i]", i);

// var i = 0;

// var petr = {};

// petr.age = 33;

// console.log("[PETER'S_name]", petr.age);

// ! object

// console.log(typeof { a: 1 } === "object");
// console.log(typeof [] === "object");
// console.log(typeof /req/ === "object");
// console.log(typeof new Date() === "object");

// ! ARRAYS , OBJECTS in ditails

// const user1 = {
//   firstName: "John",
//   age: 23,
//   skills: ["HTML", "CSS"],
// };

// const user2 = {};

// for (const key in user1) {
//   const value = user1[key];

//   user2[key] = value;
//   //   console.log("[value]", value);
// }
// user2.firstName = "Mike";

// console.log(user1);
// console.log(user2);

// -----------------

// const arr = [1, 2, 3];
// const copiedArr = arr.slice();

// copiedArr.push(33);

// console.log("[arr]", arr);
// console.log("[copiedArr]", copiedArr);

// JSON
// const bob = {
//   firstName: "Bob",
// };

// const john = JSON.parse(JSON.stringify(bob));

// john.firstName = "John";

// console.log("[john]", john);
// console.log("[bob]", bob);
