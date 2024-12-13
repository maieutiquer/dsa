import { p1, p2 } from "./04"
import { input } from "./04.input"

test.skip.each([
  {
    input: `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`,
    output: 18,
  },
  { input, output: 2573 },
])("p1", ({ input, output }) => {
  expect(p1(input, "XMAS")).toBe(output)
})

test.each([
  {
    input: `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`,
    output: 1850,
  },
  { input, output: 0 },
])("p2", ({ input, output }) => {
  expect(p2(input, "XMAS")).toBe(output)
})
