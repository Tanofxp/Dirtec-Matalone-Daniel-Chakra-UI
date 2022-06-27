import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Box, Text, Image } from '@chakra-ui/react'

export default function ItemDetail({id, Modelo, Marca, precio, imgURL, details}) {

    function onAdd(){
        alert("Agregaste los Items al carrito")
    }


    return (
        <>
        <br/>

        <Box> 
        <Text fontWeight='bold' mb='1rem'>
            Modelo: {Modelo}
            <br></br>
            ID del producto: {id}
            <Image
            m={'auto'}
            rounded={'lg'}
            height={150}
            width={200}
            objectFit={'cover'}
            src={imgURL}
            />
            Precio: ${precio}
        </Text>
        <Text>
        Descripcion: {details}
        </Text>
        </Box>
        <br></br>
        <Box borderWidth='2px' borderRadius='lg' width='200px' p={5} m='auto' borderColor='gray.500'>
            <ItemCount Stock={20} initial={1} onAdd={onAdd}/>
        </Box>

        </>
        )
}
