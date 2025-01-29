/**
 * 338. Counting Bits


Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
 */

// solving this problem by 'DYNAMIC PROGRAMMING'
var countBits = function (n) {
  let dp = new Array(n + 1);
  dp[0] = 0; // base case : 0 has 0 set bits

  for (let i = 1; i <= n; i++) {
    //  Use the right shift and evaluate its smallest bit
    dp[i] = dp[i >> 1] + (i & 1);
  }
  return dp;
}
// test case
console.log(countBits(2)); // output: [0,1,1]