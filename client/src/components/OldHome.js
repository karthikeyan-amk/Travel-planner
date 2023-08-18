// src/components/HomePage.js
import React from 'react';
const Home = () => {
  return (
    <div className="scroll-smooth md:scroll-auto">
        <div className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://i.pinimg.com/564x/c5/68/13/c568136fe40419824af608382323c65d.jpg')" }}>
            <div className="text-black text-center">
                <h1 className="text-6xl font-bold mb-4">Travel Manager</h1>
                <p className="text-4xl font-bold mb-8">Explore, Share, and Manage Your Journeys with Ease</p>
                <div>
                    <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full">
                    Log In / Sign Up
                    </a>
                </div>
            </div>
        </div>
     </div>
);
};

export default Home;
