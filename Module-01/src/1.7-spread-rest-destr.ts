{
  //---- spread operator, rest operator and destructuring--- //

  //   spread operator
  const bros1: string[] = ["rahat", "yasin", "mahbub"];
  const bros2: string[] = ["tonmoy", "najim", "monju"];
  bros1.push(...bros2);

  //
  const mentors1 = {
    ts: "mezba",
    redux: "mir",
    dbms: "mijan",
  };

  const mentors2 = {
    prisma: "feroz",
    next: "tonmoy",
    cloud: "nahid",
  };

  const mentorsList = { ...mentors1, ...mentors2 };

  // rest operator
  const greetFnds = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi! ${friend}`));
  };
  greetFnds("rahat", "rahman", "mahbub", "abul", "kabul");
}
