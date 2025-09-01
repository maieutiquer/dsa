import { checksum } from "./01.js"

test.only.each([
  { input: [0, 1, 3, 2, 5, 7], output: [0, 3, 12] },
  { input: [3, 1, 2, 4, 2, 5, 5], output: [7, 10] },
])("test $input", ({ input, output }) => {
  expect(checksum(input)).toEqual(output)
})
