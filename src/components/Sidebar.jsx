import { useState } from 'react';
import { FaHome, FaSearch, FaStoreAlt } from 'react-icons/fa';
import { GiCellarBarrels } from 'react-icons/gi';
import { LiaWineBottleSolid } from 'react-icons/lia';
import { LuMenuSquare } from 'react-icons/lu';
import { PiWineDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
    return (
        <nav
            aria-label="Sidebar"
            className={`
                fixed h-full flex-col items-center bg-gray-900
                transition-all duration-300 z-10 ease-in-out
                w-16 hover:w-64 group flex
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
                    <Link to="/shop/page/1" className="px-3 flex items-center w-full">
                        <FaStoreAlt className="w-6 h-6 mr-2" />
                        <span className="hidden group-hover:inline lg:inline">Shop</span>
                    </Link>
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

