//Primitive types
let lastName = "Gupta";
let oldLastName = lastName;
lastName = "Mishra";
console.log(lastName, oldLastName);

// Reference types
const Xyz = {
  firstName: "xyz",
  lastName: "Gupta",
  age: 20,
};

// const marriedXyz = Xyz;
// marriedXyz.lastName = "Mishra";
// console.log("before marriage", Xyz);
// console.log("After marriage", marriedXyz);

//copying objects
const Xyz2 = {
  firstName: "xyz",
  lastName: "Gupta",
  age: 20,
  family: ["a", "b"], // deeply nested
};

//shallow copy copies only properties in first level
const xyzCopy = Object.assign({}, Xyz2);
xyzCopy.lastName = "Mishra";
console.log("before marriage", Xyz2);
console.log("After marriage", xyzCopy);

xyzCopy.family.push("c");
xyzCopy.family.push("d");
console.log("before marriage", Xyz2);
console.log("After marriage", xyzCopy);
