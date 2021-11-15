import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import CurrencySelector from "./CurrencySelector"

const CurrencyInput = ({ setAmount, setCurrency, currencies, ...props }) => (
  <InputGroup alignSelf="center" variant="flushed" display="flex" {...props}>
    <InputRightElement width="20">
      <CurrencySelector
        setCurrency={setCurrency}
        currencies={currencies}
        defaultCurrency="USD"
      />
    </InputRightElement>
    <Input
      defaultValue="1"
      onChange={(v) => setAmount(v.target.value)}
      type="number"
    />
  </InputGroup>
)

export default CurrencyInput
