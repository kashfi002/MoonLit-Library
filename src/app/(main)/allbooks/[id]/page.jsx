import React from 'react';
const BookDetailsPage = async({params}) => {
    const {id}=await params;
    const res=await fetch("https://moon-lit-library.vercel.app/data.json");
    const data=await res.json();
    const selectedBook=data.find(d=> d.id==id)
    return (
        <div className='container mx-auto m-5'>
            <div key={selectedBook.id} className="card bg-base-100 shadow-sm h-full flex flex-col">
                <figure className="px-4 pt-4">
                    <img
                        src={selectedBook.image_url}
                        className="rounded-xl h-[200px] object-cover" 
                    />
                </figure>
                <div className="card-body flex flex-col flex-grow">
                    <h2 className="card-title text-3xl font-bold">{selectedBook.title}</h2>
                    <h2 h2 className='text-2xl font-semibold'>By:{selectedBook.author}</h2>
                    <div className="badge badge-soft badge-info">{selectedBook.category}</div>
                    <p className="flex-grow">{selectedBook.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;