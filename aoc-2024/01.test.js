import { p1 } from "./01"

test.skip.each([
  {
    input: `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`,
    output: 6440,
  },
])("from array and to array", ({ input, output }) => {
  expect(p1(input)).toBe(output)
})
