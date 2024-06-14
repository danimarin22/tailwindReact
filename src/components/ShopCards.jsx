import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoListOutline } from "react-icons/io5";
import { useEffect } from "react";

export default function ShopCards({ id, category, name, img, vintage, eprice, price }) {

    useEffect(() => {
        console.log(img)
    }, [])
    return (
        <div className="max-w-sm min-h-full border-2 border-gray-300 overflow-hidden shadow-lg group flex flex-col items-center" style={{ flex: 1 }}>
            <div className="w-full group-hover:bg-rose-900 group-hover:text-white flex justify-between items-center">
                <p className=" my-3 ml-3">{category}</p>
                <div className="flex">
                    <Link>
                        <IoListOutline className="w-6 h-6 my-3 mr-3" />
                    </Link>
                    <Link>
                        <CiShare2 className="w-6 h-6 my-3 mr-3" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-80">
                <Link to={`/shop/${id}`}>
                    <h3 className="text-2xl min-h-28 font-bold mt-4 text-center">{name}</h3>
                </Link>
                <hr className='mt-2 mb-4 w-80' />
            </div>
            <img className="h-60 " src={'/src' + img} alt="" />
            <div className="inset-0 flex flex-col
            items-center w-full ">
                <div className="w-full mt-3 mb-1 flex items-center justify-between pb-3 ">
                    <p className='ml-3'>Vintage : {vintage}</p>
                    <Link className="mr-3 text-base text-rose-900"> View Details </Link>
                </div>
                <div className="w-full  flex items-center justify-between pb-3 ">
                    <p className="pl-3 text-s">Estimated market price:</p>
                    <Link className="text-s mr-3"> {eprice} </Link>
                </div>
                <Link className="w-full" to={`/shop/${id}`}>
                    <div className="w-full flex justify-center items-center">
                        <button className="w-5/6 mb-3 hover:bg-rose-950 hover:text-black rounded-lg p-4 shadow-lg text-xl font-normal text-white bg-rose-900">
                            {price}
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}