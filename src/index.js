import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme";
import CartProvider from './Context/CartContext/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRNzsdCLY87wEKgrmD7QqP_rxMw1upK_o",
  authDomain: "dirtec-b0aa2.firebaseapp.com",
  projectId: "dirtec-b0aa2",
  storageBucket: "dirtec-b0aa2.appspot.com",
  messagingSenderId: "1067740999888",
  appId: "1:1067740999888:web:3450473bb8cb64ba73aed5"
};
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  //  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
