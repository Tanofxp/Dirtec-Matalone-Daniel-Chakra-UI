import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Box, Text, Image } from '@chakra-ui/react'

export default function ItemDetail({productoList}) {

    function onAdd(){
        alert("Agregaste los Items al carrito")
    }
    
    return (

        <Box alignContent="center" margin={'auto'} mt={5} h={'auto'} padding={5} w={700} border={'solid'} rounded={'lg'}>
        <Text fontSize='3xl' fontWeight='bold' mb='1rem'>
            Modelo: {productoList.Modelo}
            <br></br>
            ID del producto: {productoList.id}
            <Image
            m={'auto'}
            rounded={'lg'}
            height={250}
            width={300}
            objectFit={'cover'}
            src={productoList.imgURL}
            />
            Precio: ${productoList.precio}
        </Text>
        <Text mb={2}>
        Descripcion: {productoList.Descripcion}
        </Text>
        <Box borderWidth='2px' borderRadius='lg' width='200px' p={3} m='auto' borderColor='gray.500'>
            <ItemCount Stock={20} initial={1} onAdd={onAdd}/>
        </Box>
        </Box>
        
        )
}
