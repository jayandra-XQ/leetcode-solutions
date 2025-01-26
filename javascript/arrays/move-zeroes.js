/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

 */

var moveZeroes = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      result.push(nums[i])
    }
  }

  let zeroCount = nums.length - result.length;

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i]
  }
}

// Testing the function
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
moveZeroes(nums2);