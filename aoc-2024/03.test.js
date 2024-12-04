import { p1, p2 } from "./03"
import { input } from "./03.input"

test.each([
  {
    input: `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`,
    output: 161,
  },
  { input: input, output: 196826776 },
])("p1", ({ input, output }) => {
  expect(p1(input)).toBe(output)
})

test.each([
  {
    input: `xmul(2,4)mul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`,
    output: 56,
  },
  { input: input, output: 106780429 },
])("p2", ({ input, output }) => {
  expect(p2(input)).toBe(output)
})
