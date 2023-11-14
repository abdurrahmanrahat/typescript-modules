{
  // generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle; // Keyof Vehicle মানি Vehicle এর কী গুলো নিয়ে একটা onion type declare করবে।

  const person1: Owner = "car";
  const person2: Owner2 = "ship";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "rahat",
    age: 21,
    address: "Lks",
  };

  const car = {
    model: "fsad",
    year: 22,
  };

  const result1 = getPropertyValue(car, "model");

  //
}
