export const p1 = (input, needle, { x, y } = {}, { dx, dy } = {}) => {
  const lines = input.split("\n")
  let occurrences = 0

  for (const [lineIndex, line] of Object.entries(lines)) {
    const matches = [...line.matchAll(new RegExp(needle[0], "gd"))]

    for (const { index: matchIndex } of matches) {
      if (x !== undefined) {
        // console.log(lineIndex, matchIndex, Math.abs(lineIndex - x))
        if (Math.abs(lineIndex - x) <= 1 && Math.abs(matchIndex - y) <= 1) {
          if (dx !== undefined) {
            if (lineIndex - x === dx && matchIndex - y === dy) {
              if (needle.length > 1) {
                // console.log(needle, lineIndex, matchIndex, x, y)
                occurrences += p1(
                  input,
                  needle.slice(1),
                  {
                    x: lineIndex,
                    y: matchIndex,
                  },
                  {
                    dx: lineIndex - x,
                    dy: matchIndex - y,
                  },
                )
              } else {
                // console.log(needle, lineIndex, matchIndex, x, y)
                return 1
              }
            }
          } else {
            if (needle.length > 1) {
              // console.log(needle, lineIndex, matchIndex, x, y)
              occurrences += p1(
                input,
                needle.slice(1),
                {
                  x: lineIndex,
                  y: matchIndex,
                },
                {
                  dx: lineIndex - x,
                  dy: matchIndex - y,
                },
              )
            } else {
              // console.log(needle, lineIndex, matchIndex, x, y)
              return 1
            }
          }
        }
      } else {
        occurrences += p1(input, needle.slice(1), {
          x: lineIndex,
          y: matchIndex,
        })
      }
    }
  }
  return occurrences
}

export const p2 = (input) =>
  input
    .split("\n")
    .flatMap((line, lineIndex, lines) =>
      line.split("").map(
        (char, charIndex) =>
          char === "A" &&
          ((lines[lineIndex - 1]?.[charIndex - 1] === "M" &&
            lines[lineIndex + 1]?.[charIndex - 1] === "M" &&
            lines[lineIndex - 1]?.[charIndex + 1] === "S" &&
            lines[lineIndex + 1]?.[charIndex + 1] === "S") ||
            //
            (lines[lineIndex - 1]?.[charIndex - 1] === "M" &&
              lines[lineIndex - 1]?.[charIndex + 1] === "M" &&
              lines[lineIndex + 1]?.[charIndex - 1] === "S" &&
              lines[lineIndex + 1]?.[charIndex + 1] === "S") ||
            //
            (lines[lineIndex - 1]?.[charIndex + 1] === "M" &&
              lines[lineIndex + 1]?.[charIndex + 1] === "M" &&
              lines[lineIndex - 1]?.[charIndex - 1] === "S" &&
              lines[lineIndex + 1]?.[charIndex - 1] === "S") ||
            //
            (lines[lineIndex + 1]?.[charIndex - 1] === "M" &&
              lines[lineIndex + 1]?.[charIndex + 1] === "M" &&
              lines[lineIndex - 1]?.[charIndex - 1] === "S" &&
              lines[lineIndex - 1]?.[charIndex + 1] === "S")),
      ),
    )
    .filter(Boolean).length
