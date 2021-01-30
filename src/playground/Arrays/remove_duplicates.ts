//question link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }

  let len = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    nums.splice(i, count);

    len = nums.length;

    count = 0;
  }

  console.log(nums, len);
  return len;
}

function removeDuplicatesOptimized(nums: number[]): number {
  let len = nums.length;

  let numsMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const count = numsMap.get(nums[i]) || 0;

    if (numsMap.has(nums[i])) {
      nums.splice(i, count);
      len = nums.length;
      i--;
    } else {
      numsMap.set(nums[i], count + 1);
    }
  }

  return len;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let nums = [1, 1];

// removeDuplicates(nums);
removeDuplicatesOptimized(nums);
