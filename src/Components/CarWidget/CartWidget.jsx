import { Button, Icon, Text } from '@chakra-ui/react'
import { MdShoppingCart } from "react-icons/md";
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext';
import { useContext } from 'react';

export default function CartWidget() {
  const { totalItem } = useContext(CartContext);
  return (

    <Button as={RouterLink} to={"/cart/"}>
      <Icon as={MdShoppingCart} />
      {totalItem() === 0 ? (<></>) : ( <Text ml={2}>{totalItem()}</Text> ) }
      
    </Button>
  )
}
