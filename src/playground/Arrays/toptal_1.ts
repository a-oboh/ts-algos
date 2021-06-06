function solution(A: string[], B: string[], P: string) {
  let match: number[] = [];

  for (let i = 0; i < B.length; i++) {
    const element = B[i];

    if (element.includes(P)) {
      //   console.log(A[i]);
      match.push(i);
    }
  }

  if (match.length > 1) {
    let currSmallest = A[match[0]];

    for (let i = 0; i < match.length; i++) {
      const item = match[i];

      if (A[item] < currSmallest) {
        currSmallest = A[item];
      }
    }

    return currSmallest;
  } else if (match.length === 0) {
    return "NO CONTACT";
  } else {
    return A[match[0]];
  }
}

console.log(
  solution(
    ["sander", "amy", "ann", "michael"],
    ["123456789", "234567890", "789123456", "123123123"],
    "1"
  )
);

export {};
