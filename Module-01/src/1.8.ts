// destructuring

// in object
const user = {
  id: 189,
  name: {
    firstName: "Abdur",
    middleName: "rahman",
    lastName: "rahat",
  },
  contactNo: "01820897892",
  address: "mirpur",
};

const {
  contactNo,
  name: { middleName: midName }, // name alias
} = user;

// in array

const myFriends = ["rahat", "mahbub", "yasin", "tuhin", "monika", "sifat"];
const [a, , bestFrind, ...rest] = myFriends;
