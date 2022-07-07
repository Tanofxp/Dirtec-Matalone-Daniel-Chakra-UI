import { 
    Box,
    Heading,
    Center,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image,
    Button,
    Icon,
        } from '@chakra-ui/react'
import React from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import { useContext } from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { FaSadTear } from "react-icons/fa";
import { Link } from 'react-router-dom';




export default function Cart() {
    const { cart, removeItem, precioTotal, clear } = useContext(CartContext);
    
    
    return (
         cart.length === 0?(
            <>
            <Center>
            <Heading mt={10}>Tu carrito esta Vacio</Heading>
            </Center>
            <Center>
            <Icon mt={20} h={20} w={20} as={FaSadTear}/> 
            </Center>
            <Center mt={10}>
                    <Button as={Link} to="/">Volver</Button>
            </Center>
            
            </>
            ) : (
    <Box alignContent='center' margin={'auto'} mt={5} h={'auto'} padding={5} w={1000} border={'solid'} rounded={'lg'} >
        <Center h='auto'>
        <Heading mb={5}>Finalizaste Tu Compra </Heading>
        </Center>
        <Center>
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Precio Total : {precioTotal().toLocaleString({style: 'currency',currency: 'ARS', minimumFractionDigits: 2})} </TableCaption>
                <Thead>
                <Tr>
                    <Th>Producto</Th>
                    <Th>Modelo</Th>
                    <Th>Cantidad</Th>
                    <Th>Precio</Th>
                </Tr>
                </Thead>
                <Tbody>
                {cart.map((item)=> {
                    return(
                    <Tr key={item.id}>
                        <Td><Image rounded={'md'} alt={'product image'} src={item.imgURL} h={{ base: '80px', sm: '80px', lg: '80px' }} /></Td>
                        <Td>{item.Modelo}</Td>
                        <Td>{item.cantidad}</Td>
                        <Td>${item.subTotal.toLocaleString({style: 'currency',currency: 'ARS', minimumFractionDigits: 2})}</Td>
                        <Td><Button onClick={()=>{removeItem(item.id)}} colorScheme="red"><Icon as={IoTrashOutline}/></Button></Td>
                    </Tr>
                    )
                    })
                }
                </Tbody>
            </Table>
            </TableContainer>
            
        </Center>
        <Center mt={5}>
        <Button onClick={()=>{clear()}}>Vaciar Carrito</Button>
        </Center>
    </Box>))
}
