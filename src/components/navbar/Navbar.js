import React from "react";
import { LuShoppingCart, LuMessageCircle } from "react-icons/lu";

import { Link } from 'react-router-dom';

const Navbar = ({ onCartClick, onMessageClick, token, setToken }) => {

  const handleLogOut = async (e) => {
    e.preventDefault();
    
    localStorage.removeItem("muriel_painting_website_connected");
    setToken('');

    console.log("grhgr", token)
};

  return (
    <nav className="flex justify-between px-20 py-10 items-center bg-white sticky top-0">
        <Link to="/" className="text-xl text-gray-800 font-bold">Muriel Napoli</Link>
        <div className="flex items-center">
            <ul className="flex items-center space-x-6">
            <button onClick={onMessageClick} className="font-semibold text-gray-700">
              <LuMessageCircle className="h-6 w-6" />
            </button> 
            <button onClick={onCartClick} className="font-semibold text-gray-700">
              <LuShoppingCart className="h-6 w-6" />
            </button>
            {token !== '' ? (
              <Link to="/sign-in" className="font-semibold text-gray-700">Register  |  Login</Link>

            ) : <button className="font-semibold text-gray-700" onClick={handleLogOut}>Log out</button>}
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
