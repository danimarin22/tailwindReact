import heroImg from "../assets/images/collections.webp"
import heroSub from "../assets/images/shopTwo.webp"
import Button from "../components/Button"

export default function Collections() {
    const howItWorks = [{
        id: 1,
        text: "Select one or multiple collections."
    },
    {
        id: 2,
        text: "Place your offer(s) equal to or higher than the listing price."
    },
    {
        id: 3,
        text: "Maximize your chances of winning by making multiple offers on different mixed cases and prioritizing your offers by indicating your spending limit for that weeks collections."
    },
    ]
    return <div className="relative flex flex-col">
        <img className="top-0 left-0 p-0 h-screen object-cover z-0 w-full" src={heroImg} />
        <div className="absolute flex flex-col items-center text-center m-10 lg:p-48">
            <h1 className="text-3xl text-white lg:text-5xl mb-10 lg:mb-24 mt-2 outline-10 outline-black">EVERY BOTTLE HAS A DRINKING WINDOW. OURS HAS A BUYING WINDOW.</h1>
            <p className="text-l text-white lg:text-2xl mt-5 opacity-80 mb-14 lg:mb-40">Discover the most sought-after bottles, in our weekly online auctions.</p>
            <Button text="Explore Collections" />
        </div>
        <div className="relative flex text-center justify-center">
            <img src={heroSub} className="h-screen object-cover lg:h-max w-full" />
            <div className="absolute flex flex-col m-6 ">
                <h1 className="text-5xl my-14 lg:my-20">HOW IT WORKS?</h1>
                <div className="flex flex-col lg:flex-row ">
                    {howItWorks.map(howItWorks => {
                        return (
                            <div className="my-2 lg:m-40" key={howItWorks.id}>
                                <div className="flex my-4 justify-center items-center">
                                    <span className="text-4xl">
                                        {howItWorks.id}/
                                    </span>
                                    <p className="text-xl">
                                        {howItWorks.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    {/* <div className="flex my-4 justify-center items-center">
                        <span className="text-3xl">
                            1/
                        </span>
                        <p className="text-xl">

                        </p>
                    </div>
                    <div className="flex my-4 justify-center items-center">
                        <span>
                            2/
                        </span>
                        <p>

                        </p>
                    </div>
                    <div className="flex my-4 justify-center items-center">
                        <span>
                            3/
                        </span>
                        <p>


                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
}