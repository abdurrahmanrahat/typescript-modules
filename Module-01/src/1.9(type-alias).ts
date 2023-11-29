{
  // Type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    constactNo?: string;
    adress: string;
  };

  const student1: Student = {
    name: "rahat",
    age: 32,
    gender: "male",
    constactNo: "01983",
    adress: "raypur",
  };

  const student2: Student = {
    name: "mir",
    age: 21,
    gender: "male",
    adress: "khulna",
  };

  // type alias in string

  type UserName = string;

  const userName: UserName = "Rahat";

  // type alias in function
  type Add = (a: number, b: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
