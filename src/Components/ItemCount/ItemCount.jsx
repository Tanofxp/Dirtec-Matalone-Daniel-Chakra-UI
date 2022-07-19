import React, {useState, useEffect} from 'react'
import { Box, Button, ButtonGroup, IconButton, Text, useColorModeValue} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const ItemCount = ({Stock, initial, onAdd}) => {
const [mostratBotonera, SetMostratBotonera] = useState(true);

    let [auxStock, setauxStock] = useState(initial);


    function moreItems(){
        setauxStock( auxStock < Stock ? auxStock+1 : auxStock=Stock )
    }

    function lessItems(){
        setauxStock( auxStock > 1 ? auxStock-1 : auxStock=1 )
    }

    useEffect(() => {
        if(auxStock===Stock){
            Swal.fire({
                title: 'Cuidado',
                text: '"El Stock máximo es: " + Stock',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
            
        }
        // eslint-disable-next-line
    }, [auxStock])
    let agr = document.getElementById('agr')

    return (
        <>
        <Box 
        overflow='hidden' 
        width='165px' 
        align='center' 
        margin='auto' 
        
        bg={useColorModeValue('yellow.50', 'gray.800')}
        >

        </Box>
        <Box align='center'>
        
        
        <Button id='agr' mt={3} mb={2} width='160px' onClick={()=>SetMostratBotonera(!mostratBotonera)+onAdd(auxStock)}  colorScheme='blue'>Agregar al Carrito</Button>
        {mostratBotonera ? (
            
        <ButtonGroup margin='auto' size='sm' isAttached variant='outline'>
            <IconButton onClick={()=>{lessItems()}} icon={<MinusIcon />} />

            <Text width="100px"
            py={1} 
            >
                {auxStock}
            </Text>
            <IconButton onClick={()=>{moreItems()}} icon={<AddIcon />} />
        </ButtonGroup>
        ) : (  
            agr.setAttribute('hidden', true), 
            <Box>    
            <Button as={Link} to="/cart" mt={3} mb={2} ml={2} width="160px" colorScheme="green" >
					Ver Carrito
		    </Button>
            <Button as={Link} to="/" mt={3} mb={2} ml={2} width="160px" colorScheme="blue">
                    Seguir Comprando
            </Button>
            </Box> 
            ) 
        }

        
        <Text size='sm' mt={2}>Stock: {Stock - auxStock} </Text>
        </Box>
        </>
    )
}

export default ItemCount
    
