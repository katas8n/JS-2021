// main file
// class User {
//   ID_BY_DEFAULT = Math.random().toString().slice(2, 8);
//   #WALLET_BY_DEFAULT = 0;
//   #nickname;

//   constructor(options) {
//     const { email, nickname, password, id, wallet } = options;

//     if (!password || !email)
//       throw Error("You have to fill the fildes by email and password");

//     this.#nicknameInside = nickname;
//     this.email = email;
//     this.password = password;
//     this.id = id ? id : this.ID_BY_DEFAULT;
//     this.wallet = wallet ? wallet : this.WALLET_BY_DEFAULT;

//     console.log("[#nicknameInside]", this.#getNicknameInside);
//   }

//   set #nicknameInside(nickname) {
//     this.#nickname = nickname;
//   }

//   get #getNicknameInside() {
//     return this.#nickname;
//   }
// }

// const user = new User({
//   nickname: "John",
//   email: "k@i.ua",
//   password: "25kwi!",
// });

// console.log(user.nickname);

// const userEmail = user.getData;
// console.log("[userEmail]", userEmail);

// Encapsulation
// class Admin {
//   // hide
//   #isAdmin = true;

//   constructor() {
//     console.log("[ADMIN]");
//     this.#setRule(false);
//     console.log(this.#isAdmin);
//   }

//   #setRule(pointer) {
//     return (this.#isAdmin = pointer);
//   }

//   get rute() {
//     return this.#isAdmin;
//   }
// }

// // extend
// class SubAdmin extends Admin {
//   constructor() {
//     console.log("[SUPERADMIN!]");
//     super();
//     // this.#setRule("Hello world");
//     // this.#rule = false;
//   }
// }

// const admin = new Admin();
// const adminRule = admin.rute;
// const subAdmin = new SubAdmin();
// console.log("[subAdmin]", subAdmin);

// admin.isAdmin =

// console.log(admin.#isAdmin);
