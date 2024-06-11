import heroImg from "../assets/images/collections.webp"
import heroSub from "../assets/images/shopTwo.webp"
import Button from "../components/Button"
import CollectionsCards from "../components/CollectionsCards"
import imgOne from "../assets/wineDB/ChampagneLesChétillons.png"
import imgTwo from "../assets/wineDB/ChampagneLesChétillonsŒnothèque.png"
import imgThree from "../assets/wineDB/ChampagneLesMontjoly.png"

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

    const collectionsOfTheWeek = [{
        id: 1,
        name: "Champagne Les Chétillons Cuvée Spéciale Grand Cru",
        desc: "Champagne Les Chétillons Cuvée Spéciale Grand Cru 2015",
        img: imgOne

    },
    {
        id: 2,
        name: "Champagne Les Chétillons Œnothèque Grand Cru",
        desc: "Champagne Les Chétillons Œnothèque Grand Cru 2009",
        img: imgTwo,

    },
    {
        id: 3,
        name: "Champagne Les Montjolys Cuvée Spéciale Grand Cru",
        desc: "Champagne Les Montjolys Cuvée Spéciale Grand Cru 2015",
        img: imgThree,

    },
    ]

    return <div className="relative flex flex-col items-center">
        <img className="top-0 left-0 p-0 h-screen object-cover z-0 w-full" src={heroImg} />
        <div className="absolute flex flex-col items-center text-center m-10 lg:p-48">
            <h1 className="text-3xl text-white lg:text-5xl mb-10 lg:mb-24 mt-2 outline-10 outline-black">EVERY BOTTLE HAS A DRINKING WINDOW. OURS HAS A BUYING WINDOW.</h1>
            <p className="text-l text-white lg:text-2xl mt-5 opacity-80 mb-14 lg:mb-40">Discover the most sought-after bottles, in our weekly online auctions.</p>
            <Button text="Explore Collections" />
        </div>
        <div className=" flex text-center justify-center w-full">
            <img src={heroSub} className="relative h-screen object-cover lg:h-max w-full " />
            <div className="absolute flex flex-col ">
                <h1 className="text-5xl my-14 lg:my-20">HOW IT WORKS?</h1>
                <div className="flex flex-col items-center md:flex-row md:text-base lg:flex-row lg:gap-20  ">
                    {howItWorks.map(howItWorks => {
                        return (
                            <div className="my-2 w-80" key={howItWorks.id}>
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
                </div>
            </div>
        </div>
        <div className="lg:max-w-7xl flex flex-col items-start">
            <div className="flex">
                <h1 className="text-5xl mt-16 mb-8 ml-4 lg:ml-18 lg:my-32">Collections this week</h1>
            </div>
            <div className="flex flex-col justify-center lg:gap-20 lg:m-10">
                {collectionsOfTheWeek.map(collectionsOfTheWeek => {
                    return (
                        <div className="my-4 lg:my-0" key={collectionsOfTheWeek.id}>
                            <CollectionsCards name={collectionsOfTheWeek.name} desc={collectionsOfTheWeek.desc} img={collectionsOfTheWeek.img} />
                        </div>

                    );
                })}
            </div>
        </div>

    </div>
}