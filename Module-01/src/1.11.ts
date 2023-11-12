{
  // Ternary, optional chaining & nullish coalescing operator

  const age: number = 21;
  if (age >= 18) {
    console.log("Adult age");
  } else {
    console.log("Not adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not adult";

  // nullish coalescing operator
  // null / undefined -->> decision making

  const isAuthenticated = undefined;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  type User = {
    name: string;
    adress: {
      city: string;
      road: string;
      presentAdress: string;
      permanentAdress?: string;
    };
  };

  const user: User = {
    name: "Raht",
    adress: {
      city: "Dhaka",
      road: "102",
      presentAdress: "Lakshmipur",
    },
  };

  const permanentAdress =
    user?.adress?.permanentAdress ?? "No Permanent Adress";

  //
}
