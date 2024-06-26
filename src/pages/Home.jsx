import { Link } from "react-router-dom";
import videoWine from "../assets/images/wine.mp4";
import logoFarm from "../assets/images/homeMidLogoFarm.svg";
import logoBlockchain from "../assets/images/homeMidLogoBlockchain.svg";
import logoStore from "../assets/images/homeMidLogoStore.svg";
import homeMidBg from "../assets/images/homeBarrels.webp";
import collectionsCategories from "../assets/images/midCategoriesCollections.webp";
import collectionsBarrels from "../assets/images/midCategoriesBarrels.webp";
import collectionsSingleLots from "../assets/images/midCategoriesSingleLots.webp";
import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import collectionsCategoriesSpirits from "../assets/images/collectionsCategoriesSpirits.webp";
import singleLotsCategoriesSpirits from "../assets/images/singleLotsCategoriesSpirits.webp";
import ilMarroneto from "../assets/images/ilMarroneto.webp"
import capreolusDistilery from "../assets/images/capreolusDistilery.webp"
import fineDining from "../assets/images/fineDining.webp"
import pierrePeters from "../assets/images/pierrePeters.webp"
import Cards from "../components/Cards";
import { useRef } from "react";


export default function Home() {

    const midRef = useRef(null);
    const handleClick = () => {
        midRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const midLogo = [
        {
            id: 0,
            img: logoFarm,
            description: "Access Bordeaux 2023 En Primeur wines from Ex-Chateau",
        },
        {
            id: 1,
            img: logoBlockchain,
            description: "Guaranteed authenticity and traceability through blockchain",
        },
        {
            id: 2,
            img: logoStore,
            description: "Store your bottles safely in our warehouse",
        },
    ];

    const midCategoriesWines = [
        {
            id: 0,
            title: "Collections",
            img: collectionsCategories,
        },
        {
            id: 1,
            title: "Barrels",
            img: collectionsBarrels,
        },
        {
            id: 2,
            title: "SingleLots",
            img: collectionsSingleLots,
        },
    ];

    const midCategoriesSpirits = [
        {
            id: 0,
            title: "Collections",
            img: collectionsCategoriesSpirits,
        },
        {
            id: 1,
            title: "SingleLots",
            img: singleLotsCategoriesSpirits,
        },
    ];

    const producers = [
        {
            id: 0,
            title: "Il Marroneto",
            date: "3-9 June, 2024",
            desc: "Discover the rich history and exquisite wines of Il Marroneto.",
            img: ilMarroneto,
        },
        {
            id: 1,
            title: "Pierre Péters",
            date: "10-16 June, 2024",
            desc: "Explore the elegance and tradition of Champagne with Pierre Péters.",
            img: pierrePeters,
        },
        {
            id: 2,
            title: "Capreolus distillery",
            date: "3-9 June, 2024",
            desc: "Uncover the artisanal spirits and craftsmanship at Capreolus Distillery",
            img: capreolusDistilery,
        },
    ];

    return (
        <>
            <div className='relative flex justify-center items-center w-full h-screen p-0'>
                <video
                    className="top-0 left-0 p-0 min-h-screen object-cover z-0 w-full"
                    src={videoWine}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute flex flex-col text-center px-5 lg:p-24 gap-y-2 lg:gap-y-5 mb-30 lg:mb-0 text-white">
                    <h1 className="text-3xl lg:text-5xl opacity-80 mb-10 lg:mb-20">UNCORK A WORLD OF CURATED EXPERIENCES</h1>
                    <p className="text-l lg:text-2xl opacity-50 mb-20">Your one-stop destination for the world&apos;s most sought-after bottles.</p>
                    <div className='flex flex-col lg:flex-row justify-center items-center text-center gap-10'>
                        <Link to={"/signin"}>
                            <Button className="mb-5" text="Get Started" />
                        </Link>
                        <span className='text-orange-300 snap-x text-base lg:text-xl px-4 gap-2'> <Link onClick={handleClick}>
                            Explore Crurated &gt;
                        </Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative snap-center text-center flex justify-center items-center overflow-hidden pb-3 lg:pb-0 ">
                <img src={homeMidBg} className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                <span className="relative w-full min-h-screen flex flex-col justify-center lg:justify-end items-center lg:gap-y-5 text-white">
                    <h1 className="text-4xl mt-3 my-2 lg:mt-80 w-72">BORDEAUX 2023 EN PRIMEUR</h1>
                    <div className="flex flex-col p-5 gap-y-2 w-full lg:flex-row">
                        {midLogo.map(midLogo => (
                            <div key={midLogo.id} className="flex flex-col w-full items-center justify-center lg:p-20">
                                <img className="h-20 md:h-32 w-20 md:w-32" src={midLogo.img} alt="N/A" />
                                <p className="text-xl w-72 p-x-0 lg:p-x-40">{midLogo.description}</p>
                            </div>
                        ))}
                    </div>
                    <Button text="Discover En Primeur" />
                </span>
            </div>
            <div ref={midRef} className="flex flex-col justify-center ml-0 lg:ml-5 mt-2  ">
                <h1 className="text-4xl m-3">Wines</h1>
                <p className="text-2xl m-3">Discover something new each week, with our masterfully curated wine collections, fractional barrels, and single lot auctions.</p>
                <span className="flex flex-col items-center w-full mt-3 gap-y-10 lg:mt-5 lg:gap-y-0 lg:flex-row lg:justify-around ">
                    {midCategoriesWines.map(midCategoriesWines => {
                        return (
                            <div key={midCategoriesWines.id}>
                                <ImageCard imgSrc={midCategoriesWines.img} title={midCategoriesWines.title} />
                            </div>
                        );
                    })}
                </span>
            </div>
            <div className="flex flex-col justify-center mt-5 ml-0 lg:ml-5">
                <h1 className="text-4xl m-3">Spirits</h1>
                <p className="text-2xl m-3">Discover something new each week, with our masterfully curated spirits collections and single lot auctions.</p>
                <div className="flex flex-col items-center w-full mt-3 gap-y-10 lg:w-2/3 lg:mt-5 lg:gap-y-0 lg:flex-row lg:justify-around ">
                    {midCategoriesSpirits.map(midCategoriesSpirits => {
                        return (
                            <div key={midCategoriesSpirits.id}>
                                <ImageCard imgSrc={midCategoriesSpirits.img} title={midCategoriesSpirits.title} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className=" bg-stone-100">
                <div className="flex flex-col items-start m-8 mb-0 pb-10 mt-24">
                    <h1 className="text-4xl text-black mt-10 mb-3 ">Meet the producers</h1>
                    <p className="text-2xl my-3"> Join us in celebrating the artisans who bring passion and expertise to every bottle.</p>
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-col lg:flex-row lg:gap-x-48 items-center justify-center ">
                            {producers.map(producers => {
                                return (
                                    <div className="mt-4 mb-4" key={producers.id}>
                                        <Cards imgSrc={producers.img} title={producers.title} date={producers.date} desc={producers.desc} className="text-black" />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="relative flex mt-32">
                            <img className="h-80 opacity-90 object-cover" src={fineDining} />
                            <div className="absolute h-60 flex flex-col justify-around m-5">
                                <h1 className="text-3xl text-rose-700 opacity-90 lg:mb-20 ">Dinner in Amsterdam with Alessandro Mori from Il Marroneto</h1>
                                <Button className="" text="Reserve your spot" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
