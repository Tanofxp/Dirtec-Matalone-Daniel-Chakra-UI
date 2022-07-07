import React from 'react'
import {
  Box,
  Center,
  useColorModeValue,
  Stack,
  Image,
  Badge,
  Flex,
  Text,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';

const data = {
  isNew: true,
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 2.3,
  numReviews: 34,
};


  

function Rating({ rating, numReviews }) {
  return (
    <Box display='flex' mt='2' mr={5} alignItems='center'>
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

export default function Item({ Modelo, Marca, precio, imgURL, onAdd , id , Descripcion}) {

  
  return (

        <Center py={10}>
          <Box
            as={RouterLink} 
            to={"/item/" + id}
            role={'group'}
            py={10}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('yellow.300', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={0}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${imgURL})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                m={'auto'}
                rounded={'lg'}
                height={250}
                width={300}
                objectFit={'cover'}
                src={imgURL}
              />
            </Box>
            <Stack pt={10} align={'center'}>
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight">
                  <Text color={'blue.500'} fontSize={'xl'} textTransform={'uppercase'}>{Modelo}</Text>
                </Box>
              </Flex>
              <Flex justifyContent="space-between" alignContent="center">
                <Rating rating={data.rating} numReviews={data.numReviews} />
                <Box mt={2} fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                  <Box as="span" color={'gray.600'} fontSize="lg">
                    $
                  </Box>
                  {precio}
                </Box>
              </Flex>
            </Box>
          </Stack>
          </Box>
        </Center>
      );
    }
  

