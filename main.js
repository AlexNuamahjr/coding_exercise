// expect function
function expect(val) {
  return {
    // tobe
    toBe: function (expected) {
      if (val === expected) {
        return {
          value: true,
        };
      } else {
        throw new Error("Value not equal");
      }
    },
    // not tobe
    notToBe: function (expected) {
      if (val !== expected) {
        return {
          value: true,
        };
      } else {
        throw new Error("Value equal");
      }
    },
  };
}

try {
  console.log(expect(5).toBe(5));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(expect(5).toBe(4));
} catch (error) {
  console.log(error.message);
}
