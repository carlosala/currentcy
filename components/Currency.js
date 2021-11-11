import { Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react"

export const CurrencyInput = ({
  changeAmount,
  changeCurrency,
  currencies,
  ...props
}) => (
  <InputGroup alignSelf="center" variant="flushed" display="flex" {...props}>
    <InputRightElement width="20">
      <CurrencySelector
        changeCurrency={changeCurrency}
        currencies={currencies}
        defaultCurrency="USD"
      />
    </InputRightElement>
    <Input defaultValue="1" onChange={changeAmount} type="number" />
  </InputGroup>
)

export const CurrencySelector = ({
  currencies,
  defaultCurrency,
  changeCurrency,
  ...props
}) => (
  <Select
    display="flex"
    variant="flushed"
    {...props}
    textAlign="center"
    defaultValue={defaultCurrency}
    onChange={changeCurrency}
  >
    {currencies.map((c) => (
      <option key={c} value={c}>
        {c}
      </option>
    ))}
  </Select>
)
