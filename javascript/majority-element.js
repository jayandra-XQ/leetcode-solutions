/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 */

// by using sorting algorithm
// this is not  very efficient
// var majorityElement = function (nums) {
//   // sort the array
//   nums.sort((a, b) => a - b)

//   // return the middle element as it is the majority element
//   return nums[Math.floor(nums.length / 2)]
// }

// console.log(majorityElement([3, 2, 3]))


// by using Boyer-Moore Voting Algorithm
var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    // assign a new candidate if the count drop to zero
    if (count === 0) {
      candidate = num
    }

    // increment or decrement the count
    count += (num === candidate) ? 1 : -1;
  }

  // the remaining candidate is the majority element
  return candidate
};

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))