import { Box, Icon } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi';
import React from 'react'

export default function CartWidget() {
  return (
    <Box><Icon w={10} h={8} mt={2} mr={2} as={FiShoppingCart}/></Box>
  )
}
