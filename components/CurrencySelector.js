import { Select } from "@chakra-ui/react"
import useData from "hooks/useData"
import { getCurrencies } from "lib/currencyUtils"

const CurrencySelector = ({
  defaultCurrency,
  setCurrency,
  ariaLabel,
  width,
}) => {
  const { data } = useData()
  if (!data) return <div />
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
