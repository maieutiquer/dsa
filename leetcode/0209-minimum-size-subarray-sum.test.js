import { minSubArrayLen } from "./0209-minimum-size-subarray-sum"

test.each([
  { input: [3, [4]], output: 1 },
  { input: [3, [2, 2, 2]], output: 2 },
  { input: [5, [2, 2, 2]], output: 3 },
  { input: [7, [2, 3, 1, 2, 4, 3]], output: 2 },
  { input: [4, [1, 4, 4]], output: 1 },
])("test $input", ({ input, output }) => {
  expect(minSubArrayLen(...input)).toBe(output)
})
