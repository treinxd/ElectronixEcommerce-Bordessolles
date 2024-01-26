import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Card, CardHeader, Heading, CardBody, Stack, Image, Text, CardFooter, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Cart = () => {

  const { cart, TotalCarrito, vaciarCart, eliminarProducto } = useContext(CartContext);

  const handleVaciarCart = () => {
    vaciarCart()
  }


  return (
    <div>
      
      <Card >
          <CardHeader>
              <Heading size='md'>Carrito de compras</Heading>
          </CardHeader>

          <CardBody>
              
              {
                cart.map ((elec) => (
                  
                <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                key={elec.id}
                className='cardDeCart'
                >
                  <Stack className='stackDeCart'>
                    <CardBody>
                      <Heading size='md'>{elec.titulo}</Heading>

                      <Text py='0.5'>
                        Categoria: {elec.categoria}
                      </Text>
                      <Text py='0.5'>
                       Precio por unidad: ${elec.precio}
                      </Text>
                      <Text py='0.5'>
                       Cantidad: {elec.contador}
                      </Text>
                    </CardBody>

                    <CardFooter className='botonEliminarProducto'>
                      <Button variant='solid' colorScheme='blue'  
                      onClick={() => eliminarProducto(elec.id)} >
                        Eliminar producto
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
                ))
              }
                
          </CardBody>
      </Card>

      
      {
        cart.length > 0 ? 
        <>
            <Text fontSize='2xl' className='precioTotalCarrito'>Precio Total: ${TotalCarrito()}</Text>
            <Stack direction='row' spacing={4} align='center'>
              <Button colorScheme='teal' variant='solid' onClick={handleVaciarCart} >
                Vaciar Carrito
              </Button>
              <Link to={"/carrito/compra"}>
                <Button colorScheme='teal' variant='solid'>
                  Finalizar compra
                </Button>
              </Link>
            </Stack>
        </>
      : 
      <Stack spacing={3}>
      
      <Text fontSize='2xl'>El carrito se encuentra vacio...</Text>

      <Link to={"/"} >
        <Button colorScheme='teal' variant='solid' onClick={handleVaciarCart} >
          Ver productos
        </Button>
      </Link>
      
      </Stack>
      }

    </div>
  )
}

export default Cart