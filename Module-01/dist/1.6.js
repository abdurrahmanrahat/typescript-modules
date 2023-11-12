"use strict";
// ---------learning function----------- //
// normal function and arrow function
// normal function
function addNumber(num1, num2) {
    return num1 + num2;
}
addNumber(3, 5);
// arrow function
const add = (num1, num2) => num1 + num2;
add(6, 5);
// object --> function ==>> method
const poorUser = {
    name: "rahat",
    balance: 100,
    addBalance(balance) {
        return this.balance + balance;
    },
};
// callback function with array
const arr = [3, 4, 6, 7];
const newArr = arr.map((ele) => ele * ele);
