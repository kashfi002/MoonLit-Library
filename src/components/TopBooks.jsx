import Image from 'next/image';
import React from 'react';
const getTopBooks = async () => {
    const res=await fetch("https://moon-lit-library.vercel.app/data.json");
    const books=await res.json();
    const topBooks=books.slice(7,11);
    return topBooks;
}
const TopBooks = async () => {
const books=await getTopBooks();
    return (
        <div>
            <h2>Featured Books</h2>
            {
                books.map((book) => 
                <div key={book.id} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={book.image_url}
      height={200}
      width={200}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{book.title}</h2>
    <p>{book.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            )
            }
           
        </div>
    );
};

export default TopBooks;