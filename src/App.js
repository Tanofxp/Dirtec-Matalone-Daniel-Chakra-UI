import { Box } from '@chakra-ui/react'
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import TestConsulta from './Components/FireBase/TestConsulta';
import TestConsultaColeccion from './Components/FireBase/TestConsultaColeccion';

function App() {
  
  return (
    <BrowserRouter>
      <Box className="text-center menu">
        <Box> <NavBar /></Box>
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:Marca' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/consulta" element={<TestConsulta />}/>
              <Route path="/consultaColeccion" element={<TestConsultaColeccion />}/>
          </Routes>
        </Box>
    </BrowserRouter>
  );
}

export default App;
