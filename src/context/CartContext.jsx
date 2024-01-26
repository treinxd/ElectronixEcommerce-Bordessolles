import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const cantidadCarrito = () => {
      return cart.reduce ((acc, elec) => acc + elec.contador, 0);
    }

    const TotalCarrito = () => {
      return cart.reduce ((acc, elec) => acc + elec.precio * elec.contador, 0)
    }
    
    const vaciarCart = () => {
      setCart([])
    }

    const eliminarProducto = (id) => {
      setCart(cart.filter((elec) => elec.id !== id));
    }

    return(
        <CartContext.Provider value={{cart, setCart, cantidadCarrito, TotalCarrito, vaciarCart, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider