import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Welcome from './views/welcome/Welcome';
import Footer from './components/footer/Footer';
import ProductDetail from './components/cards/details/ProductDetail';
import Register from './components/Register';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import Message from './components/Message';
import FormPainting from './components/administrator/FormPainting';
import MainAdminPage from './components/administrator/MainAdminPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('muriel_painting_website_connected'));
    console.log('gjurijgir', token)
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
  };

  return (
    <BrowserRouter>
      <Navbar onCartClick={toggleCart} onMessageClick={toggleMessage} token={token} setToken={setToken} />
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      <Message isOpen={isMessageOpen} toggleMessage={toggleMessage} />
      
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/painting/:id" element={<ProductDetail />} />
        <Route path="/sign-in" element={<Register token={token} setToken={setToken} />} />
        <Route path="/add_painting" element={<FormPainting />} />
        <Route path="/administrator" element={<MainAdminPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
