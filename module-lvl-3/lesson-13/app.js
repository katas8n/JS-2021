import Company from "./Company";
import { Customer, Admin } from "./Customer";
import { afterAfair } from "./afterAfair";

const orderCost = 35;

const magicSoft = new Company({
  corporationsName: "Magic Soft (c)",
  corporationsMoney: 20000000,
});

const john = new Customer({
  name: "John",
  money: 230,
});

john.currentBalance = afterAfair(john.customerMoney, orderCost);

const companyBalance = orderCost + magicSoft.currentCorporationsMoney;

magicSoft.currentBalance = companyBalance;

console.log(john);
console.log(magicSoft);
