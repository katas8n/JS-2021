"use strict";
// types

// string
// boolean
// number
// null
// undefined
// object

// const firstName: string = "John";
// Greeting
// const firstName: string | null = prompt("What is your name");
// const age: number | null = +prompt("How old are you ?");
// const isAdmin: boolean | null = confirm("Are you admin ?");
// const clerk = {
//   name: firstName,
//   age: age,
//   isAdmin: isAdmin,
// };
// console.log(clerk);
// function
// DRY
// function sayHello() {
//   console.log("Hello user");
// }
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// let switcher: boolean = true;
// ! Every string has attribute length
// Register
// while (switcher) {
//   const name: string = prompt("What is your name");
//   if (name.length > 2) {
//     const surname: string = prompt("What is your surname");
//     // Babby 0 <= 13, teenager > 13 18 <, adult 18 >=
//     const age: number = +prompt("How old are you ?");
//     let status;
//     if (age > 0 && age <= 13) {
//       status = "babby";
//     } else if (age > 13 && age < 18) {
//       status = "teenager";
//     } else {
//       status = "adult";
//     }
//     switch (status) {
//       case "babby":
//         console.log("Sorry , you're too young to wath it");
//         switcher = false;
//         break;
//       case "teenager":
//         console.log(
//           "Okay , but i hope that you parents somewhere close to you"
//         );
//         break;
//       case "adult":
//         console.log("Okay ,let's go");
//         const email: string = prompt("Enter your email");
//         if (email.includes("@")) {
//           const password: string = prompt("Enter your password");
//           if (password.length > 3) {
//             console.log("User was successfully regisered");
//           } else {
//             console.log("Your password must contain more than 3 symbols");
//           }
//         } else {
//           console.log("Sorry , try again , sonething went wrong");
//         }
//         break;
//       default:
//         break;
//     }
//   } else {
//     console.log("Your name must consist more than 2 symbols");
//   }
// }
// 1) Register
// 2) Authorization
// 3) Quit
// let switcher: boolean = true;
// while (switcher === true) {
//   const userChoose: string = prompt(
//     "Eneter what do you want to \na) Register \nb)Auth \nc)Quit"
//   );
//   let userName;
//   let userEmail;
//   let userPassword;
//   if (userChoose === "a") {
//     userName = prompt("Enter name");
//     userEmail = prompt("Enter email");
//     userPassword = prompt("Enter password");
//     console.log(`${userName} was successfully added to data base`);
//   } else if (userChoose === "b") {
//     console.log(`You should to register if you wanna auth`);
//   } else if (userChoose === "c") {
//     switcher = false;
//   } else {
//     console.error("Something went wrong try again");
//   }
// }
