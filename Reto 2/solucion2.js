var threeSum = function (a) {
  const nums = a.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < nums.length - 2; i++) {
    const n1 = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    if (n1 != nums[i - 1]) {
      while (left < right) {
        const n2 = nums[left];
        const n3 = nums[right];
        const sum = n1 + n2 + n3;

        if (sum === 0) {
          triplets.push([n1, n2, n3]);

          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};

//Probando la función
console.table(threeSum([-1, 0, 1, 2, -1, -4])); //Output: [[-1,-1,2],[-1,0,1]]
console.table(threeSum([])); //Output: []
console.table(threeSum([0])); //Output: []
console.table(threeSum([0, 0, 0])); //Output: [] en la prueba de Fernando y a mí me imprime [[0, 0, 0]]
console.table(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0])); //Output: [[-5, 1, 4],[-4, 0, 4],[-4, 1, 3],[ -2, -2, 4 ],[-2, 1, 1],[0, 0, 0]]
