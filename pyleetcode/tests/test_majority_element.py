import pytest
from majority_element import Solution  # Import the add_numbers function


@pytest.mark.parametrize(
    "nums, expected",
    [
        ([3, 2, 3], 3),  # Simple majority
        ([2, 2, 1, 1, 1, 2, 2], 2),  # Majority element with interspersed values
        ([1, 1, 1, 1, 1], 1),  # Single repeated element
        ([6, 6, 6, 7, 6, 8, 6], 6),  # Mixed values, one majority
        ([5], 5),  # Single element array
    ],
)
def test_majority_element(nums, expected):
    solution = Solution()
    assert solution.majorityElement(nums) == expected
