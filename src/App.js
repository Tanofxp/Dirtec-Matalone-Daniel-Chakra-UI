import { Box } from '@chakra-ui/react'
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
  <> 
    <BrowserRouter>
  <Box className="text-center menu">
    <Box> <NavBar /></Box>
    <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
  </Box>
    </BrowserRouter>
  </>
  );
}

export default App;
