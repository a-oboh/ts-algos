function deleteProducts(ids: number[], m: number) {
  let count = 0;
  let unique = 0;
  // let values = {};

  const values = new Map<number, number>();

  ids.sort().forEach((item) => {
    if (values[item]) {
      values.set(item, item + 1);
      // values[item] = values[item] + 1;
      unique++;
    } else {
      // values[item] = 1;
      values.set(item, 1);
    }
  });

  for (let i = 0; i < ids.length; i++) {
    const item = ids[i];

    // if (values[item] <= m) {
    //   values[item] = values[item] - 1;
    //   if (values[item] <= 0) {
    //     count++;
    //   }
    // }
  }

  console.log(values.size);
}

const ids = [1, 1, 1, 2, 3, 2, 4];
// const ids = [1, 2, 3, 1, 2, 2, 1];
const m = 3;

deleteProducts(ids, m);

export {};
