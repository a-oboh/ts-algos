const nums = [99, 44, 6, 2, 1, 4, 5];

function insertionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    //if the current item is smaller than the first item, move the item to the first position with unshift
    if (element < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 0; j < array.length; j++) {
        if (element < array[j]) {
          array.splice(j, 0, element);
          array.splice(i + 1, 1);
          break;
        }
      }
    }
  }
}

insertionSort(nums);
console.log(nums);

export {};
