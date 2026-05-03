'use client'
import { toast } from 'react-toastify';

const BookDetails = ({ book }) => {
    const handleBorrow = () => {
        toast.success("Congratulations! You just borrowed a book!!!");
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-base-200 px-4 m-5 py-10'>
            <div className="card grid grid-cols-1 md:grid-cols-2 max-w-3xl w-full bg-base-100 shadow-xl rounded-2xl">
                <div className='p-10'>
              <figure className="h-[300px] overflow-hidden">
    <img 
        src={book.image_url}
        alt={book.title}
        className="h-full object-center rounded-md"
    />
</figure>
</div>

               
                <div className="card-body space-y-4">

                  
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        {book.title}
                    </h2>

                    <p className='text-lg text-gray-500 font-medium'>
                        By {book.author}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="badge badge-soft badge-info badge-outline px-3 py-2">
                            {book.category}
                        </span>
                        <span className="badge  badge-soft badge-success badge-outline px-3 py-2">
                            {book.available_quantity} available
                        </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-semibold">
                        {book.description}
                    </p>
                    <div className="pt-4 items-center">
                        <button 
                            onClick={handleBorrow} 
                            className='btn bg-blue-500 hover:bg-blue-600 text-white font-semibold tracking-wide rounded-lg shadow-md hover:shadow-lg'>
                            Borrow This Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;