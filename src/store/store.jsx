import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import notificationsReducer from './notificationsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    notifications: notificationsReducer,
  },
});
