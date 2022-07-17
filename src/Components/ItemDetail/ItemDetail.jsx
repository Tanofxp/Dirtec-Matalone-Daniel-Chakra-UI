import React from 'react'
import Swal from 'sweetalert2'
import ItemCount from '../ItemCount/ItemCount'
import { Box, Text, Image, Center} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'



export default function ItemDetail({productoList}) {
    
    const { addItem } = useContext(CartContext);
    

    function onAdd(added){
        
        Swal.fire({
            title: 'Felicidades',
            text: 'Has agregado '+added+ ' productos a tu carro',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })

        addItem({...productoList, cantidad: added, subTotal: productoList.precio*added})
        
    }
    
    
    return (
        <Center>
        <Box alignContent="center" margin={'5px'} mt={3} h={{base: 'auto', md: '50px', lg: 'auto'}} padding={5} w={{base: 'auto', md: '50px', lg: '700px'}} border={'solid'} rounded={'lg'}>
        <Text fontSize={{base: 'sm', md: 'sm', lg: '3xl'}} fontWeight='bold' mb='1rem'>
            Modelo: {productoList.Modelo}
            <br></br>
            ID del producto: {productoList.id}
            <Image
            m={'auto'}
            rounded={'lg'}
            height={{base: '140px', md: '50px', lg: '250px'}}
            width={{base: '140px', md: '50px', lg: '300px'}}
            objectFit={'cover'}
            src={productoList.imgURL}
            />
            Precio: ${parseInt(productoList.precio).toLocaleString({style: 'currency',currency: 'ARS', minimumFractionDigits: 2})}
        </Text>
        <Text mb={2}>
        Descripcion: {productoList.Descripcion}
        </Text>
        <Box borderWidth='2px' borderRadius='lg' width={{base: '200px', md: '50px', lg: '200px'}} p={3} m='auto' borderColor='gray.500'>
            <ItemCount Stock={20} initial={1} onAdd={onAdd}/>
        </Box>
        </Box>
        </Center>
        
        )
}
