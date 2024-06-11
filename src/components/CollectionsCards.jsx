import { CiShare2 } from "react-icons/ci";
import { IoListOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function CollectionsCards({ name, desc, img }) {
    return (
        <div >
            <div className="max-w-sm lg:max-w-7xl min-h-full border-2 border-gray-300 overflow-hidden shadow-lg group flex flex-col lg:flex-row items-center">
                <div className="lg:px-20 m-10 lg:m-0">
                    <h1 className="text-4xl lg:my-6">{name}</h1>
                    <p className="text-lg lg:my-6">Collection (3 Bottles)</p>
                    <hr className=' w-80 my-14' />
                    <p className="text-rose-900 font-bold my-6">{desc}</p>
                    <p className="mb-4">3 X 0.75</p>
                </div>
                <img className="hidden lg:block lg:h-80" src={img} />
                <hr className=' w-80 lg:hidden my-2' />
                <div className="flex lg:flex-col my-4 lg:my-0">
                    <div className="flex flex-col lg:flex-row lg:justify-end mr-20">
                        <Link>
                            <IoListOutline className="w-6 h-6 mb-4 lg:my-3 lg:mr-56" />
                        </Link>
                        <Link>
                            <CiShare2 className="w-6 h-6 lg:my-3 lg:mr-8" />
                        </Link>
                    </div>
                    <button className="lg:w-80 lg:m-20 hover:bg-rose-950 hover:opacity-90 hover:text-black rounded-lg p-4 shadow-lg text-xl font-normal text-white bg-rose-900">
                        Price on request
                    </button>
                </div>
            </div>
        </div>
    )
}