// Challenge: Given an array of unordered numbers and a sum,
//   is there a pair of numbers which add up to the sum?

//Naive solution (brute force)
function sumPair1(arr: number[], sum: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let tempSum = arr[i] + arr[j];
      if (i == j) {
        continue;
      }
      if (tempSum == sum) {
        console.log(arr[i]);
        console.log(arr[j]);
        return true;
      }
    }
  }

  return false;
}

// let naive = sumPair1([1, 2, 4, 4], 5);
// console.log(naive);

// Efficient Solution
function hasPairWithSum(arr: number[], sum: number) {
  const mySet = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }

  return false;
}
