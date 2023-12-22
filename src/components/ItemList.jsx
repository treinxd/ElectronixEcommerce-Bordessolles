import React from 'react'
import Item from './item'
import { Heading, Flex, } from '@chakra-ui/react'; 

const ItemList = ({ productos, titulo}) => {
  return (
    <div className="">
            <Heading textAlign="center" my="50px">{(titulo)}</Heading>
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

export default ItemList