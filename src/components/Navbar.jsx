'use client';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
  const userData=authClient.useSession();
  const user=userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className='container mx-auto flex'>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><NavLink href={"/"}>Home</NavLink></li>
        <li><NavLink href={"/allbooks"}>All Books</NavLink></li>
        <li><NavLink href={"/profile"}>My Profile</NavLink></li>
      </ul>
    </div>
   <Link href={"/"} className="btn btn-ghost normal-case text-2xl font-black"><span
    className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        MoonLit Library</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center gap-2">
      <li><NavLink href={"/"}>Home</NavLink></li>
        <li><NavLink href={"/allbooks"}>All Books</NavLink></li>
        <li><NavLink href={"/profile"}>My Profile</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
    !user && <ul className='flex gap-4'>
 <Link href="/register"><button className='btn bg-blue-300'>Register</button></Link>
     <Link href="/login"><button className='btn bg-gray-300'>Log In</button></Link>
    </ul>
    }
    {
      user && <ul className='flex gap-4'>
       <div className="avatar mb-4">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {user.image ? (
                <img 
                  src={user.image} 
                  alt={user.name} 
                  onError={(e) => {
                    // Fallback if URL is broken
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${user.name}`;
                  }}
                />
              ) : (
                <div className="bg-neutral text-neutral-content flex items-center justify-center h-full text-3xl">
                  {user.name?.charAt(0)}
                </div>
              )}
            </div>
          </div>
        <button className='btn bg-red-500 text-white' onClick={handleSignOut}>Sign Out</button>
      </ul>
    }
    
  </div>
</div>
</div>
    );
};

export default Navbar;