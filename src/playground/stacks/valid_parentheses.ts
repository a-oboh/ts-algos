//Question URL: https://leetcode.com/problems/valid-parentheses/

import StackWithArray from "../../data-structures/stack/stack";

function isValid(s: string): boolean {
  if (s === "") {
    return true;
  } else if (s.length == 1) {
    return false;
  }

  const seenStack = new StackWithArray();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      seenStack.push(s[i]);
      continue;
    }

    if (s[i] === "}" && seenStack.top === "{") {
      seenStack.pop();
    } else if (s[i] === ")" && seenStack.top === "(") {
      seenStack.pop();
    } else if (s[i] === "]" && seenStack.top === "[") {
      seenStack.pop();
    } else {
      return false;
    }
  }

  if (!seenStack.top) {
    return true;
  }

  return false;
}

const s = "()";

console.log(isValid(s));

export {};
