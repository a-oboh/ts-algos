// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n: number) {
  // 0(n)
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

// fibonacciIterative(6);

function fibonacciRecursive(n: number) {
  //O(2^n)
  if (n < 2) {
    return n;
  }

  const val = fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);

  return val;
}

let fibRecursive = fibonacciRecursive(6);
console.log(fibRecursive);
