const nums = [99, 44, 6, 2, 1, 5];

function selectionSort(array: number[]) {
  let smallest: number = array[0];
  let currIndex = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    smallest = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        currIndex = j;
      }
    }
    array[i] = smallest;
    array[currIndex] = element;
  }
}

selectionSort(nums);
console.log(nums);

export {};
