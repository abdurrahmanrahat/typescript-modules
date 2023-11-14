{
  // Function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const re1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("bangladesh");

  type User = { id: number; name: string };
  const resGenObj = createArrayWithGeneric<User>({
    id: 222,
    name: "rahat",
  });

  // tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resTuple = createArrayWithTuple<string, number>("Bangladesh", 12);
  const resTupeObj = createArrayWithTuple<string, { name: string }>(
    "bangladesh",
    { name: "Heloo" }
  );

  // another example
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "linthia",
    email: "linthia@gmail.com",
    devType: "Next Level Web Developer",
  });

  const student2 = addCourseToStudent({
    name: "Sinthia",
    email: "sinthia@gmail.com",
    watch: "smart",
  });

  //
}
