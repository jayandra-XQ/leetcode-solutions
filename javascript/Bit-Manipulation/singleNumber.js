/**
 * 136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

 */

//XOR Bit Manipulation
var singleNumber = function (nums) {
  let result = 0;

  // XOR all numbers - duplicate will cancel out
  for (let num of nums) {
    result ^= num; //XOR operation
  }
  return result
}

// Test cases
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
