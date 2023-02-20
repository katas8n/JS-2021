// Global variables
// const userName = prompt("What is ur name ");

// const result = greeting(userName);
// console.log(result);

// console.log(expression); ?????
// greeting("Cat");
// greeting("Biden");

// Function declaration

// Local variables
// function greeting(un) {
// Functions body

//   Local variable
//   const expression = `Hello ${un}`;
//   alert(expression);

//   if (expression === "Hello Kir")
// return (function () {
//   return expression + "!!";
// })();

//   return expression;
// }

// 1. Greeting (with alert)
// 2. What do you want to do : 1) Register 2) Auth 3) Show all users 4) Quit
// 3. show all users => print users to the console

// let isRunning = true;

// const users = [
//   {
//     email: "k@i.ua",
//     password: "233223923",
//     firstName: "Joe",
//     surname: "Biden",
//     age: 999,
//   },
//   {
//     email: "i@i.ua",
//     password: "miketyson3223",
//     firstName: "John",
//     surname: "Doe",
//     age: 23,
//   },
//   {
//     email: "r@i.ua",
//     password: "jose2332",
//     firstName: "Mike",
//     surname: "Bubby",
//     age: 32,
//   },
// ];

// const admins = [
//   {
//     email: "admin@iua.ua",
//     password: "admin",
//     firstName: "Alexander",
//     surname: "Popov",
//     age: 923,
//   },
//   {
//     email: "kormich@iua.ua",
//     password: "iHateTallPeople",
//     firstName: "Sanya",
//     surname: "Kormich",
//     age: 13,
//   },
// ];

// while (isRunning) {
//   alert("Hello user");

//   const userChoose = prompt(
//     "What do you want to do : 1) Register 2) Auth 3) Show all users 4) Quit"
//   );

//   switch (userChoose) {
//     case "1":
//       const fn = prompt("What is ur name ?");
//       const sn = prompt("What is ur surname ?");
//       const age = prompt("How old are you ?");
//       const em = prompt("Enter your email : ");
//       const pass = prompt("Enter your password : ");

//       const newUser = createNewUser(fn, em, pass, sn, age);

//       if (prompt("Is admin y/n") === "y") {
//         admins.push(newUser);
//       } else {
//         users.push(newUser);
//       }
//       break;

//     case "2":
//       const userRole = prompt("Are you admin ? y/n");

//       const userEmail = prompt("Enter your email : ");
//       const userPasswod = prompt("Enter your password : ");

//       if (userRole === "y") {
//         auth(userEmail, userPasswod, admins);
//       } else {
//         auth(userEmail, userPasswod, users);
//       }
//       break;

//     case "3":
//       const role = prompt("Do you want to look at a) admins or b) users ?");

//       switch (role) {
//         case "a":
//           printUsersToTheConsole(admins);
//           break;
//         case "b":
//           printUsersToTheConsole(users);
//           break;

//         default:
//           errorMessage("We have only to picks : admins and users");
//           break;
//       }
//       break;

//     case "4":
//       isRunning = false;
//       break;

//     default:
//       errorMessage("Incorrect data try again later!");
//       break;
//   }

//   isRunning = isExit(confirm("Do you wanna do somthing else here ?"));
// }

// function validation(person, email, passwod) {
//   if (email === person.email) {
//     console.log("Here you are ", person.firstName);

//     if (passwod === person.password) {
//       console.table(person);

//       console.log("HERE WE ARE");
//     }
//   }
// }

// function auth(email, password, list) {
//   // for ... of
//   for (const person of list) {
//     validation(person, email, password);
//   }
// }

// function printUsersToTheConsole(users) {
//   console.table(users);
// }

// function errorMessage(message) {
//   alert(`ERROR : ${message}`);
// }

// function isExit(choose) {
//   return choose;
// }

// function createNewUser(fn, email, pas, sur, age) {
//   return {
//     firstName: fn,
//     email: email,
//     password: pas,
//     surname: sur,
//     age: age,
//   };
// }
