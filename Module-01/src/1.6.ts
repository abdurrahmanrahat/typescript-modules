// ---------learning function----------- //

// normal function and arrow function

// normal function
function addNumber(num1: number, num2: number): number {
  return num1 + num2;
}

addNumber(3, 5);

// arrow function
const add = (num1: number, num2: number): number => num1 + num2;
add(6, 5);

// object --> function ==>> method

const poorUser = {
  name: "rahat",
  balance: 100,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};


// callback function with array

const arr: number[] = [3, 4, 6, 7];
const newArr: number[] = arr.map((ele: number): number => ele * ele);
