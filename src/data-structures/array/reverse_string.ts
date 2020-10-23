// Create a function that reverses a string:
// 'Hi i'm Albert' should return:
// 'treblA m'i iH'

//brute force method: albert
function reverse1(str: string) {
  //check input
  if (!str || str.length < 2) {
    return "please check input";
  }

  const strObj = {};

  let newStr: string = "";

  for (let i = 0; i < str.length; i++) {
    const item = str[i];

    strObj[i] = item;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    const item = strObj[i];

    newStr = newStr + item;
  }

  return newStr;
}

//cleaner method: andrei
function reverse2(str: string) {
  //check input
  if (!str || str.length < 2) {
    return "please check input";
  }

  const backwards = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  //return backwards.toString
  return backwards.join("");
}

const reversed1 = reverse1("Hi from reversed 1");

const reversed2 = reverse1("Hi from reversed 2");

console.log(reversed1);
console.log(reversed2);
