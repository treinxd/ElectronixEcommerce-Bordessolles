import React, { useState } from 'react'
import { ButtonGroup, Button, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const mensajeCompra = () => {
        alert(`Agregaste ${contador} unidades al carrito`)
    }

    const aumentar = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }


    return (
        <ButtonGroup size='md' isAttached variant='outline'>
            <IconButton onClick={restar} icon={<MinusIcon/>} />
            <Button>{contador}</Button>
            <IconButton onClick={aumentar} icon={<AddIcon/>} />
            <Button variant='solid' colorScheme='blue' onClick={mensajeCompra}>
                Añadir al carrito
            </Button>
        </ButtonGroup>
    )
}

export default ItemCount