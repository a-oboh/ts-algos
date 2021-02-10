// good for sorted values
function binarySearch(arr: any[], left: number, right: number, k: any) {
  // let left = 0;
  // let right = arr.length - 1;

  const mid = Math.round((right + left) / 2);

  if (left <= right) {
    if (arr[mid] < k) {
      return binarySearch(arr, mid + 1, right, k);
    } else if (arr[mid] > k) {
      return binarySearch(arr, left, mid - 1, k);
    } else if (arr[mid] === k) {
      return mid;
    }
  }

  return -1;
}

// const nums = [1, 2, 3, 4, 6, 7, 8];

// console.log(binarySearch(nums, 0, nums.length - 1, 5));

export { binarySearch };
