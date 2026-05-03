import React from 'react';

const reviews = [
  {
    name: "John Doe",
    text: "They have all the good books"
  },
  {
    name: "Jane Doe",
    text: "Incredible books at great price"
  },
  {
    name: "Alex Smith",
    text: "This makes reading easier, I don't waste time on doom scrolling"
  }
];

const Review = () => {
  return (
    <div className='bg-base-200 py-16 px-4 container mx-auto'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold'>What Readers Say</h2>
          <p className='text-gray-500 mt-2'>Real experiences from our members</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {reviews.map((review, index) => (
            <div 
              key={index}
              className='bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300'
            >
              <div className="text-4xl text-blue-400 mb-3">“</div>
              <p className='text-gray-600 leading-relaxed mb-6'>
                {review.text}
              </p>
              <div className='border-t pt-3 flex justify-between items-center'>
                <h3 className='font-semibold'>{review.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Review;