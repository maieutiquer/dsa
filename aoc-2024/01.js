export const p1 = (input) =>
  [
    input
      .split("\n")
      .map((lines) => lines.split("   "))
      .reduce(
        ([firstList, secondList], line) => [
          [...firstList, +line[0]],
          [...secondList, +line[1]],
        ],
        [[], []],
      )
      .map((list) => list.toSorted()),
  ].map(([firstList, secondList]) =>
    firstList.reduce(
      (diffAcc, element, index) =>
        (diffAcc += Math.abs(element - secondList[index])),
      0,
    ),
  )[0]

export const p2 = (input) =>
  [
    input
      .split("\n")
      .map((lines) => lines.split("   "))
      .reduce(
        ([firstList, secondList], line) => [
          [...firstList, +line[0]],
          [...secondList, +line[1]],
        ],
        [[], []],
      )
      .map((list) => list.toSorted()),
  ].map(([firstList, secondList]) =>
    firstList
      .map(
        (firstListElement) =>
          firstListElement *
          secondList.filter(
            (secondListElement) => secondListElement === firstListElement,
          ).length,
      )
      .reduce((a, b) => a + b, 0),
  )[0]
