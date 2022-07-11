import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function TestConsultaColeccion() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const CollectionRef = collection(db, "productos");

    getDocs(CollectionRef).then((snapshot) => {
      const auxArray = snapshot.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      setItems(auxArray);

      //setItem({...snapshot.data(), id: snapshot.id });
    });
    
  }, []);
  
  
  return (
     <Box>{items.map((item)=>(
      <Text key={item.id}>{item.Modelo}</Text>
     ))}</Box>
  );
}
