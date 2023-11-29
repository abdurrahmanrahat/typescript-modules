{
  // Inheritance in OOP

  // class for common properties
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  // class for student
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Rahat Hossain", 21, "Mirpur");

  // student1.

  // make another class for teacher
  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    // another method
    takeClass(numOfClasses: number) {
      console.log(`${this.name} will take class ${numOfClasses}`);
    }
  }

  const teacher1 = new Teacher("Jankar Mahbub", 36, "Dhaka", "Professor");
  //   teacher1.

  //
}
