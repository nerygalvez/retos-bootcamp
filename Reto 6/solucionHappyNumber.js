function esFeliz(n) {
  let set = new Set();

  if (n < 1) return false;

  while (!set.has(n)) {
    set.add(n);

    let s = n.toString();

    n = 0;

    for (let i = 0; i < s.length; i++) {
      n += Math.pow(s[i], 2);
    }

    if (n === 1) return true;
  }

  return false;
}

console.log(esFeliz(19));
console.log(esFeliz(2));
console.log(esFeliz(58));

console.log(esFeliz(3));
