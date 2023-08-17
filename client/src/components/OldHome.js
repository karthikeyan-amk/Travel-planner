// src/components/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="scroll-smooth md:scroll-auto">
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="bg-gray-800 text-white py-6 text-center">
                <h1 className="text-3xl font-semibold">"Explore, Share, and Manage Your Journeys with Ease"</h1>
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="max-w-screen-md mx-auto p-6 bg-white shadow-md mt-6">
                    <div className="mb-6">
                        <p>Welcome to our Travel Expense Manager web app!</p>
                        <p className="mt-2">Track your expenses during travel, split costs with friends, share locations, and create schedules effortlessly.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-1 overflow-y-auto">
                <div className="max-w-screen-md mx-auto p-6 bg-white shadow-md mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Expense Tracking</h2>
                            <p>Keep a record of your expenses and split them with ease.</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Location Sharing</h2>
                            <p>Share locations with travel partners for seamless navigation.</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Schedule Creation</h2>
                            <p>Create and manage travel itineraries and schedules hassle-free.</p>
                        </div>
                    </div>
                <p className="mt-6">Experience the convenience of managing your travel plans with our user-friendly Travel Expense Manager web app.</p>
                </div>
            </div>
        </div>

        <div className="bg-gray-800 text-white py-2 text-center">
            <p>Contact us at: contact@travelexpenseapp.com</p>
        </div>
    </div>
);
};

export default HomePage;
