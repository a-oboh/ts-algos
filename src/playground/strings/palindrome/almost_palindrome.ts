function validPalindrome(s: string): boolean {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    if (s[left] !== s[right]) {
      if (checkPalindrome(left, right - 1, s)) {
        return true;
      } else if (checkPalindrome(left + 1, right, s)) {
        return true;
      }
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function checkPalindrome(left: number, right: number, s: string) {
  while (right > left) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

let s = "ab";

console.log(validPalindrome(s));

export {};
