import React from 'react';
import { Spinner, Flex } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex height="100vh" align="center" justify="center">
      <div>
        <Spinner 
          thickness="4px"
          speed="0.65s"
          empty-color="green.200"
          color="vue.500"
          size="xl"
        />
      </div>
    </Flex>
  );
};

export default Loader;
