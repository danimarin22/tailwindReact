import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { CiCircleList } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);
    const handleClose = () => setIsOpen(true);

    return (
        <nav className="bg-gray-900 px-4 py-3 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">CruRated</span>
            <div className="text-xl gap-1  bg-gray-900">
                <Dropdown show={isOpen} onToggle={handleToggle} className="bg-gray-900 ">
                    <Dropdown.Toggle
                        id="dropdown-basic"
                        className="px-4 pt-2 after:content-none bg-gray-900 hover:bg-gray-900 border-gray-900 hover:border-gray-900"
                        aria-label="Menu"
                        onClick={handleToggle}>
                        <CiCircleList className="text-white cursor-pointer  bg-gray-900 h-6 w-6" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="pt-10 w-screen min-h-screen bg-gray-900 text-center" onClick={handleClose}>
                        <hr className='mt-2 mb-4 w-80 text-rose-900 text-center' />
                        <Dropdown.Item onClick={handleClose} className="text-white text-center" ><Link to='/'>Home</Link></Dropdown.Item>
                        <Dropdown.Item onClick={handleClose} className="text-white text-center" ><Link to='/collections'>Collections</Link></Dropdown.Item>
                        <Dropdown.Item onClick={handleClose} className="text-white text-center"><Link to='/barrels'>Barrels</Link></Dropdown.Item>
                        <Dropdown.Item onClick={handleClose} className="text-white text-center"><Link to='/shop/page/1'>Shop</Link></Dropdown.Item>
                        <Dropdown.Item onClick={handleClose} className="text-white text-center"><Link to='/singleLots'>Single Lots</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
}