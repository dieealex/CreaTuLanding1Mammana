// src/components/CartWidget.jsx
import { Flex, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <Flex alignItems="center" cursor="pointer">
      <FaShoppingCart size="25" />
      <Text ml="5px" fontWeight="bold">0</Text>
    </Flex>
  );
};

export default CartWidget;