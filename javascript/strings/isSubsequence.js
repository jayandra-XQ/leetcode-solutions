/**
 * 392. Is Subsequence
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

 */

// solving this by two pointer approach
var isSubsequence = function (s, t) {
  let sPointer = 0;
  let tPointer = 0;

  //traverse t with tPointer
  while (tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++
  }

  // if all characters in s have been found in t, return true
  return sPointer === s.length;
}

// test cases
console.log(isSubsequence("abc", "ahbgdc"))