export const minSubArrayLen = function (target, nums) {
  if (nums[0] >= target) {
    return 1
  }

  let start = 0
  let end = 0
  let sum = nums[start]
  let maxLength = Number.MAX_SAFE_INTEGER

  while (end < nums.length) {
    end += 1
    sum += nums[end]
    while (sum >= target && start < end) {
      const currentLength = end - start + 1

      if (sum >= target && maxLength > currentLength) {
        maxLength = currentLength
      }

      sum -= nums[start]
      start += 1
    }

    const currentLength = end - start + 1

    if (sum >= target && maxLength > currentLength) {
      maxLength = currentLength
    }
  }

  return maxLength === Number.MAX_SAFE_INTEGER ? 0 : maxLength
}
