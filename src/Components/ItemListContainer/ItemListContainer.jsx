import React, { useEffect,useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {SimpleGrid, HStack, Spinner, Text, Center} from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [productoList, setProductoList] = useState([])
  let { Marca } = useParams();
  
  useEffect(() => {
    
    const db = getFirestore();
    const CollectionRef = collection(db, "productos");

    if (Marca){    

      getDocs(CollectionRef).then((prod) => {         
        const auxList = prod.docs.map(item => ({...item.data(), id: item.id}));
        setProductoList(auxList.filter((el) => el.Marca === Marca))
				setLoading(false)
      })
    }else{
			getDocs(CollectionRef).then((el) => {         
        const auxList = el.docs.map(item => ({...item.data(), id: item.id})); 
        setProductoList(auxList)
				setLoading(false)
			})
		}
  
  }, [Marca])

  return loading ? (
		<Center mt={12}>
				<HStack margin={'auto'}>

					<Spinner size="xl"/> <Text>Loading...</Text>

				</HStack>
			</Center>
	    ) : (
      <>
        <SimpleGrid minChildWidth='400px' spacing='10px'>
            <ItemList  productList={productoList}/>
        </SimpleGrid> 
    </> 
  )
}
