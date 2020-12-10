// question link: https://leetcode.com/problems/trapping-rain-water/

// Given n non - negative integers representing an elevation map where
// the width of each bar is 1, compute how much water it can trap after raining.

//Example:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: In this case, 6 units of rain water (blue section) are being trapped.

function trap(height: number[]): number {
  let total = 0;
  let maxRight = 0;
  let maxLeft = 0;

  for (let i = 0; i < height.length; i++) {
    if (i > 0) {
      for (let x = i - 1; x >= 0; x--) {
        // console.log(height[x]);
        maxLeft = Math.max(maxLeft, height[x]);
      }
    }

    for (let y = i + 1; y < height.length; y++) {
      maxRight = Math.max(maxRight, height[y]);
    }

    let currentWater = Math.min(maxLeft, maxRight) - height[i];

    if (currentWater > 0) {
      total = total + currentWater;
    }

    maxLeft = 0;
    maxRight = 0;
  }

  console.log(total);
  return total;
}

function trapOptimized(height: number[]) {
  let maxLeft = 0,
    maxRight = 0,
    left = 0,
    right = height.length - 1,
    total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      maxLeft = Math.max(maxLeft, height[left]);
      total = total + (maxLeft - height[left]);
      left++;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      total = total + (maxRight - height[right]);
      right--;
    }
  }

  console.log(total);
  return total;
}

let h = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// let h = [4, 2, 0, 3, 2, 5];

// trap(h);
trapOptimized(h);
