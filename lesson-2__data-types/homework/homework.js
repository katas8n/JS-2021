// HOMEWORK

// USE FOR YOUR HOMEWORK : prompt , alert , confirm
// conditions : if , else if , else
// To number type : +variable , parseInt(variable)
// < , > , <= , >=
// !!! and - && , or - ||
// ! TYPES

// 1) Get user : name , surname , address , year of birth (1970)
// 2) Print user data , but it must be in the next format :
// "Hello {name} , your surname is {surname} and you are {years old} ... Nice to meet you ;)"
// 3) Ask user to write what is mood she/he/it has today
// if ok => all right , it's great
// ... if fine =>  it's great
// ... if bad =>  you are so moody today
// ... if user answer not equal any of above => there is something incorrect , try once again
// 4) Ask : How much money do you have ?
//  if more than 300 => output => i take a bit
//  if more than 500 => output => i take some
//  if more than 1000 => output => i take a half of it
//  if more than Not A Number => output => Something incorrect try again later.

let firstName, surname, address, yearOfBirth;

firstName = prompt("Enter your name");
surname = prompt("Enter your surname");
address = prompt("Enter your address");
yearOfBirth = prompt("Enter your yearOfBirth");

alert(`
Hello ${firstName} , your surname is ${surname} and you are ${
  2023 - yearOfBirth
} ... Nice to meet you ;)
`);

let mood;

mood = prompt("How are you doing ?");

if (mood === "ok") {
  alert(" all right , it's great");
} else if (mood === "fine") {
  alert("it's great");
} else if (mood === "bed") {
  alert("you are so moody today");
} else {
  alert("Something went wrond. Incorrect data. Try again later !");
}

let salary;

salary = +prompt("What is your monthly income ?");

if (salary < 300) {
  alert("Go and work!");
} else if (salary >= 300 && salary < 500 && !isNaN(salary)) {
  alert("It's all right nowadays !");
} else if (salary >= 500 && salary < 1000 && !isNaN(salary)) {
  alert("It's quite a lot for today");
} else if (salary >= 1000 && !isNaN(salary)) {
  alert("Wow! It's amazing ! Awesome!");
} else {
  alert("Something went wrong !");
}
