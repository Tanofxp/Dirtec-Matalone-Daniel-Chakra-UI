import React, { useContext, useState } from 'react'
import { Box, Button, Center, Heading, Input,} from '@chakra-ui/react'
import { CartContext } from '../../Context/CartContext/CartContext'
import { addDoc, collection, getFirestore} from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function CheckOut() {

    const { cart,  precioTotal, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    let navigate = useNavigate()
    
    async function handleClickComprar(){
        let auxCarrito = cart.map((item)=>{
            let aux = {
                Id: item.id,
                Modelo: item.Modelo,
                cantidad: item.cantidad,
                precio: item.precio.toLocaleString({style: 'currency',currency: 'ARS', minimumFractionDigits: 2})
            }
        return {...aux}
        })
        
        const fecha = new Date();
        let pedido = {
            ticket:{
                nombre: nombre,
                telefono: tel,
                email: email
            },
            carrito: auxCarrito,
            total: precioTotal().toLocaleString({style: 'currency',currency: 'ARS', minimumFractionDigits: 2}),
            date: fecha,
            }        
            if(nombre === '' || email === '' || tel === ''|| cart.length === 0){
                Swal.fire({
                    title: 'Cuidado',
                    text: '"Todos los campos son obligatorios y tiene que tener productos en su carro para poder continuar, Gracias',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                })
                return;
            }else{
        const db = getFirestore();
        const CollectionRef = collection(db,'Ventas');

        await addDoc(CollectionRef, pedido).then(({id})=>
        Swal.fire({
            title: 'Felicitaciones',
            text: 'Su numero de compra es '+id+' Muchas gracias por su compra',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
        );

        clear()
        return navigate("/")
            }

    }
    




    
  return (
    <Center mt={10}>
    <Box>
        <Heading fontSize={{base: 'sm', md: 'sm', lg: '3xl'}}>Complete los Campos para terminar su compra</Heading>
        <br></br>
        <Input id='nombre' onChange={(e) => setNombre(e.target.value)} type={'text'} placeholder={'Ingrese su Nombre '} ></Input>
        <br></br>
        <br></br>
        <Input onChange={(e) => setTel(e.target.value)} type={'tel'} placeholder={'Ingrese su Telefono '}  ></Input>
        <br></br>
        <br></br>
        <Input id='email' onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder={'Ingrese su Email '} ></Input>
        <br></br>
        <br></br>
        <Button type='submit' onClick={handleClickComprar}>Comprar!</Button>
    </Box>
    </Center>
            
    
  );
}

