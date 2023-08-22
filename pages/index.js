import {
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react"
import ColorModeSwitch from "components/ColorModeSwitch"
import CurrencyInput from "components/CurrencyInput"
import CurrencySelector from "components/CurrencySelector"
import useData from "hooks/useData"
import { converter } from "lib/currencyUtils"
import { useEffect, useState } from "react"

export default function Home() {
  const data = useData()
  const [firstCurrency, setFirstCurrency] = useState("SEK")
  const [secondCurrency, setSecondCurrency] = useState("EUR")
  const [amount, setAmount] = useState(1)
  const [converted, setConverted] = useState("1")

  useEffect(() => {
    if (data) {
      const formatted = new Intl.NumberFormat(navigator.languages[0], {
        style: "currency",
        currency: secondCurrency,
      }).format(converter(data, amount, firstCurrency, secondCurrency))
      setConverted(formatted)
    }
  }, [amount, data, firstCurrency, secondCurrency])

  return (
    <Container
      display="flex"
      flexDir="column"
      as="main"
      maxWidth="container.lg"
      width="100%"
      p="8"
    >
      <Flex mb="48" flexDir="row" width="100%" as="header">
        <Heading>CURRENTCY</Heading>
        <Spacer />
        <ColorModeSwitch />
      </Flex>
      <Flex alignItems="center" direction={{ base: "column", lg: "row" }}>
        <CurrencyInput
          setAmount={setAmount}
          setCurrency={setFirstCurrency}
          ariaLabel="Choose first currency"
          initialFocus
        />
        <Center
          height={{ base: "16", lg: "10" }}
          width={{ base: "100%", lg: "40%" }}
        >
          {data ? (
            <Text fontSize="2xl" fontWeight="bold">
              {converted}
            </Text>
          ) : (
            <div />
          )}
        </Center>
        <CurrencySelector
          setCurrency={setSecondCurrency}
          width="28"
          defaultCurrency="EUR"
          ariaLabel="Choose second currency"
        />
      </Flex>
    </Container>
  )
}
