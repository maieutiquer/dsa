import { p1 } from "./03"
import { input } from "./03.input"

test.each([
  {
    input: `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`,
    output: 161,
  },
  { input: input, output: -1 },
])("p1", ({ input, output }) => {
  expect(p1(input)).toBe(output)
})
