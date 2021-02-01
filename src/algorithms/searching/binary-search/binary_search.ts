// good for sorted values
function binarySearch(arr: any[], left: number, right: number, k: any) {
  let mid = (right + left) / 2;
  mid = Math.round(mid);

  if (arr[mid] < k) {
    return binarySearch(arr, mid + 1, right, k);
  } else if (arr[mid] > k) {
    return binarySearch(arr, left, mid - 1, k);
  } else {
    return mid;
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(nums, 0, nums.length - 1, 7));

export { binarySearch };
