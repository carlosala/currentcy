import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import useData from "hooks/useData"
import CurrencySelector from "./CurrencySelector"
import { FIRST_CURRENCY } from "lib/constants"

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
export default function CurrencyInput({
  setAmount,
  setCurrency,
  ariaLabel,
  initialFocus,
}) {
  const data = useData()
  if (!data) return <div />
  /**
   * InputOnChange.
   *
   * @param {import("react").ChangeEvent<HTMLInputElement>} v
   * @returns {void}
   */
  const inputOnChange = (v) => {
    let amountStr = v.target.value.replaceAll(",", ".")
    const firstDotIdx = amountStr.indexOf(".")
    if (firstDotIdx !== -1) {
      const strUntilDot = amountStr.slice(0, firstDotIdx + 1)
      const strAfterDot = amountStr.slice(firstDotIdx + 1).replaceAll(".", "")
      amountStr = strUntilDot + strAfterDot
    }
    const amount = parseFloat(amountStr)
    if (isNaN(amount)) setAmount(0)
    else setAmount(amount)
  }
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
          defaultCurrency={FIRST_CURRENCY}
          ariaLabel={ariaLabel}
          width="20"
        />
      </InputRightElement>
      <Input
        defaultValue="1"
        onChange={inputOnChange}
        type="text"
        inputMode="numeric"
        aria-label="Choose amount"
        autoFocus={initialFocus}
      />
    </InputGroup>
  )
}
