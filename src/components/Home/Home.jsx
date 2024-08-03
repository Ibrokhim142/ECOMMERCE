import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { Card, Button } from 'antd';

const Home = () => {
  const products = useSelector(state => state.products.products);
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {products.map(product => {
        const inCart = cartItems.some(item => item.id === product.id);
        return (
          <Card key={product.id} title={product.title} bordered={false}>
            <p>{product.description}</p>
            <Button
              type="primary"
              onClick={() => handleAddToCart(product)}
              disabled={inCart}
            >
              {inCart ? 'In Cart' : 'Add to Cart'}
            </Button>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
