import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { Box} from '@chakra-ui/react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'


export default function ItemDetailContainer()  {
	const [productoList, setProductoList] = useState([])
	let { id } = useParams();

useEffect(() => {
    
        const db = getFirestore();
        const lenovoRef = doc(db, 'productos', id)
        getDoc(lenovoRef).then((snapshot)=>{
            setProductoList({...snapshot.data(), id: snapshot.id });
            
        })
    

	}, [id])

	return (
		<Box>
		<ItemDetail productoList={productoList} />
		</Box>
)
}
