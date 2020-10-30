function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);

function getShortestUniqueSubstring(arr: string[], str: string) {
  // your code goes here
  const arrayStr = arr.toString;
  const arrObj = {};

  let window = 3;

  let count = 0;

  let temp = "";

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    arrObj[item] = 0;
  }

  for (let j = 0; j < str.length; j++) {
    const strItem = str[j];
    if (strItem in arrObj) {
      if (arrObj[strItem] == 1) {
        for (const key in arrObj) {
          const item = arrObj[key];

          if (item > 0) {
            arrObj[key] = 0;
          }
        }

        count = 1;
        temp = strItem;

        arrObj[strItem] = 1;

        continue;
      }

      count++;
      arrObj[strItem] = arrObj[strItem] + 1;

      temp = temp + strItem;

      console.log(temp);

      if (count == arr.length) {
        // console.log(arrObj);
        // console.log(temp);
        return temp;
      }
    } else {
      continue;
    }
  }

  //   console.log(temp);
}

getShortestUniqueSubstring(["x", "y", "z"], "xyyzyzyx");
