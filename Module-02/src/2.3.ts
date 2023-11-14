{
  // Introduction to generics

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 5, 2, 6, 4];
  //   const rollNumbers: Array<number> = [3, 5, 2, 6, 4];
  const rollNumbers: GenericArray<number> = [3, 5, 2, 6, 4];

  //   const mentors: string[] = ["hi", "hello", "boo"];
  //   const mentors: Array<string> = ["hi", "hello", "boo"];
  const mentors: GenericArray<string> = ["hi", "hello", "boo"];

  //   const booleanArr: boolean[] = [true, false, true];
  //   const booleanArr: Array<boolean> = [true, false, true];
  const booleanArr: GenericArray<boolean> = [true, false, true];

  // genericArray with object.
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "rahat",
      age: 21,
    },
    {
      name: "mahbub",
      age: 26,
    },
  ];

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["x", "y"];

  const userWithId: GenericTuple<number, { email: string }> = [
    189,
    { email: "abc@gmail.com" },
  ];

  //
}
