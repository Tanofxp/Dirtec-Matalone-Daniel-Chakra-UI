import React, { useEffect,useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {Box, Text, Spinner, SimpleGrid, useColorModeValue} from '@chakra-ui/react';


export default function ItemListContainer() {
  const [productoList, setProductoList] = useState([])
  const [loading, setLoading] = useState(true)
  const spinnerColor = useColorModeValue('yellow.400', 'blue.500');
  const spinnerEmptyColor = useColorModeValue('gray.400', 'gray.200');
  let { id } = useParams();
  
  useEffect(() => {
    const producto = [
      { id: 1, Modelo: 'Thinkpad X1' ,           Marca: 'Lenovo ', precio: 413.999, imgURL: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-series-thumbnail.png?context=bWFzdGVyfHJvb3R8ODExMzV8aW1hZ2UvcG5nfGhjZC9oMGYvMTQwNzA2NzQ1ODc2NzgucG5nfDg2NTMzNzNlMThiMDI3ZGU0NzY1YmViNmQ4YmU2YjJjNjE3MmU2NDRmNWZlMTczMmY4Mzk5NTUwMGM1NzdjNDM" ,Descripcion: "Laptop con potencia y portabilidad de primera calidad - Trabaja como nunca antes con la laptop ThinkPad X1 Carbon 9na Gen - Procesadores hasta Intel® Core™ i7 de 11va generación y Evo® opcional - Chasis ultradelgado y ultraliviano, y una batería de mayor duración - Impresionante pantalla de 14” 16:10, opcional táctil en algunos modelos - PC lista para trabajar e impulsar tu negocio" },
      { id: 2, Modelo: 'Thinkpad X1 Fold' ,      Marca: 'Lenovo ', precio: 323.999, imgURL: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-fold-front.png?context=bWFzdGVyfHJvb3R8OTc2MzB8aW1hZ2UvcG5nfGhjMy9oYjQvMTQyNzc5ODU3MzA1OTAucG5nfDhkNDM2NjBmODcxYjRlODM4NmZmZjNmZmI3M2JhNTFlMjBlMDA1ODdmOTk4MGQ5YjhjMWY5ZDdlNTU0NmNlYWM" ,Descripcion: "La primera PC plegable del mundo - Potenciada por procesadores Intel® Core™ con tecnología Intel Hybrid y Windows 10 - Úsala y llévala como nunca antes fue posible: opciones de pantalla dividida, o pantalla enorme - Mejora tu experiencia con el lápiz, teclado o mouse y auriculares especiales (opcionales) - Ganadora de 43 premios CES: revolucionará tu manera trabajar, jugar, crear y conectarte" },
      { id: 3, Modelo: 'Thinkpad E15' ,          Marca: 'Lenovo ', precio: 206.999, imgURL: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-e14-gen-2-series.png?context=bWFzdGVyfHJvb3R8ODAxOTN8aW1hZ2UvcG5nfGg5OS9oMmIvMTQxMDY5MjIwNTc3NTgucG5nfDY1Y2UyNTBkYjFlYzIxMTE2ZmU4YjYxNjU5YmQxMjEzZjMzMDAwNTg4Yzg5NmIwNmE3NzM4NDE3NjYzMWJkNjk" ,Descripcion: "Tu mejor aliada para brillar - Laptop equipada con procesadores hasta Intel® Core™ i7 de 11va gen - Pantalla FHD de 15.6” hasta IPS y 300 nits; táctil opcional Diseñada con características más smart - Almacenamiento en unidad dual y lector de huellas digitales opcionales - Segura y confiable - Ideal para profesionales en movimiento" },
      { id: 4, Modelo: 'Thinkpad 100e' ,         Marca: 'Lenovo ', precio: 98.999, imgURL: "https://www.lenovo.com/medias/lenovo-100e-windows-front.png?context=bWFzdGVyfHJvb3R8MjI5MTN8aW1hZ2UvcG5nfGhkMC9oZWEvOTg5NzM3MDU1MDMwMi5wbmd8ZTMxODY1YTJkY2UxZjY3NjBlMGFmMWYwNTM3ZjBlOGZkNjc0YzgwNmY5MjE4MmVmZGRjMmFiZDlmMWQyZWRkYg" ,Descripcion: "Una portátil con clase - La portátil 100e de 2da generación con Windows no te decepcionará si lo que necesitas es un equipo robusto que aguante el ritmo de la clase. Este dispositivo de 11.6 incluye acceso a miles de aplicaciones educativas para estudiantes y profesores " },
      { id: 5, Modelo: 'Thinkpad IdeaPad Flex 5' , Marca: 'Lenovo ', precio: 196.999, imgURL: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-flex-5-14inch-amd-front.png?context=bWFzdGVyfHJvb3R8MTAwMTM4fGltYWdlL3BuZ3xoNzYvaGQ4LzE0MTkwNTQ4Mzg1ODIyLnBuZ3wwYTQ0NDc2ZTcxYzU3OGI4ZjExMjZiZmU4ZjQ0NmNkYjA4ZmY0NmY0ZTQ1YjUxYmJiZDMxZDY3ODJiMGQyN2Y5" ,Descripcion: "Una 2 en 1 para un estilo de vida versátil - Equipada con procesadores hasta AMD Ryzen™ 7 Mobile y tarjeta gráfica Radeon™ - Productividad en un diseño flexible para que lo utilices como quieras - Pantalla de 14” FHD hasta IPS y 250 nits" },
      { id: 6, Modelo: 'Thinkpad IdeaPad 5i' ,   Marca: 'Lenovo ', precio: 100.999,  imgURL: "https://www.lenovo.com/medias/lenovo-laptops-ideapad-5i-14-series.png?context=bWFzdGVyfHJvb3R8MTAwMTg5fGltYWdlL3BuZ3xoMGUvaDUwLzE0Mjc4MDA5NjE4NDYyLnBuZ3wyN2VhY2JjYTAxZjdmMmQ4NDI4OTMxN2VlMzhkODhjNWFmZmRmZTNiZWVmMGY2MTE4MDAyMGZjMTIwZjZkZGJl" ,Descripcion: "Adaptada a tu estilo de vida - Procesamiento premium Intel® Core™ hasta 12va generación - Pantalla de 14” hasta FHD con bordes delgados & gráficos NVIDIA® GeForce opcionales - Obturador de privacidad para la webcam y lector de huellas opcional - Dolby Audio™ hará que tu música o película favorita suenen de maravilla - Incluye 1 puerto USB-C & soporta la tecnología Rapid Charge, que carga tu batería en muy poco tiempo - La pantalla, algunos puertos/ranuras pueden variar; el lector de huellas y la retroiluminación del teclado son opcionales – colores sujetos a disponibilidad." }
    ];
    
    let arrayFiltrado = producto.filter((item) => item.id === id);
    
    new Promise((resolve) => {
      setTimeout(() => {
          if(id === undefined){
            resolve(producto)
          } else{
            
            
            resolve(arrayFiltrado)
            
          }

      }, 2000);
    }).then((res)=>{
        setProductoList(res)
        setLoading(false)
    })
    

  }, [id])

  function onAdd(){
    alert("Agregaste los Items al carrito")
  }
  

  return (
    
      <>
      { loading ? 
        <Box align='center' mt={250}>
          <Spinner thickness='4px' speed='0.65s' emptyColor={spinnerEmptyColor} color={spinnerColor} size='xl' /> 
          <Text>Cargando...</Text>
        </Box> 
        : <SimpleGrid minChildWidth='400px' spacing='10px'>
            <ItemList  productList={productoList} onAdd={onAdd}/>
          </SimpleGrid> }
    </> 
  )
}
