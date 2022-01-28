import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat'
  },
  styles: {
    global: {
      body: {
        bg: 'c.white',
        color: 'gray.50'
      }
    }
  }
})