import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import CurrencySelector from "./CurrencySelector"

const CurrencyInput = ({
  setAmount,
  setCurrency,
  currencies,
  ariaLabel,
  ...props
}) => (
  <InputGroup alignSelf="center" variant="flushed" display="flex" {...props}>
    <InputRightElement width="20">
      <CurrencySelector
        setCurrency={setCurrency}
        currencies={currencies}
        defaultCurrency="USD"
        ariaLabel={ariaLabel}
      />
    </InputRightElement>
    <Input
      defaultValue="1"
      onChange={(v) => setAmount(v.target.value)}
      type="number"
      aria-label="Choose amount"
    />
  </InputGroup>
)

export default CurrencyInput
