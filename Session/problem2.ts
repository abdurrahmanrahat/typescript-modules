{
  // problem 02
  /*
  Your challenge is to create a TypeScript function that turns an array of key-value pairs into a neatly organized object. Weave a function that seamlessly merges the keys and values from the array, transforming them into a structured object.

  Once your function is crafted, apply it to an array filled with various key-value pairs. Witness the array's shift into a tidy and structured object, showcasing its newfound form.
  */

  const keyValueArray: [string, any][] = [
    ["id", 189],
    ["name", "Rahat"],
    ["isMarried", false],
  ];

  function arrayToObject<T extends string, U>(array: [T, U][]): Record<T, U> {
    const transformedObj = array.reduce((finalObj, [key, value]) => {
      finalObj[key] = value;
      return finalObj;
    }, {} as Record<T, U>);

    return transformedObj;
  }

  console.log(arrayToObject(keyValueArray));

  //
}
