// Reference type -->> object

const user: {
  firstName: string;
  middleName?: string; // optinal type
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "abdur",
  lastName: "rahat",
  isMarried: false,
};

const userTwo: {
  type: "human"; // type --> literal type
  name: string;
  age: number;
} = {
  type: "human",
  name: "rahat",
  age: 12,
};

// userTwo.type = "not possible to change anything without human"

const userThree: {
  readonly college: string;
  name: string;
  age: number;
} = {
  college: "Dhaka College",
  name: "rahat",
  age: 12,
};

// userThree.college = "dv" // not possible as it is readonly
