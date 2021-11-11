import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(<SunIcon />, <MoonIcon />)
  return (
    <Button variant="ghost" onClick={toggleColorMode}>
      {icon}
    </Button>
  )
}

export default ColorModeSwitch
