import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box, Text, Spinner, HStack } from '@chakra-ui/react'

export default function ItemDetailContainer({id, Modelo, Marca, precio, imgURL, Descripcion})  {

  const [detailsList, setDetailsList] = useState([]);
	const [loading, setLoading] = useState(true);

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
		<HStack>
			<Spinner size="xl" /> <Text>Cargando...</Text>
		</HStack>
	) : (
		<Box>
		  <ItemDetail id={id} Modelo={Modelo} imgURL={imgURL} details={detailsList} Marca={Marca} precio={precio}/>
		</Box>
)
}
