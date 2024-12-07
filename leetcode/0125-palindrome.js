export const isPalindrome = function (s) {
  const string = s
    .toLowerCase()
    .split("")
    .filter((char) => {
      const code = char.charCodeAt(0)

      return (code > 47 && code < 58) || (code > 96 && code < 123)
    })
    .join("")

  for (let i = 0; i < string.length / 2; i += 1) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}
