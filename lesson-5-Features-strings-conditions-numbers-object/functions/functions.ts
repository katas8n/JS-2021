// alert , prompt , confirm

// * CUSTOM functions

// const userNum1: number = +prompt("Ener your number : ");
// const userNum2: number = +prompt("Ener your number : ");

// const numberFromServer1: number = 13;
// const numberFromServer2: number = 13;

// const numberFromNazar: number = 23;
// const numberFromIrina: number = 23;

// // args
// sum(userNum1, userNum2);
// sum(numberFromServer1, numberFromServer2);
// sum(numberFromNazar, numberFromIrina);
// sum(23, 520);

// // params
// function sum(num1: number, num2: number) {
//   console.log(num1 + num2);
// }

// ! DRY - don't repit yourself !

// * Calculator
// 1) Get two numbers

// * Global
// let isRunning: boolean = true;

// while (isRunning) {
//   // * Local
//   // const firstName = "John"; ********SCOPE*****
//   const number1: number = +prompt("Enter your number : ");
//   const number2: number = +prompt("Enter your second number : ");

//   //   if (2 > 1) {
//   //     const trueValue = true;

//   //     console.log(trueValue);
//   //   }
//   //   console.log(trueValue);

//   validate(number1, number2);
//   // console.log(firstName); ********SCOPE***** John here is visible
// }

// // console.log(firstName); ********SCOPE***** John here is invisible

// function validate(x: number, y: number) {
//   if (!isNaN(x) && !isNaN(y)) {
//     console.log("Valid");

//     const symbol = prompt("1)Add 2)Sub 3)Mult 4)Div");

//     calculate(x, y, symbol);
//   } else {
//     console.log("Invalid");

//     isRunning = confirm("You filled incorret data , do you want to try again?");
//   }
// }

// function calculate(a: number, b: number, symbol: string) {
//   switch (symbol) {
//     case "1":
//       console.log(a + b);

//       break;

//     case "2":
//       console.log(a - b);
//       break;

//     case "3":
//       console.log(a * b);
//       break;

//     case "4":
//       console.log(a / b);
//       break;

//     default:
//       console.log("Incorrect data!");

//       break;
//   }
// }
