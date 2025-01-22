// import React from 'react'
import { Car } from 'lucide-react';
const Header = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <Car size={34} className="text-blue-600" />
                        <h1 className="text-2xl font-bold text-gray-900">Car Management System</h1>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header