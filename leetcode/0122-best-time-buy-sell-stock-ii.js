export const maxProfit = function (prices) {
  let lowest = prices[0]
  let highest = prices[0]
  let profit = 0
  let currentDiff = 0

  for (let i = 1; i < prices.length; i += 1) {
    const currentPrice = prices[i]

    if (currentPrice < prices[i - 1]) {
      lowest = currentPrice
      highest = currentPrice
      profit += currentDiff
      currentDiff = 0
    } else if (currentPrice > highest) {
      highest = currentPrice

      currentDiff = currentPrice - lowest
    }
  }

  return profit + currentDiff
}
