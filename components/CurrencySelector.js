import { Select } from "@chakra-ui/react"

const CurrencySelector = ({
  currencies,
  defaultCurrency,
  setCurrency,
  ariaLabel,
  ...props
}) => (
  <Select
    display="flex"
    variant="flushed"
    {...props}
    textAlign="center"
    defaultValue={defaultCurrency}
    onChange={(v) => setCurrency(v.target.value)}
    aria-level={ariaLabel}
  >
    {currencies.map((c) => (
      <option key={c} value={c}>
        {c}
      </option>
    ))}
  </Select>
)

export default CurrencySelector
