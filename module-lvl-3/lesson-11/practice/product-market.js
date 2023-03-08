// Product
// User
// Store
// Cart

// class User {
//   static sayHello() {
//     console.log("hello world!!!");
//   }

//   constructor(login, password, wallet) {
//     this.login = login;
//     this.password = password;
//     this.wallet = wallet;

//     if (this.wallet < 300) {
//       this.status = "Poor";
//     } else if (this.wallet > 300 && this.wallet < 1000) {
//       this.status = "Medium";
//     } else {
//       this.status = null;
//     }
//   }

//   buy(products) {
//     if (Array.isArray(products)) {
//       console.log(this.wallet);
//       for (const product of products) {
//         this.wallet -= product.price;
//       }

//       console.log(this.wallet);

//       return;
//     }

//     this.wallet = this.wallet - products.price;
//   }
// }

// class Cart {
//   totalPrice = 0;

//   constructor(products = []) {
//     this.products = products;
//   }
// }

// class Product {
//   constructor(label, description, price, image = "") {
//     this.label = label;
//     this.description = description;
//     this.image = image;
//     this.price = price;
//   }
// }

// class Food extends Product {
//   constructor(label, description, price, weigh, kkal, image = "") {
//     super(label, description, price, image);
//     this.weigh = weigh;
//     this.kkal = kkal;
//   }
// }

// class Liquid extends Product {
//   constructor(label, description, price, litre, materialOfBottle, image) {
//     super(label, description, price, image);
//     this.litre = litre;
//     this.materialOfBottle = materialOfBottle;
//   }
// }

// const cart = new Cart();

// const user = new User("k@i.ua", "2323", 800);

// const fastBreakfast = new Product("Rolton", "fast breakfast", 10);

// const meet = new Food("Beef", "Fresh meet", 200, 1000, 500);

// const pepsi = new Liquid("Pepsi", "Fresh drink", 50, 2, "plastic");
// const cola = new Liquid("Cola", "Fresh drink", 40, 2, "plastic");

// user.buy([pepsi, cola, pepsi, cola, cola]);
