/**
 * 191. Number of 1 Bits


Given a positive integer n, write a function that returns the number of
set bits
in its binary representation (also known as the Hamming weight).
Example 1:

Input: n = 11

Output: 3

Explanation:

The input binary string 1011 has a total of three set bits.

 */

// sloving this problem by using ' Brian Kernighan's algo'
var hammingWeight = function (n) {
  let count = 0

  while (n !== 0) {
    // Flip the least significant '1' bit to '0'
    n = n & (n - 1);
    count++;
  }

  return count;
}
//test case
console.log(hammingWeight(11)); // output: 3
