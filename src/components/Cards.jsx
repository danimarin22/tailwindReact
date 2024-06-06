import { FaRegCalendarPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Cards({ imgSrc, title, date, desc }) {
    return (
        <div className="max-w-sm
        overflow-hidden shadow-lg group">
            <img src={imgSrc} alt=""
            />
            <div className="inset-0 flex 
            items-end">
                <div className="p-2 text-black flex-1 h-48">
                    <h3 className="text-xl font-bold mt-1">{title}</h3>
                    <p className='mt-2'>{desc}</p>
                    <div className="flex flex-col">
                        <hr className='my-6' />
                        <div className='flex justify-between items-center'>
                            <p className='p-2'>{date}</p>
                            <button className='text-rose-900'>
                                <FaRegCalendarPlus className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}