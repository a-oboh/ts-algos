//brute force - O(n^2)
function solution(arr: number[], x: number) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == x) return true;
    }
  }

  return false;
}

// console.log(solution([1, 2, 3, 4, 5], 20));

function solution2(arr: number[], x: number) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === x) {
      console.log(arr[i], arr[j])
      return true;
    } else if (arr[i] + arr[j] < x) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

console.log(solution2([1, 2, 3, 4, 5, 6], 9));
