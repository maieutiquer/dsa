import { canConstruct } from "./0383-ransom-note"

test.each([
  { input: ["a", "b"], output: false },
  { input: ["aa", "ab"], output: false },
  { input: ["aa", "aab"], output: true },
])("test", ({ input, output }) => {
  expect(canConstruct(...input)).toBe(output)
})
