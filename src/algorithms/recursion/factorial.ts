function findFactorialRecursive(number: number) {
  if (number == 2) {
    return 2;
  }

  return number * findFactorialRecursive(--number);
}

function findFactorialIterative(number: number) {
  let factorial: number = 1;

  for (let i = number; i > 0; i--) {
    factorial *= i;
  }

  console.log(factorial);

  return factorial;
}

findFactorialIterative(15);
const recursive = findFactorialRecursive(15);

console.log(recursive);
