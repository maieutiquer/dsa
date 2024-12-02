export const p1 = (input) =>
  input.split("\n").filter((lines) =>
    lines
      .split(" ")
      .map((number, index, line) => number - line[index + 1])
      .slice(0, -1)
      .every(
        (diff, _index, diffs) => diff * diffs[0] >= 1 && Math.abs(diff) <= 3,
      ),
  ).length

export const p2 = (input) =>
  input
    .split("\n")
    .map((lines) =>
      lines.split(" ").map((_number, mapIndex, line) =>
        line
          .filter((_element, filterIndex) => filterIndex !== mapIndex)
          .map((number, index, line) => number - line[index + 1])
          .slice(0, -1)
          .every(
            (diff, _index, diffs) =>
              diff * diffs[0] >= 1 && Math.abs(diff) <= 3,
          ),
      ),
    )
    .filter((reports) => reports.some((isSafe) => isSafe)).length
