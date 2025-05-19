// src/components/NavBar.jsx
import { Flex, Text } from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="10px 20px"
      width="100vw"
      bg="gray.100"
    >
      <Text fontSize="2xl" fontWeight="bold">
        MiTienda
      </Text>

      <Flex gap="20px">
        <Text cursor="pointer">Productos</Text>
        <Text cursor="pointer">Nosotros</Text>
        <Text cursor="pointer">Contacto</Text>
      </Flex>

      <CartWidget />
    </Flex>
  );
};

export default NavBar;
