//Question URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/

//two pointers
function lengthOfLongestSubstring(s: string): number {
  if (s == "") {
    return 0;
  } else if (s.length == 1) {
    return 1;
  }

  let chars = new Map<string, number>();
  let max = 0;
  let count = 0;

  let x = 0;
  let y = 1;

  chars.set(s[x], x);
  count++;
  max = Math.max(max, count);

  while (x < s.length) {
    // if (chars.size == 0) {
    //   chars.set(s[x], x);
    //   count++;
    // }

    if (s[y] == undefined) {
      x++;
      continue;
    }

    if (!chars.has(s[y])) {
      chars.set(s[y], y);
      count++;
      max = Math.max(max, count);
      y++;
    } else {
      chars.clear();
      max = Math.max(max, count);
      count = 0;
      x++;
      y = x + 1;
      chars.set(s[x], x);
      count++;
    }

    console.log(chars);
  }

  console.log(max);
  return max;
}

function longestSubstring(s: string) {
  if (s == "") {
    return 0;
  } else if (s.length == 1) {
    return 1;
  }

  let longest = 0;

  let p1 = 0,
    p2 = 0;

  // let seenChars = {};

  let chars = new Map<string, number>();
  let curr = 0;

  while (p1 < s.length) {
    if (!chars.has(s[p2])) {
      chars.set(s[p2], p2);
      curr++;
      longest = Math.max(curr, longest);
      
      if (p2 < s.length) {
        p2++;
      } else {
        p1++
        continue;
      }
    } else {
      curr = 0;
      p1 = chars.get(s[p2]) + 1;
      p2 = p1;
      chars.clear();
      
    }

    console.log(chars);
  }

  return longest;
}

const s = "pwwkew";

// lengthOfLongestSubstring(s);
console.log(longestSubstring(s));

export {};
