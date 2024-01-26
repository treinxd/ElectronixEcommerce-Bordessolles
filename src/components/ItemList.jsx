import React from 'react'
import Item from './Item';
import { Flex, Heading } from '@chakra-ui/react';

const ItemList = ({ productos }) => {
  return (
    <div className="">
      <Heading textAlign="center" my="50px">Productos Disponibles</Heading>
      <Flex gap="10px" justify="center" direction="row" wrap="wrap" align="end">
        {productos.map((p) => (
          <Item
            key={p.id}
            titulo={p.titulo}
            descripcion={p.descripcion}
            precio={p.precio}
            categoria={p.categoria}
            id={p.id}
          />
        ))}
      </Flex>
    </div>
  )
}

export default React.memo(ItemList)