//Write a function that takes a string as input and reverse only the vowels of a string.

// Example:

// Input: "hello"
// Output: "holle"

//brute force solution
function reverseVowels(s: string): string {
  const arr: string[] = s.split("");

  let vowels = "aeiou";

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (vowels.includes(item)) {
      for (let j = i + 1; j < arr.length; j++) {
        if (vowels.includes(arr[j])) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
  }

  return arr.join("");
}

// Two pointers solution (more efficient)
function reverseVowelsTwoPointers(s: string): string {
  const arr: string[] = s.split("");

  //the two pointers
  let a = 0;

  let b = arr.length - 1;

  let vowels = "aeiou";

  while (a < b) {
    if (vowels.includes(arr[a])) {
      
    } else {break}
  }

  return arr.join("");
}

console.log(reverseVowels("hello"));
console.log(reverseVowelsTwoPointers("hello"));
