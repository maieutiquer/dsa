import { p1 } from "./04"
// import { input } from "./04.input"

test.each([
  {
    input: `MMMSXXMASM
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
  // { input: input, output: -1 },
])("p1", ({ input, output }) => {
  expect(p1(input, "XMAS")).toBe(output)
})
