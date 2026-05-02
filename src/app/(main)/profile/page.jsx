"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) return <div className="text-center mt-20">Loading...</div>;
  if (!user) return <div className="text-center mt-20">Please log in.</div>;

  return (
    <div className="max-w-2xl mx-auto my-20 p-6">
      <div className="card bg-base-100 shadow-xl border border-gray-100">
        <div className="card-body items-center text-center">
          
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
          <div className="w-full space-y-4 mt-4 text-left">
            <div className="p-4 bg-blue-50 rounded-lg">
              <span className="text-xs font-semibold text-blue-600 uppercase block">Name</span>
              <p className="text-lg font-medium">{user.name}</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <span className="text-xs font-semibold text-blue-600 uppercase block">Email</span>
              <p className="text-lg font-medium">{user.email}</p>
            </div>
            
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;