import React, {useState, useEffect} from 'react'
import { Box, Button, ButtonGroup, IconButton, Text, useColorModeValue} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const ItemCount = ({Stock, initial, onAdd}) => {

    let [auxStock, setauxStock] = useState(initial);


    function moreItems(){
        setauxStock( auxStock < Stock ? auxStock+1 : auxStock=Stock )
    }

    function lessItems(){
        setauxStock( auxStock > 1 ? auxStock-1 : auxStock=1 )
    }

    useEffect(() => {
        if(auxStock===Stock){
            alert("El Stock máximo es: " + Stock)
        }
        // eslint-disable-next-line
    }, [auxStock])
    

    return (
        <>
        <Box borderWidth='1px' 
        overflow='hidden' 
        width='165px' 
        align='center' 
        margin='auto' 
        borderRadius='lg'
        bg={useColorModeValue('yellow.50', 'gray.800')}
        >
        <ButtonGroup margin='auto' size='sm' isAttached variant='outline'>
            <IconButton onClick={()=>{lessItems()}} icon={<MinusIcon />} />

            <Text width="100px"
            py={1} 
            color={useColorModeValue('gray.600', 'white')}>
                {auxStock}
            </Text>
            <IconButton onClick={()=>{moreItems()}} icon={<AddIcon />} />
        </ButtonGroup>
        </Box>
        <Box align='center'>
        <Text size='sm' mt={2}>Stock: {Stock} </Text>
        
        <Button mt={3} mb={2} width='160px' onClick={onAdd} colorScheme='blue'>Agregar al Carrito</Button>
        </Box>
        </>
    )
}

export default ItemCount
    
