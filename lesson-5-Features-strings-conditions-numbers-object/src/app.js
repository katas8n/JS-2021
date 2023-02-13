"use strict";
// * number
// let num:number = 23;
// num = 13;
// num = 11;
// num = "HEllo world";
// num = true;
// const num: number = 23;
// let result: number = num + 13;
// console.log(result);
// result = num / 13;
// console.log(result);
// result = num * 13;
// console.log(result);
// result = num % 13;
// console.log(result);
// * string
// const str: string = "Hello world";
// const result: string = "Hello world" + true;
// const result: string = "Hello world" + 23;
// * boolean
// let isAdmin: boolean = true;
// let result: boolean = true + 2;
// ! null , undefined
// let kek: undefined = undefined;
// let kek: null = null;
// kek = 23;
// * feature
// * any - whatever !!!!11!
// let num: string;
// let num:string = "It's a string!";
// num = 23;
// 5 primitives and 1 special object
// ! Type Alias
// type names = string | null;
// const firstName: names = "John";
// ! Union
// type id = "id3200723" | "id3200123";
// const studentId: id = "id3200723";
// const adminId: id = "id3200123";
// const lectorId: id = "id3200223";
// const number1: number = 23;
// const number2: number = 13;
// const equation: string = `23 + 13 = ${number1 + number2}`;
// console.log(equation);
// * WeekDay
// 1) Get day of the week
// 2) If Sunday : Today is beutiful day
// else if Monday : Today is awful day
// else if Tuesday : Today is thick day
// else if Wednesday: Today is middle of the week
// else if Thursday: Today is the day befor Friday
// else if Friday: Today is super-pupperDay!!!
// else if Saturday: Today is super-pupperDay!!!
// else : incorrect data and return user to  1) Get day of the week
// type WeekDay =
//   | "sunday"
//   | "monday"
//   | "tuesday"
//   | "wednesday"
//   | "thursday"
//   | "friday"
//   | "saturday";
// let switcher = true;
// while (switcher) {
//   const dayOfWeek: WeekDay = prompt("What day is it today? / Exit q)");
//   switch (dayOfWeek.toLowerCase()) {
//     case "sunday":
//       console.log("Today is beutiful day");
//       switcher = !confirm("Do you wanna exit ?");
//       break;
//     case "monday":
//       console.log("Today is awful day");
//       switcher = !confirm("Do you wanna exit ?");
//       break;
//     case "tuesday":
//       console.log("Today is thick day");
//       switcher = !confirm("Do you wanna exit ?");
//       break;
//     case "wednesday":
//       console.log("Today is middle of the week");
//       switcher = !confirm("Do you wanna exit ?");
//       break;
//     case "thursday":
//       console.log("Today is middle of the week");
//       switcher = !confirm("Do you wanna exit ?");
//       break;
//     case "friday":
//       console.log("Today is middle of the week");
//       switcher = !confirm("Do you wanna exit ?");
//       break;
//     case "saturday":
//       console.log("Today is middle of the week");
//       switcher = !confirm("Do you wanna exit ?");
//       break;
//     case "q":
//       switcher = !confirm("Do you wanna exit ?");
//       break;
//     default:
//       console.log("Something went wrong try again!");
//       break;
//   }
// }
// type yes = true;
// type no = false;
// * Task
// 1) Greeting
// 2) Get userName - userName must contain more than 2 symbols
//                 - userName must be convert into upper case
//                 - cut last 3 letters from name and reverse it
// 3) Get user age => Age must be positive number
//                 => Age must be a number
//                 => If age is not a number -> return user to prompt("Enter your age")
// 4) Узнать в год какого животного был рожден пользователь
// 4.1) Get month of birth and узнать кто наш пользователь по знак зодиака
// 5) Every step must keep propose to user => Do you wanna exit ?
