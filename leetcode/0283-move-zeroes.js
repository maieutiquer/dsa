export const moveZeroes = function (nums) {
  let nonZeroCount = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      if (i !== nonZeroCount) {
        nums[nonZeroCount] = nums[i]
        nums[i] = 0
      }
      nonZeroCount += 1
    }
  }
  return nums
}
