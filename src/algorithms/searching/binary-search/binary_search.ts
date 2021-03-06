// good for sorted values
function binarySearchRecursive(
  arr: any[],
  left: number,
  right: number,
  k: any
) {
  // let left = 0;
  // let right = arr.length - 1;

  const mid = Math.floor((right + left) / 2);

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

function binarySearch(arr: any[], left: number, right: number, k: any) {
  // let left = 0;
  // let right = arr.length - 1;

  const mid = Math.floor((right + left) / 2);

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

//from ZTM
const binarySearch2 = (nums, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = nums[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const nums = [5, 7, 7, 8, 8, 10];

console.log(binarySearch2(nums, 0, nums.length - 1, 8));

export { binarySearch };
