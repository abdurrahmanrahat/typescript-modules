{
  // OOP - Class

  class Animal {
    // name: string;
    species: string;
    sound: string;

    // parameter properties mens says public before initial and it makes declare up and initialize inside function
    constructor(public name: string, species: string, sound: string) {
      //   this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("bulldog", "dog", "ge ge");
  const cat = new Animal("cat name", "cat", "muw muw");

  //
}
