let factorial: number = 1;

function findFactorialRecursive(number: number) {
  if (number < 1) {
    return factorial;
  }

  factorial *= number;
  number--;

  return findFactorialRecursive(number);
}

function findFactorialIterative(number: number) {
  let factorial: number = 1;

  for (let i = number; i > 0; i--) {
    factorial = i * factorial;
  }

  console.log(factorial);

  return factorial;
}

findFactorialIterative(5);
const recursive = findFactorialRecursive(5);

console.log(recursive);
