import { 
    Box,
    Heading,
    Center
        } from '@chakra-ui/react'
import React from 'react'
import CartContext from '../CartContext/CartContext'

export default function Cart() {
    return (

    <Box alignContent='center' margin={'auto'} mt={5} h={'auto'} padding={5} w={1000} border={'solid'} rounded={'lg'} >
        <Center h='100px'>
        <Heading>Finalizaste Tu Compra</Heading>
        </Center>
        <Center h='100px'>
        <CartContext />
        </Center>
    </Box>
    )
}
