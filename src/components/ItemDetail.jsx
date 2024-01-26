// itemdetail.jsx

import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, CardFooter, Container, Heading, Stack, Text } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <Container maxW='960px'>
      <Breadcrumb spacing='8px' color='gray.500'>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>{item.categoria}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Stack>
          <CardBody>
            <Heading size='md'>{item.titulo}</Heading>
            <Text py='2'>{item.descripcion}</Text>
            <Text py='2'>{item.id}</Text>
            <Text fontSize="1.2rem" fontWeight="bold" color="teal.400">Precio: $ {item.precio}</Text>
          </CardBody>
          <CardFooter>
            <ItemCount item={item} />
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  );
};

export default ItemDetail;
