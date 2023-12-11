const arr = [1, -5, 5, -8, -1001, 3, 3, 2, 2];

function arrSum(array) {
  let total = 0;
  for (const n of array) {
    n > 0 && (total += n);
  }
  return total;
}

const sum = arrSum(arr);
console.log("The sum is " + sum);
