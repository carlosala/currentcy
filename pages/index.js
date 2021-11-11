import {
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react"
import ColorModeSwitch from "components/ColorModeSwitch"
import { CurrencyInput, CurrencySelector } from "components/Currency"
import { converter, getCurrencies } from "lib/currencyUtils"
import { useEffect, useState } from "react"

const Home = ({ data }) => {
  const currencies = getCurrencies(data)

  const [firstCurrency, setFirstCurrency] = useState("USD")
  const [secondCurrency, setSecondCurrency] = useState("EUR")
  const [amount, setAmount] = useState(1)
  const [converted, setConverted] = useState(converter(data, 1, "USD", "EUR"))
  const changeConverted = () =>
    setConverted(converter(data, amount, firstCurrency, secondCurrency))
  const changeFirstCurrency = (v) => {
    setFirstCurrency(v.target.value)
  }
  const changeSecondCurrency = (v) => {
    setSecondCurrency(v.target.value)
  }
  const changeAmount = (v) => {
    setAmount(v.target.value)
  }
  useEffect(() => changeConverted())
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
          changeAmount={changeAmount}
          changeCurrency={changeFirstCurrency}
          width={{ lg: "60%" }}
          currencies={currencies}
        />
        <Center
          height={{ base: "16", lg: "10" }}
          width={{ base: "100%", lg: "40%" }}
        >
          <Text fontSize="2xl" fontWeight="bold">
            {converted}
          </Text>
        </Center>
        <CurrencySelector
          changeCurrency={changeSecondCurrency}
          width="28"
          currencies={currencies}
          defaultCurrency="EUR"
        />
      </Flex>
    </Container>
  )
}

export const getServerSideProps = async () => {
  const url = `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.APIKEY}`
  const { data } = await fetch(url).then((str) => str.json())
  return { props: { data } }
}

export default Home
