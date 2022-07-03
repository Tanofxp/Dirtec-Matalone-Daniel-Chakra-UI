import { 
    Box,
    Heading,
    Text,
    Center
        } from '@chakra-ui/react'
import React from 'react'

export default function Cart() {
    return (

    <Box alignContent='center' margin={'auto'} mt={5} h={'auto'} padding={5} w={1000} border={'solid'} rounded={'lg'} >
        <Text></Text>
        <Center h='100px'>
        <Heading>Finalizaste Tu Compra</Heading>
        </Center>
        <Center h='100px'>
        <Text>¿No sabés qué comprar? ¡Miles de productos te esperan!</Text>
        </Center>
    </Box>
    )
}
