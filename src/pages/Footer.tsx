import React from "react";
import logo from '../assets/logo.png';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#F4F6F8] text-[#1E1E2F] border-t border-[#E0E0E0] px-6 py-6 mt-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left: Social links */}
                <div className="flex items-center text-md font-bold space-x-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-9 w-auto"
                    />
                    <p className='bg-gray-50 text-[#1E1E2F]'>Portfolio</p>
                </div>

                {/* Right: Logo or name */}
                <p className="text-sm text-center md:text-left">
                    © {new Date().getFullYear()} All rights reserved.
                </p>


            </div>
        </footer>
    );
};
