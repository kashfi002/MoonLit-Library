import Image from 'next/image';
import React from 'react';
import Bookcard from './Bookcard';
const getTopBooks = async () => {
    const res=await fetch("https://moon-lit-library.vercel.app/data.json");
    const books=await res.json();
    const topBooks=books.slice(7,11);
    return topBooks;
}
const TopBooks = async () => {
const books=await getTopBooks();
    return (
        <div className='container mx-auto m-5'>
            <h2 className='text-3xl font-bold'>Featured Books</h2>
            <div className='grid grid-cols-2 gap-8'>
            {
                books.map((book) => 
                <Bookcard key={book.id} book={book}></Bookcard>
            )
            }
           </div>
        </div>
    );
};

export default TopBooks;