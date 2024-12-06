export const removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length
  }

  let offset = 0

  for (let i = 2; i < nums.length; i += 1) {
    if (offset !== 0) {
      nums[i - offset] = nums[i]
    }

    if (
      nums[i - offset - 2] === nums[i - offset - 1] &&
      nums[i - offset - 1] === nums[i - offset]
    ) {
      offset += 1
    }
  }

  return nums.length - offset
}
