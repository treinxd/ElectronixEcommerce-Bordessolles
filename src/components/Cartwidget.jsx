import React from 'react'
import { CgShoppingCart } from "react-icons/cg";
import { Box} from '@chakra-ui/react';


const Cartwidget = () => {
  return (
    <Box display="flex" alignItems="center">
      <CgShoppingCart />
      <Box marginLeft="2">
        1
      </Box>
    </Box>
  )
}

export default Cartwidget