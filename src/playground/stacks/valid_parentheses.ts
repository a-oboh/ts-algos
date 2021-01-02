//Question URL: https://leetcode.com/problems/valid-parentheses/

import StackWithArray from "../../data-structures/stack/stack";

function isValid(s: string): boolean {
  if (s === "") {
    return true;
  } else if (s.length == 1) {
    return false;
  }

  const seenStack = new StackWithArray();

  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      seenStack.push(s[i]);
      continue;
    }

    const leftBracket = seenStack.pop();
    const rightBracket = brackets[leftBracket];

    if (s[i] !== rightBracket) {
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
