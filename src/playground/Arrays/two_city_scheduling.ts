/*
Problem link: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3349/

A company is planning to interview 2n people. Given the array costs 
where costs[i] = [aCosti, bCosti], the cost of flying the ith person 
to city a is aCosti, and the cost of flying the ith person to 
city b is bCosti.

Return the minimum cost to fly every person to a city 
such that exactly n people arrive in each city.


Example 1:

Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110

Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half 
the people interviewing in each city.
*/

function twoCitySchedCost(costs: number[][]): number {
  let minCost: number = 0;

  for (let i = 0; i < costs.length; i++) {
    const cities = costs[i];

    let currMin = Math.min(cities[0], cities[1]);
    console.log(currMin);

    minCost += currMin;
  }

  console.log(minCost);
  return minCost;
}

const costs = [
  [10, 20],
  [30, 200],
  [400, 50],
  [30, 20],
];

twoCitySchedCost(costs);
