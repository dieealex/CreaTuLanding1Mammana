// src/components/NavBar.jsx
import { Flex } from '@chakra-ui/react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Flex justify="space-between" align="center" padding="10px" backgroundColor="lightgray">
      <h1>MiTienda</h1>
      <nav>
        <a href="#">Inicio</a> | <a href="#">Productos</a> | <a href="#">Contacto</a>
      </nav>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
