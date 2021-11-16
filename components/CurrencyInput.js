import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import useData from "hooks/useData"
import CurrencySelector from "./CurrencySelector"

const CurrencyInput = ({ setAmount, setCurrency, ariaLabel }) => {
  const { data } = useData()
  if (!data) return <div />
  return (
    <InputGroup
      alignSelf="center"
      variant="flushed"
      display="flex"
      width={{ lg: "60%" }}
    >
      <InputRightElement width="20">
        <CurrencySelector
          setCurrency={setCurrency}
          defaultCurrency="USD"
          ariaLabel={ariaLabel}
          width="20"
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
}

export default CurrencyInput
