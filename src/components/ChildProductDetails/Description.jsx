import React from 'react'

const productData = {
  name: 'Luminous Silk Foundation',
  description: 'A lightweight, buildable foundation that gives skin a natural, radiant finish.',
  price: 48,
  imageUrl: 'https://via.placeholder.com/500x500',
  shades: ['Ivory', 'Beige', 'Honey', 'Caramel', 'Mocha'],
  reviews: [
    {
      text: 'This foundation is amazing! It blends seamlessly and provides great coverage without looking cakey.',
      rating: 5,
    },
    {
      text: 'I love the luminous finish this foundation gives. It makes my skin look glowy and healthy.',
      rating: 4,
    },
    {
      text: 'The shade range could be better, but overall a great product.',
      rating: 4,
    },
  ],
};

function Description() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div>
        <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>
        <p className="text-gray-700 mb-6">{productData.description}</p>
        <div className="mb-6">
          <span className="text-2xl font-semibold">${productData.price}</span>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Available Shades:</h2>
          <ul className="list-disc list-inside">
            {productData.shades.map((shade, index) => (
              <li key={index} className="text-gray-700">
                {shade}
              </li>
            ))}
          </ul>
        </div>
        <div>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default Description