{
  // -------------Union and Intersection types--------- //

  // Union type
  /* 
    type FrontedDeveloper = "fakibazDeveloper" | "juniorDeveloper";
    type FullStackDeveloper = "FrontedDeveloper" | "FullStackDeveloper";
    type Developer = FrontedDeveloper | FullStackDeveloper;
    const newDeveloper: FrontedDeveloper = "fakibazDeveloper";

    type User = {
      name: string;
      email?: string;
      gender: "male" | "female";
      blood: "O+" | "O-" | "A+" | "A-";
    };
    const user1: User = {
      name: "rahat",
      gender: "male",
      blood: "O+",
    };
  */

  // Intersection types

  type FrontedDeveloper = {
    skills: string[];
    designation1: "FrontedDeveloper";
  };

  type BackedDeveloper = {
    skills: string[];
    designation2: "BackedDeveloper";
  };

  type FullStackDeveloper = FrontedDeveloper & BackedDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["html", "css", "Express"],
    designation1: "FrontedDeveloper",
    designation2: "BackedDeveloper",
  };
}
