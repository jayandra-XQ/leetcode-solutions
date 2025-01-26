var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  //iterate over the character of first string
  for (let i = 0; i < strs.length; i++) {
    let chars = strs[0][i];

    //check if the character is common to other strings
    for (let j = 1; j < strs.length; j++) {
      // if i reaches the end of any string or there's a character mismatch 
      if (i === strs[j].length || strs[j][i] !== chars) {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0];
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])) // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])) // ""
