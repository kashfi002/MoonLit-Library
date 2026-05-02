"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

export default function LogInPage() {
    const handleLogIn = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        }, {
            onSuccess: () => {
                window.location.href = "/"; 
            }
        });

        console.log({ data, error });
    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className='flex flex-col items-center mb-20'>
            <form onSubmit={handleLogIn} className='flex justify-center items-center mt-10 mb-10'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h2 className="font-bold text-2xl text-center">Sign In</h2>

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />

                    {/* ✅ No Link wrapper here */}
                    <button type="submit" className="btn bg-blue-300 mt-4">Log In</button>
                </fieldset>
            </form>
            <button onClick={handleGoogleSignIn} className="btn">Sign in with Google</button>
        </div>
    );
}