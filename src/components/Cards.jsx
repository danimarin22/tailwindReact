import { FaRegCalendarPlus } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

export default function Cards({ imgSrc, title, date, desc }) {
    const [isModalVisible, setIsModalVisible] = useState(false)

    function addToCalendar() {
        setIsModalVisible(true)
        setTimeout(() => {
            setIsModalVisible(false)
        }, 1500)
    }

    return (
        <div className='max-w-sm relative'>
            {isModalVisible && (
                <div className='flex flex-col justify-center items-center absolute w-full h-full bg-white bg-opacity-75 z-1'>
                    <IoIosCheckmarkCircle className='text-green-500 h-28 w-28 ' />
                    <h3 className='text-3xl lg:mb-5 mb-5'>Event added to calendar</h3>
                </div>
            )}
            <div className="max-w-sm
        overflow-hidden shadow-lg group relative flex flex-col">
                <img src={imgSrc} alt="" />
                <div className="inset-0 flex 
            items-end">
                    <div className="p-2 text-black flex-1 h-48">
                        <h3 className="text-xl font-bold mt-1">{title}</h3>
                        <p className='mt-2'>{desc}</p>
                        <div className="flex flex-col">
                            <hr className='my-6' />
                            <div className='flex justify-between items-center'>
                                <p className='p-2'>{date}</p>
                                <button className='text-rose-900' onClick={addToCalendar}>
                                    <FaRegCalendarPlus className='w-6 h-6' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

Cards.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string
}