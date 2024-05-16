import React from 'react';

const reviews = [
  {
    userImageUrl: 'https://via.placeholder.com/48',
    userName: 'John Doe',
    text: 'This product is amazing! I highly recommend it.',
    rating: 5,
    date:"2 may 2024"
  },
  {
    userImageUrl: 'https://via.placeholder.com/48',
    userName: 'Jane Smith',
    text: 'I\'ve been using this for a few months, and I\'m really satisfied with the results.',
    rating: 4,
    date:"2 may 2024"

  },
  {
    userImageUrl: 'https://via.placeholder.com/48',
    userName: 'Bob Johnson',
    text: 'It\'s a decent product, but I expected better performance.',
    rating: 3,
    date:"2 may 2024"

  },
];

const Reviews = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img
                  src={review.userImageUrl}
                  alt={review.userName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{review.userName}  <span className='text-sm font-extralight'> - {review.date}</span></h3>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{review.text}</p>
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                {Array.from({ length: review.rating }, (_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">{review.rating}/5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;