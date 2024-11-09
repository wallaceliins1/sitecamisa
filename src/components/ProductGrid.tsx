import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      name: 'Hoodie',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      name: 'Phone Case',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 4,
      name: 'Canvas Print',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Products</h2>
          <p className="text-lg text-gray-600">Choose from our selection of customizable items</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-lg font-bold text-indigo-600">${product.price}</p>
                  <button className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    <ShoppingBag size={16} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;