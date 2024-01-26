import React, { useState, useContext } from 'react';
import { ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { CartContext } from '../context/CartContext';


const ItemCount = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);
  const [contador, setContador] = useState(0);

  const mensajeCompra = () => {
    alert(`Agregaste ${contador} unidades al carrito`);
  };

  const aumentar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const agregaralCarrito = () => {
    if (!item || typeof item.id === 'undefined') {
      console.error('Item or item.id is undefined.');
      return;
    }
  
    const itemAgregado = { ...item, contador };
  
    const newCart = [...cart];
    const estaEnElCarrito = newCart.find((producto) => producto.id === item.id);
  
    if (estaEnElCarrito) {
      console.log("Esta en el carrito");
      estaEnElCarrito.contador = estaEnElCarrito.contador + contador;
      setCart(newCart);
      console.log(cart);
    } else {
      console.log("No está en el carrito");
      setCart([...cart, itemAgregado]);
      console.log(cart);
    }
  };
  
  

  return (
    <ButtonGroup size='md' isAttached variant='outline'>
      <IconButton onClick={restar} icon={<MinusIcon />} />
      <Button>{contador}</Button>
      <IconButton onClick={aumentar} icon={<AddIcon />} />
      <Button variant='solid' colorScheme='blue' onClick={agregaralCarrito}>
        Añadir al carrito
      </Button>
    </ButtonGroup>
  );
};

export default ItemCount;
