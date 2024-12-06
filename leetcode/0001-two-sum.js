export const twoSum = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  console.log(nums, target)
  nums = nums
    .map((num, index) => ({ num, index }))
    .sort((a, b) => a.num - b.num)
  console.log(nums)

  while (left < right) {
    const sum = nums[left].num + nums[right].num
    console.log(left, right, sum)
    if (sum === target) {
      return [nums[left].index, nums[right].index]
    } else if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    }
  }
}
