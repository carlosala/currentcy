/** @typedef {{ code: string; value: number }} Currency */

/**
 * Converter.
 *
 * @param {Record<string, Currency>} data
 * @param {number} amount
 * @param {string} from
 * @param {string} to
 * @returns {number}
 */
export function converter(data, amount, from, to) {
  if (from === "USD" && to === "USD") return 1
  if (from === "USD") return amount * data[to].value
  if (to === "USD") return amount / data[from].value
  return (amount * data[to].value) / data[from].value
}

/**
 * GetCurrencies.
 *
 * @param {Record<string, Currency>} data
 */
export function getCurrencies(data) {
  const sorted = Object.keys(data).sort((a, b) => {
    if (a === "EUR") return -1
    if (b === "EUR") return 1
    if (a === "USD") return -1
    if (b === "USD") return 1
    if (a === "SEK") return -1
    if (b === "SEK") return 1
    if (a < b) return -1
    return 1
  })
  return sorted
}
