"use strict";
// Reference type -->> object
const user = {
    firstName: "abdur",
    lastName: "rahat",
    isMarried: false,
};
const userTwo = {
    type: "human",
    name: "rahat",
    age: 12,
};
// userTwo.type = "not possible to change anything without human"
const userThree = {
    college: "Dhaka College",
    name: "rahat",
    age: 12,
};
// userThree.college = "dv" // not possible as it is readonly
