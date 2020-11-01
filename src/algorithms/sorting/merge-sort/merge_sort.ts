function mergeSort(array: number[]) {
  if (array.length === 1) {
    return array;
  }

  // Split Array in into right and left
  let left = array.slice(0, Math.floor(array.length / 2));
  let right = array.slice(Math.floor(array.length / 2));

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const answer = mergeSort(nums);
console.log(answer);

export {};
