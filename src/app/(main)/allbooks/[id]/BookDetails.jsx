'use client'
import { toast } from 'react-toastify';

const BookDetails = ({ book }) => {
    const handleBorrow = () => {
        toast.success("Congratulations! You just borrowed a book!!!");
    };

    return (
        <div className='container mx-auto my-20'>
            <div className="card bg-base-100 shadow-sm h-full flex flex-col">
                <figure className="px-4 pt-4">
                    <img src={book.image_url} className="rounded-xl h-[200px] object-cover" />
                </figure>
                <div className="card-body flex flex-col flex-grow">
                    <h2 className="card-title text-3xl font-bold">{book.title}</h2>
                    <h2 className='text-2xl font-semibold'>By: {book.author}</h2>
                    <div className="badge badge-soft badge-info">{book.category}</div>
                    <div className="badge badge-soft badge-success">{book.available_quantity} books available</div>
                    <p className="flex-grow">{book.description}</p>
                    <button onClick={handleBorrow} className='btn bg-blue-400 rounded-md shadow'>
                        Borrow This Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;