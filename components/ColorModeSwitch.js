import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"

/**
 * ColorModeSwitch.
 *
 * @returns {import("react").ReactElement} Button to change theme using ChakraUI
 */
const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(<SunIcon />, <MoonIcon />)
  return (
    <Button aria-label="Change theme" variant="ghost" onClick={toggleColorMode}>
      {icon}
    </Button>
  )
}

export default ColorModeSwitch
