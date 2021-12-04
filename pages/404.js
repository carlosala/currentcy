/* eslint-disable jsx-a11y/anchor-is-valid */
import { Center, Heading, Link } from "@chakra-ui/react"
import NextLink from "next/link"

export default function Custom404() {
  return (
    <Center flexDir="column" mt="24">
      <Heading pb="4">This page cannot be found (aka 404 error)</Heading>
      <NextLink href="/" passHref>
        <Link>
          <Heading>HOME PAGE</Heading>
        </Link>
      </NextLink>
    </Center>
  )
}
