import React from 'react';
import Item from '../Item/Item';

export default function ItemList({productList, onAdd}) {
    
  return (
    <>
      {
          productList.map((item) =>(
              <Item key={item.id} id={item.id} Modelo={item.Modelo} Marca={item.Marca} precio={item.precio} imgURL={item.imgURL} Descripcion={item.Descripcion} onAdd={onAdd} productoList={productList}/>
            ))
      }
    </>
  )
}
