import { FaRegCalendarPlus } from "react-icons/fa";
import img from "../assets/wineDB/BlancdeLynchBages.png"
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoListOutline } from "react-icons/io5";

export default function ShopCards() {
    return (
        <div className="max-w-sm border-2 border-gray-300 overflow-hidden shadow-lg group flex flex-col items-center">
            <div className="w-full group-hover:bg-rose-900 group-hover:text-white flex justify-between items-center">
                <p className=" my-3 ml-3">PREMIUM</p>
                <div className="flex">
                    <Link>
                        <IoListOutline className="w-6 h-6 my-3 mr-3" />
                    </Link>
                    <Link>
                        <CiShare2 className="w-6 h-6 my-3 mr-3" />
                    </Link>
                </div>
            </div>
            <div className="w-80">
                <Link>
                    <h3 className="text-2xl font-bold mt-4 text-center">Château Lafite Rothschild</h3>
                </Link>
                <hr className='mt-2 mb-4' />
            </div>
            <img className="w-20 " src={img} alt="" />
            <div className="inset-0 flex flex-col
            items-center w-full ">
                <div className="w-full mt-3 mb-1 flex items-center justify-between pb-3 ">
                    <p className='ml-3'>Vintage : 2014</p>
                    <Link className="mr-3 text-base text-rose-900"> View Details </Link>
                </div>
                <div className="w-full  flex items-center justify-between pb-3 ">
                    <p className="pl-3 text-s">Estimated market price:</p>
                    <Link className="text-s mr-3"> 137$ </Link>
                </div>
                <button className="w-80 mb-3 hover:bg-rose-900 hover:opacity-90 hover:text-black rounded-lg p-4 shadow-lg text-xl font-normal text-white bg-rose-900">
                    123$
                </button>

            </div>
        </div>
    )
}