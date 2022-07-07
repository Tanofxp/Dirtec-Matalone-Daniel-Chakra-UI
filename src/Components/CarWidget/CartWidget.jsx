import { Box, Icon } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi';
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

export default function CartWidget() {
  return (

    <Box as={RouterLink} 
    to={"/cart/"}><Icon  w={10} h={8} mt={2} mr={2} as={FiShoppingCart} /></Box>
  )
}
