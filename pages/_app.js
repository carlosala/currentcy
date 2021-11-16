import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"
import theme from "styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Currentcy</title>
        <link
          rel="preload"
          href="https://currentcy.carlosala.dev/api/latestData"
          as="fetch"
          crossOrigin="anonymous"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Simple real-time currency converter"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
