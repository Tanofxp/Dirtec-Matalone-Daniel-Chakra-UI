import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { Text, Spinner, HStack, Center, } from '@chakra-ui/react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'


export default function ItemDetailContainer()  {
	const [productoList, setProductoList] = useState([])
	const [loading, setLoading] = useState(true);
	let { id } = useParams();

useEffect(() => {
    async function getItem(){
        const db = getFirestore();
        const lenovoRef = doc(db, 'productos', id)
    	let details = getDoc(lenovoRef).then((snapshot)=>{
            setProductoList({...snapshot.data(), id: snapshot.id });
            
        })
		
		await details
		setLoading(false)
		}
	getItem()

	}, [id])

	return (
		loading ? (
			<Center mt={12}>
				<HStack margin={'auto'}>

					<Spinner size="xl"/> <Text>Loading...</Text>

				</HStack>
			</Center>
		) : (		
		<ItemDetail productoList={productoList} />
		)
)
}
