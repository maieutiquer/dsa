import { p1, p2 } from "./01"
import { input } from "./01.input"

test.each([
  {
    input: `3   4
4   3
2   5
1   3
3   9
3   3`,
    output: 11,
  },
  { input: input, output: 1666427 },
])("p1", ({ input, output }) => {
  expect(p1(input)).toBe(output)
})

test.each([
  {
    input: `3   4
4   3
2   5
1   3
3   9
3   3`,
    output: 31,
  },
  { input: input, output: 0 },
])("p2", ({ input, output }) => {
  expect(p2(input)).toBe(output)
})
