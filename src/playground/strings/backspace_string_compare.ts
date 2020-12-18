//question link: https://leetcode.com/problems/backspace-string-compare/
function buildString(s: string) {
  const clean: string[] = [];

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      clean.push(s[i]);
    } else {
      clean.pop();
    }
  }

  // s = clean.join("");
  return clean;
}

function backspaceCompare(S: string, T: string): boolean {
  const cleanS = buildString(S);
  const cleanT = buildString(T);

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
    } else {
    }
  }

  if (cleanS.length !== cleanT.length) {
    return false;
  }

  if (cleanS.join("") === cleanT.join("")) {
    return true;
  }

  return false;
}

function backspaceCompareOptimized(S: string, T: string) {
  let p1 = S.length;
  let p2 = T.length;

  while (p1 > 0 && p2 > 0) {
    if (p1 > 0) {
      if (S[p1] === '#') {
        
      }
    }
  }
}

let s = "ab#c";
let t = "ar#c";

// console.log(backspaceCompare(s, t));
console.log(backspaceCompareOptimized(s, t));

export {};
