import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Box, Text, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'


export default function ItemDetail({productoList}) {

    const { addItem } = useContext(CartContext);


    function onAdd(added){
        addItem({...productoList, cantidad: added, subTotal: productoList.precio*added})
        alert("Agregaste "+ added +" productos al carrito")
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
            Precio: ${productoList.precio.toLocaleString({style: 'currency',currency: 'ARS', minimumFractionDigits: 2})}
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
