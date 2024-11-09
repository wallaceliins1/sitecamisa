import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">PrintLab</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Create</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Products</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Gallery</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Pricing</a>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-indigo-700"
              >
                <ShoppingCart size={20} />
                <span>Cart ({itemCount})</span>
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Create</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Products</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Gallery</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Pricing</a>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 flex items-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>Cart ({itemCount})</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;