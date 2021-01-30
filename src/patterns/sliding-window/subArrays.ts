function subArrays(arr: number[], k: number) {
  let p1 = 0;
  let p2 = 1;

  let sub = [];

  while (p2 < arr.length) {
    if (sub.length == 0) {
      sub.push(arr[p1]);
    }

    if (sub.length < k) {
      sub.push(arr[p2]);
    }

    if (sub.length == k) {
      console.log(sub);

      p1++;
      // p2++;
      sub = [];

      continue;
    }

    p2++;
  }
}

subArrays([1, 2, 3, 4, 5], 3);
