{
  // Mapped types

  const arrOfNumbers: number[] = [1, 4, 6];

  //   const arrOfStrings: string[] = ["1", "4", "6"]; // we want to make it by mapped of numbers array and return the value as string.

  const arrOfStrings: string[] = arrOfNumbers.map((num) => num.toString());
  //   console.log(arrOfNumbers);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // look up type

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
