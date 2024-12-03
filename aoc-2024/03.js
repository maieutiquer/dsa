export const p1 = (input) =>
  [...input.matchAll(/mul\(([0-9]{1,3}),([0-9]{1,3})\)/dg)]
    .map((match) => match[1] * match[2])
    .reduce((a, b) => a + b, 0)
