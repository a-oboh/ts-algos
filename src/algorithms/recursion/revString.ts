//Implement a function that reverses a string using iteration...and then recursion!
function recursiveStrReverse(str: string) {
  if (str === "") {
    return "";
  } else {
    return recursiveStrReverse(str.substr(1)) + str.charAt(0);
  }
}

console.log(recursiveStrReverse("yoyo mastery"));
