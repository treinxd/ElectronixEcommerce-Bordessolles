import React from 'react';
import Cartwidget from './Cartwidget';
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import img from '../img/img.png';

const NavBar = () => {
  return (
    <div>
      <Flex bg='blue.500' p='4' >
        <Box>
          <Link to={"/"}>
            <img src={img} alt=""/>
          </Link>
        </Box>
        <Spacer />

        <Menu>
          <MenuButton>
            <Box mr='4'>
              Categorias
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to={`/categorias/${'pc'}`}>
                PC
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/categorias/${'xbox'}`}>
                Xbox
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/categorias/${'playstation'}`}>
                Playstation
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Box mr='4'>
          <Link to={"/cart"}>
            <Cartwidget />
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
