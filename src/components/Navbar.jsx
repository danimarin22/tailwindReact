import { Dropdown } from "react-bootstrap";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 px-4 py-3 flex justify-between">
            <div className="flex items-center text-xl gap-1">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="px-4 pt-2">
                        <FaBars className="text-white cursor-pointer" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="dropdown">

                </div>
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