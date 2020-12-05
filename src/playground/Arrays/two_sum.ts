//Given an array of integers, return the indices of the two numbers
//that add up to a given target

//brute force
/*
 * Brute force solution is to add
 * all the numbers in the array for
 * a possible match.
 */

function findTwoSumBruteForce(nums: number[], t: number) {
  if (nums.length < 2 || nums == null || nums == undefined) {
    return [];
  }

  for (let i = 0; i < nums.length; i++) {
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === t) {
        console.log([i, y]);
        return [i, y];
      }
    }
  }

  return [];
}

//optimized

function twoSumOptimized(nums: number[], t: number) {
  if (nums.length < 2 || nums == null || nums == undefined) {
    return [];
  }

  let numsMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // numsMap[t - nums[i]] = i;

    // if (numsMap[nums[i]]) {
    //   console.log([i, numsMap[nums[i]]]);
    //   return [i, numsMap[nums[i]]];
    // }
    if (numsMap.has(nums[i])) {
      console.log([numsMap.get(nums[i]), i]);
      return [numsMap.get(nums[i]), i];
    }

    numsMap.set(t - nums[i], i);

    console.log(numsMap);
  }

  return [];
}

const nums = [3, 2, 4, 7];
const t = 10;

// findTwoSumBruteForce(nums, 11);
twoSumOptimized(nums, t);

export {};
