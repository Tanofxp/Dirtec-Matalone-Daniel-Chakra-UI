import React, { useEffect,useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {SimpleGrid, HStack, Spinner, Text, Center} from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [productoList, setProductoList] = useState([])
  const [catalogo, setCatalogo] = useState([])
  let { Marca } = useParams();
  
  useEffect(() => {
    async function getItems(){
    const db = getFirestore();

    const CollectionRef = collection(db, "productos");

    await getDocs(CollectionRef).then((snapshot) => {
      const auxArray = snapshot.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      setCatalogo(auxArray)
    });
    }
    
    getItems()
    let arrayFiltradoMarca = catalogo.filter((item) => item.Marca === Marca);

    if(Marca !== undefined){
        setProductoList(arrayFiltradoMarca)
        setLoading(false)
    }else{
      setProductoList(catalogo)
      setLoading(false)
    }
  

  }, [Marca, catalogo])

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
