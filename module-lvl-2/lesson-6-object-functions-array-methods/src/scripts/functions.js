// Students

// myStat

// 1. Greeting
// 2. What is our user's goal ?
// 3.                           Options :
//                                        - Register
//                                        - Auth
//                                        - Users
//                                        - Get my statistic
//                                        - Get my profile
//                                        - Send my homework
//                                        - Exit

function run() {
  const group = [
    {
      firstName: "John",
      age: 92,
      skills: ["JS", "HTML", "CSS"],
      grade: 100,
      email: "k@i.ua",
      password: "2332923239",
    },
    {
      firstName: "Mike",
      age: 32,
      skills: ["JS", "HTML", "CSS"],
      grade: 80,
      email: "j@i.ua",
      password: "2332923239",
    },
    {
      firstName: "Bob",
      age: 13,
      skills: ["JS", "HTML", "CSS"],
      grade: 13,
      email: "l@i.ua",
      password: "2332923239",
    },
    {
      firstName: "Singleye Joe",
      age: 33,
      skills: ["JS", "HTML", "CSS"],
      grade: 50,
      email: "m@i.ua",
      password: "2332923239",
    },
  ];

  alert("Hello ;)");

  let isRunning = true;

  while (isRunning) {
    const userChoose = prompt(
      `
     Enter what the option do you wanna use today :
     \n1) Register
     \n2) Auth
     \n3) Get my statistic
     \n4) Get my profile
     \n5) Send my homework
     \n6) Exit
     \n7) USERS
    `
    );

    if (userChoose.length <= 0) return;

    switch (userChoose) {
      case "1":
        isRunning = exit();
        break;
      case "2":
        auth();
        isRunning = exit();
        break;
      case "3":
        isRunning = exit();
        break;
      case "4":
        isRunning = exit();
        break;
      case "5":
        isRunning = exit();
        break;
      case "6":
        isRunning = exit();
        break;
      case "7":
        printUsersToTheConsole();
        isRunning = exit();
        break;

      default:
        break;
    }
  }

  function auth() {
    const userEmail = prompt("Eneter your email");

    const trimedEmail = userEmail.trim();
    const isSnailIncludes = userEmail.includes("@");
    const minimalLength = userEmail.length < 3;
    const fullStopIncludes = userEmail.includes(".");

    const validEmail =
      !trimedEmail && !isSnailIncludes && minimalLength && !fullStopIncludes;

    if (validEmail) return console.error("[HUCK YOU]");

    const userPassword = prompt("Eneter your password");
    const userPasswordLength = userPassword.length < 5;

    if (userPasswordLength) return console.error("[HUCK YOU]");

    for (let i = 0; i < group.length; i++) {
      const student = group[i];

      const studentsEmail = student.email;
      const studentsPassword = student.password;

      const validAccountData =
        studentsEmail === trimedEmail && studentsPassword === userPassword;

      if (validAccountData) {
        alert(`
            NAME : ${student.firstName},
            AGE : ${student.age},
            SKILLS : ${student.skills},
        `);
      }
    }
  }

  function printUsersToTheConsole() {
    console.table(group);
  }

  function exit() {
    // ! - not
    return !confirm("Do you wanna use my hucking application ?");
  }
}

run();
