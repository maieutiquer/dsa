export const maximumBags = function (capacity, rocks, additionalRocks) {
  var differences = []

  for (var i = 0; i < capacity.length; i += 1) {
    differences.push(capacity[i] - rocks[i])
  }

  differences.sort((a, b) => a - b)

  var fullBags = 0

  for (var difference of differences) {
    if (difference <= additionalRocks) {
      fullBags += 1
      additionalRocks -= difference
    }
  }

  return fullBags
}
