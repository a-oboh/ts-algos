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

//Solution 2: more efficient (using sum complements)

function twoSum2(nums: number[], target: number): number[] {
  type tnumsObj = {
    [key: number]: number;
  };

  let newArr: number[] = [];

  let numsObj: tnumsObj = {};

  for (let i = 0; i < nums.length; i++) {
    const item: number = nums[i];

    numsObj[target - item] = i;

    if (numsObj[item]) {
      newArr = [numsObj[item], numsObj[target - item]];
    }
  }

  return newArr;
}

function sumSub(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    const item1 = arr[i];
    let sum: number = 0;
    console.log(item1);
    for (let j = 0; j < i + num - 1; j++) {
      // sum += arr[i] + arr[j];
      console.log(arr[j]);
    }
    // console.log(sum);
  }
}

sumSub([2, 6, 9, 2, 1, 8], 3);

// let sumArr = twoSum([3, 2, 4], 6);
// console.log(sumArr);

// let sumArr2 = twoSum([2, 7, 11, 15], 9);
// console.log(sumArr2);

export {};
