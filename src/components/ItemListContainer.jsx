import React from 'react'
import { Box, Flex} from '@chakra-ui/react';

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <Flex align="center" justify="center" h="100vh">
            <Box>
                {greeting} 
            </Box>
        </Flex>
    </div>
  )
}

export default ItemListContainer