import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box, Text, Spinner, useColorModeValue } from '@chakra-ui/react'

export default function ItemDetailContainer({id, Modelo, Marca, precio, imgURL, Descripcion})  {

	const [detailsList, setDetailsList] = useState([]);
	const [loading, setLoading] = useState(true);
	const spinnerColor = useColorModeValue('yellow.400', 'blue.500');
	const spinnerEmptyColor = useColorModeValue('gray.400', 'gray.200');

	useEffect(() => {
        
        let details = Descripcion

		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(details);
			}, 2000);
		}).then((res) => {
			setDetailsList(res);
			setLoading(false);
		});
	}, [Descripcion]);

	return loading ? (
        <Box align='center' mt={250}>
        	<Spinner thickness='4px' speed='0.65s' emptyColor={spinnerEmptyColor} color={spinnerColor} size='xl' /> 
        	<Text>Cargando...</Text>
        </Box>
	) : (
		<Box>
			<ItemDetail id={id} Modelo={Modelo} imgURL={imgURL} details={detailsList} Marca={Marca} precio={precio}/>
		</Box>
)
}
