//Question URL: https://leetcode.com/problems/kth-largest-element-in-an-array/

import { quickSort } from "../../algorithms/sorting/quick-sort/quick_sort";

function findKthLargest(nums: number[], k: number): number {
  const indexTofind = nums.length - k;

  quickSort(nums, 0, nums.length - 1);

  return nums[indexTofind];
}

console.log(findKthLargest([2,1], 1));
