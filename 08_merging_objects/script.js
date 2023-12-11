const obj1 = {
  name: "Alan ",
  age: 27,
  place: "Mumbai",
};

const obj2 = {
  name: "Tommy ",
  age: 40,
  gender: "Male",
  country: "India",
};

const merged = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(merged(obj1, obj2));
