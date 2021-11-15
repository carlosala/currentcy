import { Select } from "@chakra-ui/react"

const CurrencySelector = ({
  currencies,
  defaultCurrency,
  setCurrency,
  ...props
}) => (
  <Select
    display="flex"
    variant="flushed"
    {...props}
    textAlign="center"
    defaultValue={defaultCurrency}
    onChange={(v) => setCurrency(v.target.value)}
  >
    {currencies.map((c) => (
      <option key={c} value={c}>
        {c}
      </option>
    ))}
  </Select>
)

export default CurrencySelector
