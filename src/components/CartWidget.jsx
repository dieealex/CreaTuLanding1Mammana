// src/components/CartWidget.jsx
import { Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <Flex align="center">
      <FaShoppingCart size={24} />
      <span style={{ marginLeft: '5px' }}>3</span>
    </Flex>
  );
};

export default CartWidget;