{
  // Constraints in typescript
  // কোনো কিছু enforce করা কে constraints বুঝায়।

  // extends it that must have id, name, and email.
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 22,
    name: "linthia",
    email: "linthia@gmail.com",
    devType: "Next Level Web Developer",
  });

  const student2 = addCourseToStudent({
    id: 33,
    name: "Sinthia",
    email: "sinthia@gmail.com",
    watch: "smart",
  });

  //   const student3 = addCourseToStudent({
  //     emni: "emni",
  //   });

  //
}
