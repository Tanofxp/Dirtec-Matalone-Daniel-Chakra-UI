import React, { useEffect, useState } from 'react'
import { Box,
        Center,
        } from '@chakra-ui/react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'

export default function TestConsulta() {
const [item, setItem] = useState();
    useEffect(() => {
    
        const db = getFirestore();
        const lenovoRef = doc(db, 'productos', 'CNmm6iPuPKT6ffLlwdx1')
        getDoc(lenovoRef).then((snapshot)=>{
            setItem({...snapshot.data(), id: snapshot.id });
            
            console.log(item)
        })
    }, [item])
    
  return (
    <Center mt={5}>
    <Box>TestConsulta</Box>
    </Center>
  )
}
