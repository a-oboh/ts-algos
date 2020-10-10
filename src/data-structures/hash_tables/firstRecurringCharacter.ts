//Google Question
//Given an array of numbers, return the number that first recurring character (appears twice).

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(nums: number[]) {
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];

    if (!numsObj[item]) {
      numsObj[item] = 0;
    }

    numsObj[item] = numsObj[item] + 1;

    if (numsObj[item] > 1) {
      return item;
    }
  }
  console.log(numsObj);
  return undefined;
}

let val = firstRecurringCharacter([2, 5, 5, 2, 1]);
console.log(val);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
