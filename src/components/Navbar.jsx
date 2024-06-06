import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { CiCircleList } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import logo from "../assets/images/Logo2.svg"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);
    const handleClose = () => setIsOpen(false);

    return (
        <nav className="bg-gray-900 px-4 py-3 flex justify-between items-center z-50 sticky top-0 overflow-invisible">
            <Link to="/" className='flex'>
                <img className="w-8 h-8" src={logo} />
                <span className="text-xl text-white font-semibold">CruRated</span>
            </Link>
            <div className="text-xl gap-1 after:content-none bg-gray-900">
                <Dropdown show={isOpen} onToggle={handleToggle} className="bg-gray-900 ">
                    <Dropdown.Toggle
                        id="dropdown-basic"
                        className=" after:content-none bg-gray-900 hover:bg-gray-900 border-gray-900 hover:border-gray-900"
                        aria-label="Menu"
                        onClick={handleToggle}>
                        <CiCircleList className="text-white cursor-pointer  bg-gray-900 h-8 w-8 " />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="z-50 pt-2 w-screen h-screen bg-gray-900 text-center" onClick={handleClose}>
                        <hr className='border-2  bg-rose-900 w-80 text-white m-auto' />
                        <Dropdown.Item className="text-white text-center" ><Link to='/'>Home</Link></Dropdown.Item>
                        <Dropdown.Item className="text-white text-center" ><Link to='/collections'>Collections</Link></Dropdown.Item>
                        <Dropdown.Item className="text-white text-center"><Link to='/barrels'>Barrels</Link></Dropdown.Item>
                        <Dropdown.Item className="text-white text-center"><Link to='/shop/page/1'>Shop</Link></Dropdown.Item>
                        <Dropdown.Item className="text-white text-center"><Link to='/singleLots'>Single Lots</Link></Dropdown.Item>
                        <Dropdown.Item className="text-white text-center"><Link to='/signin'>Sign In</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
}
