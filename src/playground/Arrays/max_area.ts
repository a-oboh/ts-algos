// Given n non - negative integers a1, a2, ..., an,
// where each represents a point at coordinate(i, ai).
// n vertical lines are drawn such that the two endpoints
// of the line i is at(i, ai) and(i, 0).
// Find two lines, which, together with the x - axis forms a container,
// such that the container contains the most water.

// Notice that you may not slant the container.

// Example:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].
// In this case, the max area of water(blue section) the container can contain is 49.

//brute force!
/*
for the brute force solution, we'd make a nested for loop,
that compares the areas of all possible pairs.

formula: (minimum value of pair [length] X (distance between pairs [width])
i.e: min(a[i], a[j]) * j - 1
*/
function maxAreaBruteForce(height: number[]): number {
  let maxArea = 0;

  for (let i = 0; i < height.length - 1; i++) {
    // const item = height[i];
    for (let j = i + 1; j < height.length; j++) {
      const a: number = Math.min(height[i], height[j]) * (j - i);

      maxArea = Math.max(maxArea, a);
    }
  }

  console.log(maxArea);

  return maxArea;
}

//optimized solution
function maxAreaOptimized(h: number[]): number {
  let maxArea = 0;

  let a = 0;
  let b = h.length - 1;

  while (a < h.length) {
    let area = Math.min(h[a], h[b]) * (b - a);

    if (h[a] <= h[b]) {
      a++;
    } else {
      b--;
    }

    maxArea = Math.max(maxArea, area);
  }

  console.log(maxArea);

  return maxArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// maxAreaBruteForce(height);
maxAreaOptimized(height);
