import Link from 'next/link';
import React from 'react';

const Category = async() => {
    const res=await fetch('https://moon-lit-library.vercel.app/category.json');
    const categories = await res.json();
    return (
        <div className='flex justify-center items-center gap-5 m-10'>
            {
                categories.map((category)=>{
                    return(<Link key={category.id} 
                        href={`?category=${category.category.toLowerCase()}`}><button className='btn btn-info rounded-xl'>{category.category}</button></Link>)
                })
            }
        </div>
    );
};

export default Category;