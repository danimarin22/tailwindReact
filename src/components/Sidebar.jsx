import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaBars, FaBell, FaHome, FaSearch, FaUserCircle } from 'react-icons/fa';
import { GiCellarBarrels } from 'react-icons/gi';
import { LiaWineBottleSolid } from 'react-icons/lia';
import { LuMenuSquare } from 'react-icons/lu';
import { PiWineDuotone } from 'react-icons/pi';

export default function Sidebar({ sidebarToggle }) {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
    return (
        <nav
            aria-label="Sidebar"
            className={`
                ${sidebarToggle ? 'hidden' : 'flex'}
                fixed h-full flex-col items-center bg-gray-900
                transition-all duration-300 z-10 ease-in-out
                w-16 hover:w-64 group 
                ${isSidebarVisible ? 'justify-between' : 'justify-center'}
            `}
            onMouseOver={() => setIsSidebarVisible(true)}
            onMouseLeave={() => setIsSidebarVisible(false)}
        >
            <div className="my-2 mb-4 flex items-center justify-center w-full">
                <LuMenuSquare className="w-10 h-10 text-orange-300" />
                <h1 className={`text-2xl text-white font-bold ml-2 ${isSidebarVisible ? 'block' : 'hidden'}`}>
                    CruRated
                </h1>
            </div>
            <ul className={`w-full flex-col items-center mt-3 text-white font-bold ${isSidebarVisible ? 'block' : 'hidden'}`}>
                <li className="mb-2 rounded hover:shadow hover:text-orange-300 hover:bg-rose-900 py-2 w-full">
                    <a href="/" className="px-3 flex items-center w-full">
                        <FaHome className="w-6 h-6 mr-2" />
                        <span className="hidden group-hover:inline lg:inline">Home</span>
                    </a>
                </li>
                <hr className="border-gray-600 w-full" />
                <li className="mb-2 rounded hover:shadow hover:text-orange-300 hover:bg-rose-900 py-2 w-full">
                    <a href="/collections" className="px-3 flex items-center w-full">
                        <LiaWineBottleSolid className="w-6 h-6 mr-2" />
                        <span className="hidden group-hover:inline lg:inline">Collections</span>
                    </a>
                </li>
                <hr className="border-gray-600 w-full" />
                <li className="mb-2 rounded hover:shadow hover:text-orange-300 hover:bg-rose-900 py-2 w-full">
                    <a href="/barrels" className="px-3 flex items-center w-full">
                        <GiCellarBarrels className="w-6 h-6 mr-2" />
                        <span className="hidden group-hover:inline lg:inline">Barrels</span>
                    </a>
                </li>
                <hr className="border-gray-600 w-full" />
                <li className="mb-2 rounded hover:shadow hover:text-orange-300 hover:bg-rose-900 py-2 w-full">
                    <a href="/singleLots" className="px-3 flex items-center w-full">
                        <PiWineDuotone className="w-6 h-6 mr-2" />
                        <span className="hidden group-hover:inline lg:inline">Single Lots</span>
                    </a>
                </li>
                <hr className="border-gray-600 w-full" />
            </ul>
            <div className={`relative p-3 w-full flex items-center justify-center ${isSidebarVisible ? 'block' : 'hidden'}`}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FaSearch className="w-4 h-4 ml-4 text-gray-500" />
                </span>
                <input
                    type="text"
                    placeholder="Explore CruRated"
                    className="w-full px-4 py-2 pl-10 rounded bg-gray-800 text-white focus:outline-none"
                />
            </div>
        </nav>
    );
}

Sidebar.propTypes = {
    sidebarToggle: PropTypes.bool.isRequired,
};












export function Navbar({ sidebarToggle, setSidebarToggle }) {
    return (
        <nav className="bg-gray-900 px-4 py-3 flex justify-between">
            <div className="flex items-center text-xl">
                <FaBars className="text-white me-4 cursor-pointer"
                    onClick={() => setSidebarToggle(!sidebarToggle)} />
                <span className="text-white font-semdibold">CruRated</span>
            </div>
            <div className="flex items-center gap-x-5">
                <div className="relative md:w-65">
                    <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2 ">
                        <button className="p-1 focus:outline-none text-white md:text-black">
                            <FaSearch />
                        </button>
                    </span>
                    <input type="text" className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block" />
                </div>
                <div className="text-white">
                    <FaBell className="w-6 h-6" />
                </div>
                <div className="relative">
                    <button className="text-white group">
                        <FaUserCircle className="w-6 h-6 mt-1" />
                        <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
                            <ul className="py-2 text-sm text-gray-950">
                                <li><a href="">Profile</a></li>
                                <li><a href="">Setting</a></li>
                                <li><a href="">Log Out</a></li>
                            </ul>
                        </div>
                    </button>
                </div>

            </div>
        </nav>
    )
}

Navbar.propTypes = {
    sidebarToggle: PropTypes.bool.isRequired,
    setSidebarToggle: PropTypes.func.isRequired,
};