import React, { useEffect,useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {SimpleGrid} from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemListContainer() {
  const [productoList, setProductoList] = useState([])
  let { Marca } = useParams();
  
  useEffect(() => {
    const db = getFirestore();

    const CollectionRef = collection(db, "productos");

    getDocs(CollectionRef).then((snapshot) => {
      const auxArray = snapshot.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      
      setProductoList(auxArray)
    });
    
    let arrayFiltradoMarca = productoList.filter((item) => item.Marca === Marca);

  }, [ Marca])

  function onAdd(){
    alert("Agregaste los Items al carrito")
  }
  
  
  return (
    
      <>
        <SimpleGrid minChildWidth='400px' spacing='10px'>
            <ItemList  productList={productoList} onAdd={onAdd}/>
        </SimpleGrid> 
    </> 
  )
}
