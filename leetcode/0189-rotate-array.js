export const rotate = function (nums, k) {
  const numberOfIterations = k % nums.length
  let interationsCount = 0
  let initialIndex = 0
  let currentIndex = 0
  let tempNumber = nums[0]

  while (interationsCount < nums.length) {
    interationsCount += 1
    const targetIndex = (currentIndex + numberOfIterations) % nums.length
    const innerTemp = nums[targetIndex]
    nums[targetIndex] = tempNumber
    tempNumber = innerTemp
    currentIndex = targetIndex
    if (currentIndex === initialIndex) {
      currentIndex += 1
      initialIndex += 1
      tempNumber = nums[currentIndex]
    }
  }
}
