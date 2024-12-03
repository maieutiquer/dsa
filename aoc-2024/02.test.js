import { p1, p2 } from "./02"
import { input } from "./02.input"

test.each([
  {
    input: `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`,
    output: 2,
  },
  { input: input, output: 236 },
])("p1", ({ input, output }) => {
  expect(p1(input)).toBe(output)
})

test.each([
  {
    input: `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`,
    output: 4,
  },
  { input: input, output: 308 },
])("p2", ({ input, output }) => {
  expect(p2(input)).toBe(output)
})
