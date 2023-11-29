{
  // Utility types

  // pick - কোনো একটা existing type থেকে type টা তুলে আনে।

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">; // for dable type

  // Omit - বাদ দেওয়া।

  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  //   Partial- মানি সব গুলোকে optional করে ফেলবে।
  type PersonPartial = Partial<Person>;

  // readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "rahat",
    age: 12,
    contactNo: +88018209333,
  };
  //   person1.name = "Rahman"; // not possible

  // Record -> generic of object
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  // example of record
  const EmptyObj: Record<string, unknown> = {}; // object property name must stay strign, but value is unknown.

  //
}
