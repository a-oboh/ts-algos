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

// Challenge: Given an array of unordered numbers and a sum,
//   is there a pair of numbers which add up to the sum?
//   If so, return the index of each number in the pair.

function twoSum(nums: number[], target: number): number[] {
  let newArr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let tempSum = nums[i] + nums[j];

      if (i == j) {
        continue;
      }

      // console.log(tempSum);
      // console.log(j);

      if (tempSum == target) {
        newArr.push(i);
        newArr.push(j);
        return newArr;
      }
    }
  }

  return newArr;
}

let r = twoSum([3, 2, 4], 6);
console.log(r);
