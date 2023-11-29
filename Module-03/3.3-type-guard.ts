{
  // Type guard using typeof & in
  // checked for authentic property value, then return

  type Alpaneumeric = string | number;

  const add = (param1: Alpaneumeric, param2: Alpaneumeric): Alpaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  const result2 = add("4", 5);

  // in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      // use type guard to check Admin or Normal user

      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "normal user",
  };

  const adminUser: AdminUser = {
    name: "admin user",
    role: "admin",
  };

  getUser(adminUser);

  // ------------------- Understand type guard with type of and in
}
