var mapValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = mapValues[s[i]];
    const next = mapValues[s[i + 1]];

    if (curr < next) {
      value -= curr;
    } else {
      value += curr;
    }
  }

  return value;
};
