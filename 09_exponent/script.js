const base = 2;
const exponent = 6;

function power(base) {
  let cache = {};

  const output = (exponent) => {
    let result;
    if (exponent in cache) {
      console.log("Result found in cache....");
      result = cache[exponent];
      return result;
    }

    exponent === 0 ? (result = 1) : (result = base * output(exponent - 1));

    cache[exponent] = result;
    return result;
  };

  return output;
}

const rslt = power(base);
console.log(rslt(exponent));
console.log(rslt(5));
console.log(rslt(exponent));

