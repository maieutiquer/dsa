export const p1 = (input) =>
  [...input.matchAll(/mul\(([0-9]{1,3}),([0-9]{1,3})\)/dg)]
    .map((match) => match[1] * match[2])
    .reduce((a, b) => a + b, 0)

export const p2 = (input) =>
  `do()${input}`
    .split("don't()")
    .flatMap((instructions) =>
      [
        ...instructions
          .split("do()")
          .slice(1)
          .join("")
          .matchAll(/mul\(([0-9]{1,3}),([0-9]{1,3})\)/dg),
      ].map((match) => match[1] * match[2]),
    )
    .reduce((a, b) => a + b, 0)
