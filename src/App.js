import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Welcome from './views/welcome/Welcome';
import Footer from './components/footer/Footer';
import ProductDetail from './components/cards/details/ProductDetail';
import Register from './components/Register';
import Cart from './components/Cart';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
  };

  return (
    <BrowserRouter>
      <Navbar onCartClick={toggleCart} onMessageClick={toggleCart} />
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/painting/:id" element={<ProductDetail />} />
        <Route path="/sign-in" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
