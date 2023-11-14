{
  // Type assertion / type narrowing

  let anything: any;

  anything = "some";

  //   (anything as string).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }

    if (typeof value === "number") {
      return value * 1000;
    }
  };

  // kgToGm function maybe return string | number | undefined, as we send a number so it will return a number definitely. So, we tell strictly that the return value is number.
  const result1 = kgToGm(1000) as number;

  const result2 = kgToGm("1000") as string; // it return a string type.

  // try ... catch ...

  type CustomError = {
    message: string;
  };

  try {
  } catch (err) {
    console.log((err as CustomError).message);
  }

  //
}
