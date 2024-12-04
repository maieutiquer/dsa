export const p1 = (input) =>
  [...input.matchAll(/mul\(([0-9]{1,3}),([0-9]{1,3})\)/dg)]
    .map((match) => match[1] * match[2])
    .reduce((a, b) => a + b, 0)

export const p2 = (input) =>
  input
    .split("don't()")
    .map((currentInstructions, index) =>
      index === 0
        ? currentInstructions
        : currentInstructions.split("do()").slice(1).join(""),
    )
    .flatMap((instructions) =>
      [...instructions.matchAll(/mul\(([0-9]{1,3}),([0-9]{1,3})\)/dg)].map(
        (match) => match[1] * match[2],
      ),
    )
    .reduce((a, b) => a + b, 0)
