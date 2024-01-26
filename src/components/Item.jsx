import React from 'react'
import { Card, CardBody, Heading, Stack, Text, Divider, CardFooter, Button, ButtonGroup, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ titulo, descripcion, categoria, id, precio }) => {
  return (
      <div>
          <Card maxW='sm'>
              <CardBody>
                  <Heading size='md'>{titulo}</Heading>
                  <Stack mt='6' spacing='3'>
                      <Text>
                          {descripcion}
                      </Text>
                      <Text color="teal.700" fontWeight="bold">
                          {categoria}
                      </Text>
                      <Text color='blue.600' fontSize='2xl'>
                          ${precio}
                      </Text>
                  </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                  <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                        <Link to={`/item/${id}`}>Ver mas</Link>
                      </Button>
                  </ButtonGroup>
              </CardFooter>
          </Card>
      </div>
  )
}
export default Item;