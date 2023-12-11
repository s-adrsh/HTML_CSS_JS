const arr = [1, 2, 3, 4, 5];
const steps = 2;

function rotateArray(array, steps) {

  for (let i = 0; i < steps; i++) {
    array.unshift(array.pop());
  }

  return array;
}

const rotated = rotateArray(arr, steps);
console.log(rotated);
