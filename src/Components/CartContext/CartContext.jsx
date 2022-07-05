import React from 'react'
import { 
    Box,
    Text,
    Heading,
    Center,
        } from '@chakra-ui/react'

export default function CartContext() {
  return (
    <Box border={'solid'} padding={2}>
    <Center>
    <Heading>Esto es el CartContext</Heading>
    </Center>
    <Center>
    <Text>Aca tenemos que poner los items y la cantidades que has comprado cara pija !</Text>
    </Center>
    </Box>
  )
}
