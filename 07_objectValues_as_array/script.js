const obj = {
  name: "Joe Biden",
  age: 60,
  country: "USA",
  pin: "91EB789",
};

function handleObj(object) {
  const array = [];

  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}

const arr = handleObj(obj);
console.log(arr);
