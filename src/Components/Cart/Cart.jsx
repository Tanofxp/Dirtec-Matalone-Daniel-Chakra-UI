import { 
    Box,
    Heading,
    Center,
    Text,
    Image,
    Button,
    Icon,
    Stack,
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
    <Box alignContent='center' margin={5} mt={5} h={{base: 'auto', md: '50px', lg: 'auto'}}  padding={5} w={{base: 'auto', md: '50px', lg: 'auto'}} border={'solid'} rounded={'lg'} >
        <Center h='auto'>
        <Heading mb={5} fontSize={{base: 'sm', md: 'sm', lg: '3xl'}}>Finalizaste Tu Compra </Heading>
        </Center>
        {cart.map((item)=> {
                    return(
        <Center >
                <Stack>
                        <Box border={'solid'} rounded={'lg'} m={5} p={3} key={item.id} h={{ base: '220px', sm: '80px', lg: '400px' }} w={{ base: '300px', sm: '80px', lg: '400px' }}>
                            
                            <Image m={'auto'} rounded={'md'} alt={'product image'} src={item.imgURL} h={{ base: '50px', sm: '80px', lg: '200px' }} w={{ base: '50px', sm: '80px', lg: '250px' }}/>
                            <Text>Modelo: {item.Modelo}</Text>
                            <Text>Cantidad: {item.cantidad}</Text>
                            <Text mb={2}>Precio ${item.subTotal.toLocaleString({style: 'currency',currency: 'ARS', minimumFractionDigits: 2})}</Text>
                            <Button  onClick={()=>{removeItem(item.id)}} colorScheme="red"><Icon as={IoTrashOutline}/></Button>
                            
                        </Box>
                </Stack>
        </Center>
                    )
                    })
                }
        <Center>
        <Text>Precio Total : {precioTotal().toLocaleString({style: 'currency',currency: 'ARS', minimumFractionDigits: 2})}</Text>
        </Center>
        <Center mt={5}>
        <Button as={Link} to="/checkout" me={5} color={'green.500'} >Finalizar La compra</Button>
        <Button onClick={()=>{clear()}}>Vaciar Carrito</Button>
        </Center>
    </Box>))
}
