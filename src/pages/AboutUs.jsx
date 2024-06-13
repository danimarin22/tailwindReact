import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import topImg from "../assets/images/aboutTop.webp"
import winesAbout from "../assets/images/winesAbout.webp"
import wineMid from "../assets/images/aboutUsMid.webp"
import ourTeam from "../assets/images/ourTeamAbout.webp"

export default function AboutUs() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='flex items-center bg-rose-900 h-10 lg:h-20'>
                <Link onClick={() => navigate(-1)}>
                    <IoIosArrowBack className='mx-3 w-5 h-5 lg:mx-10 lg:w-10 lg:h-10 text-gray-900' />
                </Link>
            </div>
            <div className="relative flex items-center justify-center mb-10">
                <img src={topImg} alt="" className=" flex justify-center items-center w-full p-0 opacity-50" />
                <div className="absolute flex flex-col items-center text-center">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-40 opacity-90">ABOUT US</h1>
                    <p className="text-xl lg:text-2xl lg:mt-40">Rooted in passion for exceptional wines and the moments they create</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="flex flex-col lg:w-2/6 m-4 lg:m-0">
                    <h1 className="text-2xl lg:text-3xl lg:mb-20 mb-10">OUR PHILOSOPHY</h1>
                    <p className="text-xl">Wine is the foundation to life’s greatest pleasures.
                        We believe that great bottles open the door to new cultures, provide the backbone to exquisite meals, and create unforgettable moments amongst those who pop their corks. By bridging the gap between consumers and their favorite producers, Crurated has succeeded in making highly sought-after bottles more accessible to wine lovers worldwide.</p>
                </div>
                <img src={winesAbout} alt="" />
            </div>
            <div className="w-full my-10">
                <img src={wineMid} className="w-full " />
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-10 lg:mb-28">
                <img src={ourTeam} className=" lg:w-2/6 " />
                <div className="flex flex-col lg:w-2/6 m-4 lg:m-0">
                    <h1 className="text-2xl lg:text-3xl lg:mb-20 mb-10">We all remember that first bottle that made us fall in love with wine.</h1>
                    <p className="text-xl">Crurated was born out of the desire to pursue and relive this exciting feeling, one bottle after the next.
                        By bridging the gap between collectors and their favorite producers, and making bottles more accessible to wine lovers, Crurated has set out to create a new kind of a wine circle.</p>
                </div>
            </div>
        </div>
    )
}