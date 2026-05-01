import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Bookcard = ({book}) => {
    return (
        <div className="h-full">
            <div key={book.id} className="card bg-base-100 shadow-sm h-full flex flex-col">
                <figure className="px-4 pt-4">
                    <img
                        src={book.image_url}
                        alt={book.title}
                        className="rounded-xl h-[200px] object-cover" 
                    />
                </figure>
                <div className="card-body flex flex-col flex-grow">
                    <h2 className="card-title">{book.title}</h2>
                    <p className="flex-grow">{book.description}</p>
                    <div className="card-actions justify-end mt-4">
                       <Link href={`/allbooks/${book.id}`}><button className="btn bg-blue-300">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookcard;