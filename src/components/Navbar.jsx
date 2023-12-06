import React from 'react';
import Cartwidget from './Cartwidget';
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <div>
      <Flex bg='blue.500' p='4' >
        <Box>
          ElectronixEcommerce
        </Box>
        <Spacer />

        <Menu>
          <MenuButton>
            <Box mr='4'>
              Categorias
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>PC</MenuItem>
            <MenuItem>Perifericos</MenuItem>
            <MenuItem>Celular</MenuItem>
            <MenuItem>Xbox</MenuItem>
            <MenuItem>Playstation</MenuItem>
          </MenuList>
        </Menu>

        <Box mr='4'>
          Informacion
        </Box>

        <Box mr='4'>
          Contacto
        </Box>

        <Box mr='4'>
          <Cartwidget />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
