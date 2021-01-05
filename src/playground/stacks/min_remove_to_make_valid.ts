//Question URL (leetcode): https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

import StackWithArray from "../../data-structures/stack/stack";

function minRemoveToMakeValid(s: string): string {
  if (s.length === 0) {
    return s;
  }

  let seenStack = new StackWithArray();

  let sArr = s.split("");

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "(") {
      seenStack.push(i);
    } else if (sArr[i] === ")") {
      const popped = seenStack.pop();

      //if nothing was in the stack
      if (popped === null) {
        sArr[i] = "";
      }
    }
  }

  while (seenStack.length > 0) {
    const popped = seenStack.pop();

    sArr.splice(popped, 1);
  }

  return sArr.join("");
}

let s = "())()(((";

console.log(minRemoveToMakeValid(s));
