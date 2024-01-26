import React from 'react'
import { CgShoppingCart } from "react-icons/cg";
import { Link, Box } from '@chakra-ui/react';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cartwidget = () => {

  const {cantidadCarrito} = useContext(CartContext)

  return (
    <div className="divCartWidget">

        <Link to={"/cart"}>
          <Box display="flex" alignItems="center">
            <CgShoppingCart />
            <Box marginLeft="2">
              {cantidadCarrito()}
            </Box>
          </Box>
        </Link>
        
    </div>
  )
}

export default Cartwidget