import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Welcome from './views/welcome/Welcome';
import Footer from './components/footer/Footer';
import ImagePicker from './components/cards/details/ImagePicker';
import Register from './components/Register';
import Cart from './components/Cart';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  return (
    <BrowserRouter>
      <Navbar toggleCart={toggleCart} />
      {showCart && (
          <Transition
          show={showCart}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <Cart ref={ref} toggleCart={toggleCart} />
          )}
        </Transition>
      )}
      
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/painting/:id" element={<ImagePicker />} />
        <Route path="/sign-in" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
