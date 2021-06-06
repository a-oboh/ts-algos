function solution(S: string) {
  var cleanS = S.replace(/[-" "]/g, "");

  var chunks = [], i = 0, n = cleanS.length;

  while (i < n) {
    chunks.push(cleanS.slice(i, i += 3));
  }

  const joined = chunks.join('-')

  console.log(chunks)
  console.log(joined)
}


console.log(solution("00-44 48 5555 8361"));

export {};
