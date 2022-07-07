import React from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({children}) {
    
    const [cart, setCart] = useState([]);

    const isInCart = (itemId) => {
        return cart.find((item)=> item.id === itemId)
    }
    
    function addItem(item) {
        let newItem = []
        
        
        
        if(isInCart(item.id)){
            newItem = cart.map((itemDup)=>{
                if(itemDup.id === item.id){
                return {...itemDup, cantidad: itemDup.cantidad + item.cantidad, subTotal: itemDup.precio * (itemDup.cantidad + item.cantidad)};
            }else{return null}; 
            })
        } else{
            newItem = cart.concat(item)
        }
        
        setCart (newItem)
    }


    function removeItem(itemId) {
        let cartFilter = cart.filter((item)=> item.id !== itemId )
            setCart(cartFilter)
        
    }
    

    function clear() {
        setCart([])
    
    }

    function totalItem(){
        let total = 0
            total = cart.reduce((prev, next) => prev + next.cantidad, 0);
        return total;
    }
    function precioTotal(){
        
        const total = cart.reduce((prev, next) => prev + next.subTotal, 0);
        return total;
    }



        
    
    
    return (
        <>
            <CartContext.Provider value={{cart, addItem, clear, totalItem, removeItem, precioTotal}}>
                {children}
            </CartContext.Provider>
        </>
    );
    }
