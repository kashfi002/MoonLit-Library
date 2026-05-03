import React from 'react';

const JoinUs = () => {
    return (
        <div className="bg-base-200 py-20 px-4 m-20 container mx-auto ">
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-3xl md:text-4xl font-bold">
                    Join the MoonLit Community
                </h2>
                <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                    Get updates on new books, top picks, and exclusive recommendations.
                </p>
                <button className='btn bg-blue-300 m-8'>Join Now</button>
                <p className="text-sm text-gray-400 mt-4">
                    No spam. Just good books.
                </p>

            </div>
        </div>
    );
};

export default JoinUs;