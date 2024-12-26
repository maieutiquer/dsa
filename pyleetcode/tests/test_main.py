# tests/test_main.py
from ..src.main import add_numbers

def test_add_numbers():
    """Test that add_numbers correctly adds two numbers."""
    assert add_numbers(2, 3) == 5
    assert add_numbers(-1, 1) == 0
    assert add_numbers(0, 0) == 0
