{
  // ----------> problem 03
  /*
  Develop a TypeScript function that effortlessly adds together any number of numerical values passed to it. This function should neatly calculate their sum, showcasing its ability to handle different quantities of numbers.

  Demonstrate the function by calculating the sum of various sets of numbers, highlighting its flexibility in processing variable inputs.
  */

  const addFunction = (...numbers: number[]): number => {
    // let sum = 0;
    // numbers.forEach((number) => {
    //   sum = sum + number;
    // });
    // return sum;
    const sum = numbers.reduce((ini, cur) => ini + cur, 0);
    return sum;
  };

  //   console.log(addFunction(3, 4));

  // Can you give an example of how to use "readonly" properties in TypeScript?
  class Student {
    readonly id: number;
    name: string;

    constructor(code: number, name: string) {
      this.id = code;
      this.name = name;
    }
  }

  let student1 = new Student(189, "Rahat");
  // student1.id = 55; // it is nor possible, as it is readonly property.
  student1.name = "Rahman"; // it is possible

  // union type example
  let something: string | number;
  something = "yes";
  something = 180;

  //
}
