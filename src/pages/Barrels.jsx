import barrelsTop from "../assets/images/barrelsTop.webp"
import Button from "../components/Button"
import logoOne from "../assets/images/BarrelsLogo1.svg"
import logoTwo from "../assets/images/BarrelsLogo2.svg"
import logoThree from "../assets/images/BarrelsLogo3.svg"
import midBarrelsBG from "../assets/images/BarrelsMid.webp"
import howItWorks from "../assets/images/barrelsHowItWorks.webp"
import howItWorksBarrels from "../assets/images/howItWorksBarrels.png"
import { useRef } from "react"

export default function Barrels() {

    const barrelsMid = useRef(null)
    const handleClick = () => {
        barrelsMid.current?.scrollIntoView({ behavior: "smooth" })
    }

    const midBarrels = [
        {
            id: 0,
            title: "Get Priority Access",
            desc: "Secure top producers' rarest cuvees prior to market release.",
            img: logoOne,
        },
        {
            id: 1,
            title: "Mark The Occasion",
            desc: "Customise the bottle labels to make it more special and unique.",
            img: logoTwo,
        },
        {
            id: 2,
            title: "Backed By Blockchain",
            desc: "Get assured transparency and asset value protection.",
            img: logoThree,
        }
    ]

    const howItWorksMap = [
        {
            id: 0,
            text: "1/",
            desc: "Select your desired quantity in litres.",
        },
        {
            id: 1,
            text: "2/",
            desc: "Place your offer equal to or higher than the listing price.",
        },
        {
            id: 2,
            text: "3/",
            desc: "If successful, convert the quantity won into your desired bottle format and customize your labels.",
        },

    ]

    return (
        <div className="flex flex-col">
            <div className="relative flex items-center justify-center ">
                <img src={barrelsTop} className="top-0 left-0 p-0 h-screen object-cover z-0 w-full" />
                <div className="absolute flex flex-col items-center text-center px-5 lg:m-24 gap-y-2 lg:gap-y-5 mb-30 lg:mb-0 text-white">
                    <h1 className="text-3xl lg:text-5xl opacity-80 mb-20">WHERE DISTINCTION MEETS VALUE, AND EACH BOTTLE IS A SINGULAR MASTERPIECE.</h1>
                    <p className="text-l lg:text-2xl opacity-50 mb-20 lg:mb-40">With CruRated modern approach to fractional barrel sales, you can be the first to claim your share of sought-after vintages with the freedom to select your preferred format.</p>
                    <Button text="Browse Barrels" onClick={handleClick} />
                </div>
            </div>
            <div ref={barrelsMid} className="relative snap-center flex flex-col h-screen">
                <img src={midBarrelsBG} className="top-0 left-0 p-0 h-screen object-cover z-0 w-full" />
                <div className="absolute flex flex-col lg:flex-row items-center justify-center text-center w-full h-screen">
                    <div className="flex items-center justify-center">
                        <h1 className="text-4xl lg:text-5xl text-yellow-700 mb-5 lg:w-2/4">THE ULTIMATE
                            FRONTIER OF
                            COLLECTING</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:w-2/4">
                        {midBarrels.map(midBarrels => (
                            <div key={midBarrels.id} className="flex flex-col items-center gap-1">
                                <img src={midBarrels.img} className="h-14 w-14 lg:h-40 lg:w-40 mt-3 " />
                                <div className="my-0 w-4/5 lg:w-full">
                                    <h1 className="text-xl lg:text-3xl">{midBarrels.title}</h1>
                                    <p className="text-base lg:text-2xl">{midBarrels.desc}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <div >
                <div className="relative flex">
                    <img src={howItWorks} className="top-0 left-0 p-0 h-screen object-cover z-0 screen" />
                    <div className="absolute flex text-center items-center justify-center flex-col h-full w-full ">
                        <div className="flex flex-col lg:flex-row items-center w-screen">
                            <div className="w-60 lg:w-2/4 flex items-center justify-center">
                                <img src={howItWorksBarrels} className=" transition-transform
            hover:scale-105 duration-200 " />
                            </div>
                            <div className="h-auto w-full flex flex-col items-center justify-center text-center ">
                                <h1 className="lg:text-3xl text-lg text-white lg:my-20 my-2 ">EXCLUSIVELY WITH BARRELS</h1>
                                <hr className="w-4/5 my-1 g" />
                                <h1 className="lg:text-3xl text-lg my-1 text-white lg:my-20 ">LARGE FORMATS</h1>
                                <p className="lg:text-2xl text-white opacity-60 w-4/5 my-1 lg:mt-10 ">Have the rarest wines bottled in multiple formats for the first time in the market!</p>
                            </div>
                        </div>
                        <div className="w-auto flex flex-col items-center">
                            <hr className="w-4/5 lg:my-16 " />
                            <h1 className="text-3xl lg:text-4xl  my-2 text-white">HOW IT WORKS?</h1>
                            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                                {howItWorksMap.map(howItWorksMap => (
                                    <div className="flex justify-center  items-center m-1 lg:m-5 lg:px-20 lg:w-1/3 w-4/5" key={howItWorksMap.id}>
                                        <h1 className="lg:text-5xl text-2xl text-yellow-600 ">{howItWorksMap.text}</h1>
                                        <p className="lg:text-xl text-white opacity-60">{howItWorksMap.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="h-screen">
                <p>test</p>

            </div> */}
        </div>



    )

}