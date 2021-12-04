import { Select, Spinner } from "@chakra-ui/react"
import useData from "hooks/useData"
import { getCurrencies } from "lib/currencyUtils"

/**
 * @typedef CurrencySelectorType
 * @property {string} defaultCurrency
 * @property {(s: string) => void} setCurrency
 * @property {string} ariaLabel
 * @property {string} width
 */

/**
 * CurrencySelector.
 *
 * @param {CurrencySelectorType} props
 * @returns {import("react").ReactElement}
 */
export default function CurrencySelector({
  defaultCurrency,
  setCurrency,
  ariaLabel,
  width,
}) {
  const data = useData()
  if (!data) return <Spinner />
  const currencies = getCurrencies(data)
  return (
    <Select
      display="flex"
      variant="flushed"
      textAlign="center"
      defaultValue={defaultCurrency}
      onChange={(v) => setCurrency(v.target.value)}
      aria-label={ariaLabel}
      width={width}
    >
      {currencies.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </Select>
  )
}
