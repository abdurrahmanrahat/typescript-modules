{
  // ----- Problem 01
  /*
  Develop a TypeScript function to retrieve specific details from an array of objects. Your task is to extract 'id' and 'name' properties, unveiling their concealed values.

  After crafting the function, apply it to an array of diverse objects. Showcase the extracted 'id' and 'name' details, revealing the secrets kept within these mysterious objects.
  */

  type User = {
    id: number;
    name: string;
  };

  const users: Array<User> = [
    {
      id: 189,
      name: "rahat",
    },
    {
      id: 190,
      name: "rahman",
    },
    {
      id: 191,
      name: "abdur",
    },
  ];

  // use generic for dynamic data
  function getPropertyFromArray<T, K extends keyof T>(
    array: T[],
    key: K
  ): T[K][] {
    // string[]
    return array.map((obj) => obj[key]);
  }

  const nameArray = getPropertyFromArray(users, "name");
  console.log("nameArray", nameArray);

  // tsnd fileName
}
