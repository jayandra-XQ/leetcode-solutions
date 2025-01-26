/**
 * 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 */

// Brute force approach
var isPalindrome = function (s) {
  // Filter out non-alphanumeric characters and convert to lowercase
  let filtered = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

  //Reverse the filtered string
  let reversed = filtered.split('').reverse().join('');

  // check if the filtered string is same as reversed string
  return filtered === reversed;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true
console.log(isPalindrome("12321")) // true
