import Bookcard from '@/components/Bookcard';
import Category from '@/components/Category';
import React from 'react';
const getAllBooks = async () => {
    const res=await fetch("https://moon-lit-library.vercel.app/data.json");
    const data=await res.json();
    return data;
}
const AllBooksPage = async({searchParams}) => {
    const {category}=await searchParams;
    const books=await getAllBooks();

    const filteredBooks= category? books.filter(book=>book.category.toLowerCase()==category.toLowerCase()):books;
    return (
        <div className='container mx-auto m-5'>
          <h2 className='text-3xl font-bold'>All Books</h2>
          <Category></Category>
           <div className='grid grid-cols-2 gap-8'>
            {
                filteredBooks.map((book) => 
                <Bookcard key={book.id} book={book}></Bookcard>
            )
            }
        </div>
        </div>
    );
};

export default AllBooksPage;