"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

export default function RegisterPage() {
    const handleRegister = async (e) => {
        e.preventDefault();

        // Now e.target refers to the FORM, which contains the inputs
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo=e.target.photo.value;
        
        const {data,error}=await authClient.signUp.email({
            name,
            email,
            photo,
            password
        })
        if (error) {
            console.error("Error:", error);
            toast.error(error);
        }
    }
    const handleGoogleSignIn = async () => {{
            await authClient.signIn.social({
                provider: "google",
            });
        }
    }
    return (
        <form onSubmit={handleRegister} className='flex justify-center items-center mt-10 mb-20'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <h2 className="font-bold text-2xl text-center">Register</h2>

                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" required />
                
                <label className="label">Upload Photo</label>
                <input type="url" name='photo' className="input"/>

                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" required />

              <div className="flex gap-2 mt-4">
                   <Link href={"/login"}><button type="submit" className="btn bg-blue-300">Register</button></Link> 
                    <button type="reset" className="btn bg-gray-300">Reset</button>
                </div>
                 <button onClick={handleGoogleSignIn} className="btn">Sign up with Google</button>
                <div className="divider text-xs">OR</div>
                <p className="text-center">Already have an account?</p>
                <button><Link href="/login" className="btn bg-blue-300 btn-sm mt-2">Log In</Link></button>
            </fieldset>
        </form>
    );
};