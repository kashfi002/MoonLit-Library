import React from 'react';
import Marquee from 'react-fast-marquee';
const bannerPath = "/assets/banner-image.jpg";
const getNews = async () => {
    const res=await fetch("https://moon-lit-library.vercel.app/newarrival.json");
    const data=await res.json();
    return data;
}
const Header = async () => {
    const books=await getNews();
    return (
        <div>
       <div className='container mx-auto my-4'  
            style={{
               backgroundImage: `url(${bannerPath})`,
                height: "80vh",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <h1 className='text-5xl font-bold text-white mb-4'>Find Your Next Read</h1>
            <button className='btn btn-primary'>Browse Now</button>
        </div>
        <div className='container mx-auto flex bg-gray-100 p-2'>
            <button className='btn bg-blue-300 text-white'>New Arrivals: </button>
             <Marquee pauseOnHover={true} speed={100}>{
                books.map((book)=>
                    <span key={book.id} className="mx-3 font-semibold"> {book.title} </span>
                )
                } <span className="mx-6 font-semibold"> Special Discount on Membership!!! </span></Marquee>
        </div>
        </div>
    );
};

export default Header;