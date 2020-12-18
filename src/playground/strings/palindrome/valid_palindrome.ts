// Question link: https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

let s = "A man, a plan, a canal: Panama";
// let s = "race a car";

console.log(isPalindrome(s));
