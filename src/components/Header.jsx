import React from 'react';
import headerImg from '../assets/banner-image.jpg';

const Header = () => {
    console.log(headerImg);
    return (
       <div className='container mx-auto my-4'  
            style={{
                backgroundImage: `url(${headerImg.src})`,
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
    );
};

export default Header;