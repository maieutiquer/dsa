import pytest
from main import add_numbers  # Import the add_numbers function

def test_add_numbers():
    # Test cases for the add_numbers function
    assert add_numbers(2, 3) == 5
    assert add_numbers(-1, 1) == 0
    assert add_numbers(-2, -3) == -5
    assert add_numbers(0, 0) == 0
