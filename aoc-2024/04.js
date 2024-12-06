export const p1 = (input, needle, { x, y } = {}) =>
  console.log(needle, x, y) ||
  input
    .split("\n")
    .flatMap(
      (line, lineIndex) =>
        [0, 1, NaN].includes(Math.abs(lineIndex - x)) &&
        [...line.matchAll(new RegExp(needle[0], "gd"))]
          .map(
            (match) =>
              [0, 1, NaN].includes(Math.abs(match.index - y)) && {
                x: lineIndex,
                y: match.index,
              },
          )
          .filter(Boolean),
    )
    .map((position) => p1(input, needle.slice(1), position))
