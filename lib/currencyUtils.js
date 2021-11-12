export const converter = (data, amount, from, to) => {
  if (from === "USD") return Math.round(amount * data[to] * 1000) / 1000
  if (to === "USD") return Math.round((amount / data[from]) * 1000) / 1000
  const result = Math.round((amount * data[to] * 1000) / data[from]) / 1000
  return result
}

export const getCurrencies = (data) => {
  const currencies = ["USD", ...Object.keys(data)]
  const sorted = currencies.sort((a, b) => {
    if (a === "USD") return -1
    if (b === "USD") return 1
    if (a === "EUR") return -1
    if (b === "EUR") return 1
    if (a < b) return -1
    return 1
  })
  return sorted
}
