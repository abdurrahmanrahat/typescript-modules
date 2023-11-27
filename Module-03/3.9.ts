{
  // Abstraction in OOP - Real জিনিস টা জানবো না, তবে একটা আইডিয়া পাবো জিনিস টা কি হতে পারে।
  // 1) interface and 2) abstract

  // get idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implement
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am start engine");
    }
    stopEngine(): void {
      console.log("I am stop engine");
    }
    move(): void {
      console.log(" I am move");
    }

    test() {
      console.log("I am just test");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // abstract class || idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test() {
      console.log("I am just test");
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am start engine");
    }
    stopEngine(): void {
      console.log("I am stope engine");
    }
    move(): void {
      console.log("I am move");
    }
  }

  //   const hondacar = new Car2();
  //   hondacar.startEngine();

  //
}
