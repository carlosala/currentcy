import { ChakraProvider } from "@chakra-ui/react"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"
import theme from "styles/theme"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Currentcy</title>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="preload"
            href="https://currentcy.carlosala.dev/api/latestdata"
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
      <Analytics />
    </>
  )
}
