import Bookcard from '@/components/Bookcard';
import React from 'react';
const getAllBooks = async () => {
    const res=await fetch("https://moon-lit-library.vercel.app/data.json");
    const data=await res.json();
    return data;
}
const AllBooksPage = async() => {
    const books=await getAllBooks();
    return (
        <div className='container mx-auto m-5'>
          <h2 className='text-3xl font-bold'>All Books</h2>
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

export default AllBooksPage;