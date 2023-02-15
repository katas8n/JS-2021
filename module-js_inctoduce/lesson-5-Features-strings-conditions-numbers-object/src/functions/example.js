// const userName = prompt("Enter your name : ");
// const userSurname = prompt("Enter your surname: ");

// greeting("Mike", "Bibby");
// greeting("John", "Doe");
// greeting(userName, userSurname);
// greeting("Mike", "Tyson");

// function greeting(firstName, surname) {
//   console.log(`Hello ${firstName} ${surname} , glad to see you!`);
//   console.log("How are you " + firstName);
//   console.log("------------------------");
// }

// const str = prompt("Enter string that i convert to  number: ");

// function convertToNumber(srting) {
//   if (srting.length > 1) {
//     const number = +srting;

//     return number;
//   } else {
//     return srting;
//   }
// }

// const value1 = convertToNumber(str);
// const value2 = convertToNumber(8);

// console.log("[value1]", value1);
// console.log("[value2]", value2);

// let isRunning = true;

// while (isRunning) {
//   const chooseCurrency = prompt(
//     "What type of bills do you have ? 1) Dollar 2) EUR"
//   );
//   const to = prompt("What type of bills do you have ? 1) GRN");

//   const amountOfMoney = prompt("How much money do you have ?");

//   isRunning = confirm("Do you wanna play ?");

//   const result = convert(chooseCurrency, to, amountOfMoney);

//   console.log("[result]", result);
// }

// function convert(current, after, amount) {
//   if (after === "1") {
//     if (current === "1") {
//       return +amount * 40;
//     } else {
//       return +amount * 45;
//     }
//   }
// }

// const alertBtn = document.getElementById("alert-btn");
// const input = document.getElementById("input");

// console.log(alertBtn);

// function showAlert(inputValue) {
//   alert("I'm here " + inputValue);
// }

// alertBtn.addEventListener("click", () => {
//   showAlert(input.value);
//   showAlert("DATA FROM SERVER");
// });

// function add() {
//   return 2 + 2;
// }

// const operationResult = add();
// const four = add();
// console.log("[operationResult]", operationResult);
// console.log("[four]", four);
