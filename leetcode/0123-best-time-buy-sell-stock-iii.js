// not done yet
export const maxProfit = function (prices) {
  let lowest = prices[0]
  let highest = 0
  let maxDiff = 0

  for (let i = 0; i < prices.length; i += 1) {
    const currentPrice = prices[i]

    if (currentPrice < lowest) {
      lowest = currentPrice
      highest = currentPrice
    } else if (currentPrice > highest) {
      highest = currentPrice

      const currentDiff = currentPrice - lowest

      if (currentDiff > maxDiff) {
        maxDiff = currentDiff
      }
    }
  }

  return maxDiff
}
