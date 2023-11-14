{
  // Interface, type vs interface

  type User1 = {
    name: string;
    college: string;
  };

  type UserWithRoll1 = User1 & { roll: string };

  const user1: UserWithRoll1 = {
    name: "rahat",
    college: "dc",
    roll: "manager",
  };

  // interface type declaration.

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const user2: UserWithRoll2 = {
    name: "rahman",
    age: 21,
    role: "manager",
  };

  // Interface যেহেতু object নিয়ে কাজ করে, আর Java Script এ array আর ফাংশন ও object, তাই interface ওদের ক্ষেত্রে ও কাজ করে।

  // array with interface
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [2, 3, 56, 23, 2];

  // function with interface
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
