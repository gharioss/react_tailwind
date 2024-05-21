import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Welcome from './views/welcome/Welcome';
import Footer from './components/footer/Footer';
import ImagePicker from './components/cards/details/ImagePicker';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/painting/:id" element={<ImagePicker />}></Route>
        <Route path="/sign-in" element={<Register />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
