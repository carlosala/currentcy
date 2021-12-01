import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import useData from "hooks/useData"
import CurrencySelector from "./CurrencySelector"

/**
 * @typedef CurrencyInputType
 * @property {(s: number) => void} setAmount
 * @property {(s: string) => void} setCurrency
 * @property {string} ariaLabel
 * @property {boolean} initialFocus
 */

/**
 * CurrencyInput.
 *
 * @param {CurrencyInputType} props
 * @returns {import("react").ReactElement} Selector to choose currency
 */
const CurrencyInput = ({ setAmount, setCurrency, ariaLabel, initialFocus }) => {
  const data = useData()
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
        onChange={(v) => setAmount(Number(v.target.value))}
        type="number"
        aria-label="Choose amount"
        autoFocus={initialFocus}
      />
    </InputGroup>
  )
}

export default CurrencyInput
