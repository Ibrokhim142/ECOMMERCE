import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../store/cartSlice/';
import { List, Button } from 'antd';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={item => (
          <List.Item
            actions={[
              <Button onClick={() => dispatch(incrementQuantity(item))}>+</Button>,
              <Button onClick={() => dispatch(decrementQuantity(item))}>-</Button>,
              <Button onClick={() => dispatch(removeFromCart(item))} danger>
                Remove
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={`Quantity: ${item.quantity}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;
