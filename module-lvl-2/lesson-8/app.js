const app = document.querySelector("#app");

// function tagFactory(name, tag, greeting, id) {
//   app.insertAdjacentHTML(
//     "afterbegin",
//     `<${tag} id=${id}>${greeting} ${name}</${tag}>`
//   );

//   return document.querySelector(`#${id}`);
// }

// const newTag = tagFactory("Mike", "h1", "Hello from ", "greeting");

// // ! style
// newTag.addEventListener("click", function (e) {
//   e.target.style.background = "darkmagenta";
// });

// console.log(newTag);

// 1. Number , 2. String , 3. Bool , 4. Null , 5. Undefined - data types

// Arrays , Object -> data structure

// const products = [
//   {
//     id: createID(),
//     label: "Samsung",
//     image: "https://m.media-amazon.com/images/I/91W42b8YW+L._SX679_.jpg",
//     price: 2323 + "$",
//     description: `
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem
//     perferendis id, maiores reprehenderit ea iste inventore facilis? Sint vitae
//     maiores at voluptatem!
//     `,
//   },
//   {
//     id: createID(),
//     label: "LG",
//     image: "https://m.media-amazon.com/images/I/41sJEnpfOUL.jpg",
//     price: 1313 + "$",
//     description: `
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem
//     perferendis id, maiores reprehenderit ea iste inventore facilis? Sint vitae
//     maiores at voluptatem!
//     `,
//   },
// ];

// function createProduct(label, image, price, description, id = createID()) {
//   return {
//     label: label,
//     image: image,
//     price: price,
//     description: description,
//     id: id,
//   };
// }

// function createID() {
//   return "id:" + Math.random().toString().slice(3, 8);
// }

// https://m.media-amazon.com/images/I/31Uq-TT9-xL.jpg

// const sony = createProduct(
//   "Sony",
//   "https://m.media-amazon.com/images/I/31Uq-TT9-xL.jpg",
//   2293 + "$",
//   `
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem
//   perferendis id, maiores reprehenderit ea iste inventore facilis? Sint vitae
//   maiores at voluptatem!
//   `
// );

// const label = prompt("What is the product name here : ");
// const price = prompt("What is the price of the product : ");
// const image = prompt("Put above url of image that you wanna insert here : ");
// const description = prompt(
//   "Eneter some text that will discribe your product : "
// );

// const userProduct = createProduct(label, image, price, description);

// products.push(userProduct);
// products.push(sony);

// for (const product of products) {
//   app.insertAdjacentHTML(
//     "afterbegin",
//     `
//         <h2>${product.label}</h2>
//         <img src="${product.image}" />

//         <p>${product.description.slice(0, 50)}</p>

//         <div>
//             <span>Price : </span>
//             <span>${product.price}</span>
//         </div>

//         <button> Buy! </button>
//     `
//   );
// }

// ************************************MARKET*********************************

// 1) Login
// 2) Register
// login , password

// 3) Show products
// products

// 4) Profile
// if admin => add product , edit product , delete product
// if user => log , pass

// 5) Exit

// const products = [
//   {
//     id: createID(),
//     label: "Samsung",
//     image: "https://m.media-amazon.com/images/I/91W42b8YW+L._SX679_.jpg",
//     price: 2323 + "$",
//     description: `
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem
//     perferendis id, maiores reprehenderit ea iste inventore facilis? Sint vitae
//     maiores at voluptatem!
//     `,
//   },
//   {
//     id: createID(),
//     label: "LG",
//     image: "https://m.media-amazon.com/images/I/41sJEnpfOUL.jpg",
//     price: 1313 + "$",
//     description: `
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem
//     perferendis id, maiores reprehenderit ea iste inventore facilis? Sint vitae
//     maiores at voluptatem!
//     `,
//   },
// ];

// let isRunning = true;

// let userID = false;

// const users = [
//   {
//     id: createID(),
//     login: "kir",
//     password: "2323",
//     isAdmin: true,
//   },
//   {
//     id: createID(),
//     login: "admin",
//     password: "0000",
//     isAdmin: true,
//   },
// ];

// while (isRunning) {
//   const userChoose = prompt(`
//         1) Login
//         2) Register
//         3) Show products
//         4) Profile
//         5) Exit
//     `);

//   switch (userChoose) {
//     case "1":
//       const login = prompt("Enter your login : ");
//       const password = prompt("Enter your password : ");

//       userID = getUserID(login, password, users);

//       break;

//     case "2":
//       const newAccountLogin = prompt("Enter your login : ");
//       const newAccoutPassword = prompt("Enter your password : ");

//       userID = register(newAccountLogin, newAccoutPassword, users);

//       break;

//     case "3":
//       showProducts(products);
//       break;

//     case "4":
//       if (!userID) {
//         console.error("You should to create an account before authorization");
//       }

//       console.log(userID);

//       break;

//     case "5":
//       isRunning = false;
//       break;

//     default:
//       break;
//   }
// }

// function getUserID(log, pass, arr) {
//   let isLoggedIn = false;

//   for (const item of arr) {
//     if (item.login === log && item.password === pass) {
//       isLoggedIn = true;
//       return item;
//     }
//   }

//   if (!isLoggedIn) {
//     console.error("You should to create an account before authorization");

//     return null;
//   }
// }

// function register(log, pass, arr) {
//   const newUser = {
//     id: createID(),
//     login: log,
//     password: pass,
//     isAdmin: false,
//   };
//   arr.push(newUser);

//   return newUser;
// }

// function showProducts(arr) {
//   console.table(arr);
// }

// function createID() {
//   return "id:" + Math.random().toString().slice(3, 8);
// }

// homework

// 1) Write function getUserByID
// 2) Function should get userID and then find its into users
// 3) Function must return user

// USE : FOR
