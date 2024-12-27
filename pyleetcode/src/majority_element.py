from typing import List


class Solution:
    def majorityElementSlow(self, nums: List[int]) -> int:
        elements = {}
        majorityNumber = None
        largestCount = 0

        for i in range(len(nums)):
            numberCount = elements.get(nums[i], 0) + 1
            elements[nums[i]] = numberCount

            if numberCount > largestCount:
                largestCount = numberCount
                majorityNumber = nums[i]

        return majorityNumber

    def majorityElement(self, nums: List[int]) -> int:
        candidate = None
        count = 0

        for num in nums:
            if count == 0:
                candidate = num
            count += 1 if num == candidate else -1

        return candidate
