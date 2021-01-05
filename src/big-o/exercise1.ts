// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)

    for (let j = 0; j < input.length; j++) {
      console.log(input[i], input[j]);
    }

    // console.log(input[i]);

    let stranger = true; // O(n)
    a++; // O(n)
  }

  // return a; // O(1)
}

console.log(funChallenge([1, 2, 3, 4, 5]));

// Total = BIG O(3 + 4n)
// answer: O(n)
