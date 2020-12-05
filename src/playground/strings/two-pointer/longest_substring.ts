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

const s = " ";
lengthOfLongestSubstring(s);

export {};
