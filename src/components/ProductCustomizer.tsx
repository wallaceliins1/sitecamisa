import React, { useState } from 'react';
import { Palette, ShoppingBag, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ImageGenerator from './ImageGenerator';

interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

const ProductCustomizer = () => {
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedSize, setSelectedSize] = useState('M');
  const { dispatch } = useCart();

  const colors = ['white', 'black', 'navy', 'gray'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `custom-tshirt-${Date.now()}`,
        name: 'Custom T-Shirt',
        price: 29.99,
        color: selectedColor,
        size: selectedSize,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400',
        quantity: 1
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Design</h2>
          <ImageGenerator />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customize Product</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? 'border-indigo-600' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ShoppingBag className="mr-2" size={20} />
              Add to Cart - $29.99
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizer;