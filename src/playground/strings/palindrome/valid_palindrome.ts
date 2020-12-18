// Question link: https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let p1 = 0;
  let p2 = s.length - 1;

  while (p2 > p1) {
    if (s[p1] !== s[p2]) {
      return false;
    }
    p1++;
    p2--;
  }

  return true;
}

let s = "A man, a plan, a canal: Panama";
// let s = "race a car";

console.log(isPalindrome(s));
