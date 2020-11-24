function maxSumOfK(arr: number[], k: number) {
  let a = k - 1;
  let max = 0;

  //Brute Force approach
  for (let i = 0; i < arr.length - (k - 1); i++) {
    const subArr = arr.slice(i, a + 1);

    // const sum = subArr.reduce((x, y) => x + y);

    console.log(subArr);

    a += 1;
  }
}

const s = [100, 200, 300, 400, 500, 600];
const res = maxSumOfK(s, 3);

export {}