export const converter = (data, amount, from, to) => {
  if (from === "USD" && to === "USD") return 1
  if (from === "USD") return amount * data[to]
  if (to === "USD") return amount / data[from]
  return (amount * data[to]) / data[from]
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
