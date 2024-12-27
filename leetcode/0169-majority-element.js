export const majorityElement = function (nums) {
  const elements = {}
  let majorityNumber = undefined
  let largestCount = 0

  for (let i = 0; i < nums.length; i += 1) {
    const numberCount = (elements[nums[i]] ?? 0) + 1
    elements[nums[i]] = numberCount

    if (numberCount > largestCount) {
      largestCount = numberCount
      majorityNumber = nums[i]
    }
  }

  return majorityNumber
}
