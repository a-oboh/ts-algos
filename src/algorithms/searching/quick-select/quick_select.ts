function quickSelect(array: any[], left, right, k: number) {
  let pivot: number;
  let partitionIndex: number;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    if (partitionIndex < k) {
      //search left
      return quickSelect(array, partitionIndex + 1, right, k);
    } else if (partitionIndex > k) {
      //search right
      return quickSelect(array, left, partitionIndex - 1, k);
    } else {
      return array[partitionIndex];
    }
  }
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
// quickSelect(nums, 0, nums.length - 1);
// console.log(nums);

const nums = [3, 2, 1, 5, 6, 4];
console.log(quickSelect(nums, 0, nums.length - 1, 2));

export { quickSelect };
