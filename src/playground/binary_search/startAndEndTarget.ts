//question link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

import { binarySearch } from "../../algorithms/searching/binary-search/binary_search";
import { quickSort } from "../../algorithms/sorting/quick-sort/quick_sort";

function searchRange(nums: number[], target: number): number[] {
  if (nums.length < 1) {
    return [-1, -1];
  }

  const targetIdx = binarySearch(nums, 0, nums.length - 1, target);

  if (targetIdx > -1) {
    let end = targetIdx;
    if (targetIdx < nums.length) {
      let j = targetIdx + 1;
      if (nums[j] === target) {
        while (nums[j] === target) {
          end = j;
          j++;
        }

        return [targetIdx, end];
      }
    } else return [targetIdx, end];
  }

  return [targetIdx, targetIdx];
}

const nums = [5,7,7,8,8,10];

console.log(searchRange(nums, 8));
