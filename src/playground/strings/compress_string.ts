function solution(s: string, K: number) {
  let low = null;
  let sar = s.split("");

  const len: number = sar.length;

  for (let i = 0; i < len; i++) {
    let first = sar.slice(0, i);
    let second = sar.slice(i + K);

    let items = first.concat(second);

    console.log(items);

    let compressed = compress(items);
    let next = compressed.length;

    if (low === null || next < low) {
      low = next;
    }
  }
  return low;
}

function compress(sar: string[]) {
  const len = sar.length;
  const lastIndex = len - 1;

  let full = "";

  let no = 1;

  for (let i = 0; i < len; i++) {
    const char = sar[i];
    const next = i === lastIndex ? "" : sar[i + 1];

    if (char === next) {
      no++;
    } else {
      if (no > 1) {
        // only include number if greater than one
        full += no;
      }

      full += char;

      // reset
      no = 1;
    }

    console.log(full)
  }
  return full;
}

const s = "ABCDDDEFG";
const res = solution(s, 2);

console.log(res);

export {};
