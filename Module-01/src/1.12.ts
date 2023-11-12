{
  // ----Never,unknown and nullable type---- //

  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching...");
    } else {
      console.log("Not");
    }
  };
  searchName(null);

  // unknown types
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
    } else {
      console.log("Wrong");
    }
  };

  getSpeedInMeterPerSecond(`1000 kmh^-1`);

  // never type
  function throwError(message: string): never {
    throw new Error(message);
  }
  throwError("Error found");

  //
}
