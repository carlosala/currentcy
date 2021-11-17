import { Select, Spinner } from "@chakra-ui/react"
import useData from "hooks/useData"
import { getCurrencies } from "lib/currencyUtils"

/*
 * @typedef {Object} CurrencySelectorType
 * @param {string} defaultCurrency
 * @param {Function} setCurrency
 * @param {string} ariaLabel
 * @param {string} width
 */

/* CurrencySelector.
 *
 * @param {CurrencySelectorType} props
 * @returns {import("react").ReactElement}
 */
const CurrencySelector = ({
  defaultCurrency,
  setCurrency,
  ariaLabel,
  width,
}) => {
  const { data } = useData()
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

export default CurrencySelector
