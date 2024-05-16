import React, { useState } from 'react';
import ProductCard from '../ProductBox/ProductCard';
import useCartStore from '../../../store';

const products = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfZbdLIYu6a57W8xYChY132vgPTmRXrq5rw&s',
    rating: 4,
    price: 19.99,
    weight: { value: 500, unit: 'g' },
    popularity: 10,
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvwg8SWEO_RnUGBu58DfM5-_s4kYIYFJq4Q&s',
    rating: 3,
    price: 24.99,
    popularity: 8,
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfZbdLIYu6a57W8xYChY132vgPTmRXrq5rw&s',
    rating: 4.3,
    price: 23.99,
    weight: { value: 500, unit: 'g' },
    popularity: 20,
  },
  {
    id: 4,
    name: 'Product 4',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvwg8SWEO_RnUGBu58DfM5-_s4kYIYFJq4Q&s',
    rating: 4.7,
    price: 34.99,
    popularity: 30,
  },
];


const ProductList = () => {

  const addToCart = useCartStore((state) => state.addToCart);


  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  
const handleAddToCart = (product) => {

  addToCart(product)

};

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'popularity') {
      return b.popularity - a.popularity;
    } else if (sortOption === 'priceHighToLow') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });


  const cart = useCartStore((state) => state.cart);

  console.log("cart", cart);

  return (
    <div className="w-[85%] mx-auto my-3">
    <div className="flex justify-between mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="py-2 px-4 border border-gray-300 rounded-lg w-1/2"
      />
      <div className="relative">
        <select
          value={sortOption}
          onChange={handleSort}
          className="py-2 px-4 border border-gray-300 rounded-lg appearance-none"
        >
          <option value="">Sort by</option>
          <option value="popularity">Popularity</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  </div>
  );
};

export default ProductList;