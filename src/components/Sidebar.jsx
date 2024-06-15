import { useContext, useEffect, useState } from 'react';
import { FaHome, FaSearch, FaStoreAlt } from 'react-icons/fa';
import { GiCellarBarrels } from 'react-icons/gi';
import { LiaWineBottleSolid } from 'react-icons/lia';
import { LuMenuSquare } from 'react-icons/lu';
import { PiWineDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import logo from "../assets/images/Logo2.svg"
import DropUpSearch from './DropUpSearch';
import { TiShoppingCart } from 'react-icons/ti';

export default function Sidebar() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
    const [isDropdownActive, setIsDropdownActive] = useState(true)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        setIsDropdownActive(!searchValue ? false : true)
    }, [searchValue])

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
            <div className={`my-2 mb-4 flex items-center justify-center w-full ${!isDropdownActive ? 'block' : 'hidden'}`}>
                <Link to="/" className='flex '>
                    <img src={logo} className="w-10 h-10 text-orange-300" />
                    <h1 className={`text-2xl mt-1 text-white font-bold ml-2 ${isSidebarVisible ? 'block' : 'hidden'}`}>
                        CruRated
                    </h1>
                </Link>
            </div>
            {isDropdownActive ? <span><DropUpSearch /></span> :
                <ul className={`w-full flex-col items-center mt-3 text-white font-bold ${isSidebarVisible ? 'block' : 'hidden'}`}>
                    <hr className="border-gray-600 w-full" />
                    <li className="mb-2 rounded hover:shadow hover:text-orange-300 hover:bg-rose-900 py-2 w-full">
                        <Link to="/collections" className="px-3 flex items-center w-full">
                            <LiaWineBottleSolid className="w-6 h-6 mr-2" />
                            <span className="hidden font-light group-hover:inline lg:inline">Collections</span>
                        </Link>
                    </li>
                    <hr className="border-gray-600 w-full" />
                    <li className="mb-2 rounded hover:shadow hover:text-orange-300 hover:bg-rose-900 py-2 w-full">
                        <Link to="/barrels" className="px-3 flex items-center w-full">
                            <GiCellarBarrels className="w-6 h-6 mr-2" />
                            <span className="hidden font-light group-hover:inline lg:inline">Barrels</span>
                        </Link>
                    </li>
                    <hr className="border-gray-600 w-full" />
                    <li className="mb-2 rounded hover:shadow hover:text-orange-300 hover:bg-rose-900 py-2 w-full">
                        <Link to="/shop/page/1" className="px-3 flex items-center w-full">
                            <FaStoreAlt className="w-6 h-6 mr-2" />
                            <span className="hidden font-light group-hover:inline lg:inline">Shop</span>
                        </Link>
                    </li>
                    <hr className="border-gray-600 w-full" />
                    <li className="mb-2 rounded hover:shadow hover:text-orange-300 hover:bg-rose-900 py-2 w-full">
                        <Link to="/singleLots" className="px-3 flex items-center w-full">
                            <PiWineDuotone className="w-6 h-6 mr-2" />
                            <span className="hidden font-light group-hover:inline lg:inline">Single Lots</span>
                        </Link>
                    </li>
                    <hr className="border-gray-600 w-full" />
                    <li className="mb-2 rounded hover:shadow hover:text-orange-300 hover:bg-rose-900 py-2 w-full">
                        <Link to="/cart" className="px-3 flex items-center w-full">
                            <TiShoppingCart className="w-6 h-6 mr-2" />
                            <span className="hidden font-light group-hover:inline lg:inline">Cart 455</span>
                        </Link>
                    </li>
                    <hr className="border-gray-600 w-full" />
                </ul>
            }
            <div className={`relative p-3 w-full flex items-center justify-center ${isSidebarVisible ? 'block' : 'hidden'}`}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FaSearch className="w-4 h-4 ml-3 text-gray-500" />
                </span>
                <input
                    type="text"
                    placeholder="Explore CruRated"
                    className="w-full px-4 py-2 pl-10 rounded bg-gray-800 text-white focus:outline-none"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </nav>
    );
}

