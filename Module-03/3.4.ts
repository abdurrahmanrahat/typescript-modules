{
  // Type guard using instance of (OOP)

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBurg() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMaw() {
      console.log("I am mawing");
    }
  }

  // make instance
  const dog1 = new Dog("dog bhai", "dog");
  const cat1 = new Cat("cat bhai", "cat");

  // make smart way to use function
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBurg();
    } else if (isCat(animal)) {
      animal.makeMaw();
    } else {
      animal.makeSound();
    }
  };
  getAnimal(dog1);

  //
}
