import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Notifications from './components/Notifications/Notifications';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setProducts } from './store/productsSlice';
import { setNotifications } from './store/notificationsSlice';
import { Layout } from 'antd';
import './App.css';


const { Header, Content, Sider } = Layout;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch(setProducts(data)));

    fetch('/notifications/all')
      .then(res => res.json())
      .then(data => dispatch(setNotifications(data)));
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Header className='header'><h3 className='text'>Header with Nav</h3></Header>
          <Layout>
            <Sider className='sider'><h3 className='text_sider'>Sider with Nav</h3></Sider>
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/notifications/all" element={<Notifications />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
