import { Link } from "react-router-dom";
import videoWine from "../assets/images/wine.webm";
import logoFarm from "../assets/images/homeMidLogoFarm.svg";
import logoBlockchain from "../assets/images/homeMidLogoBlockchain.svg";
import logoStore from "../assets/images/homeMidLogoStore.svg";
import homeMidBg from "../assets/images/homeBarrels.webp";
import collectionsCategories from "../assets/images/midCategoriesCollections.webp";
import collectionsBarrels from "../assets/images/midCategoriesBarrels.webp";
import collectionsSingleLots from "../assets/images/midCategoriesSingleLots.webp";
import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import collectionsCategoriesSpirits from "../assets/images/collectionsCategoriesSpirits.jpg";
import singleLotsCategoriesSpirits from "../assets/images/singleLotsCategoriesSpirits.webp";
import ilMarroneto from "../assets/images/ilMarroneto.webp"
import capreolusDistilery from "../assets/images/capreolusDistilery.webp"
import fineDining from "../assets/images/fineDining.webp"
import pierrePeters from "../assets/images/pierrePeters.webp"
import Cards from "../components/Cards";

export default function Home() {
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
            img: ilMarroneto,
        },
        {
            id: 1,
            title: "Pierre Péters",
            date: "10-16 June, 2024",
            img: pierrePeters,
        },
        {
            id: 2,
            title: "Capreolus distillery",
            date: "3-9 June, 2024",
            img: capreolusDistilery,
        },
    ];

    return (
        <>
            <div className='flex justify-center items-center w-full h-screen p-0'>
                <video
                    className="relative top-0 left-0 p-0 min-h-screen object-cover z-0 w-full"
                    src={videoWine}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <span className="absolute flex flex-col text-center p-5 gap-5 text-white">
                    <p className="text-3xl mb-20">UNCORK A WORLD OF CURATED EXPERIENCES</p>
                    <p>Your one-stop destination for the world&apos;s most sought-after bottles.</p>
                    <div className='text-center mt-20'>
                        <Link to={"/signin"}>
                            <Button className="mb-5" text="Get Started" />
                        </Link>

                        <Link className='text-orange-300 mx-4'>
                            Explore Crurated &gt;
                        </Link>
                    </div>
                </span>
            </div>
            <div id="HomeMid" className="relative text-center flex justify-center items-center overflow-hidden ">
                <img src={homeMidBg} className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                <span className="relative  min-h-screen flex flex-col justify-center items-center text-white">
                    <h1 className="text-4xl mt-5 md:mt-80 md:my-28 my-20">BORDEAUX 2023 EN PRIMEUR</h1>
                    <span className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full">
                        {midLogo.map(midLogo => (
                            <div key={midLogo.id} className="flex flex-col items-center justify-center m-2  ">
                                <img className="h-20 md:h-32 w-20 md:w-32" src={midLogo.img} alt="N/A" />
                                <p className="text-xl">{midLogo.description}</p>
                            </div>
                        ))}
                    </span>
                    <Button text="Discover En Primeur" />
                </span>
            </div>
            <div className="flex flex-col justify-center ml-5 mt-5">
                <h1 className="text-3xl m-3">Wine</h1>
                <p className="text-xl m-3">Discover something new each week, with our masterfully curated wine collections, fractional barrels, and single lot auctions.</p>
                <span className="grid grid-cols-1 md:grid-cols-3 m-6 md:mx-20 gap-y-8 lg:gap-y-0">
                    {midCategoriesWines.map(midCategoriesWines => {
                        return (
                            <div key={midCategoriesWines.id}>
                                <ImageCard imgSrc={midCategoriesWines.img} title={midCategoriesWines.title} />
                            </div>
                        );
                    })}
                </span>
            </div>
            <div className="flex flex-col justify-center ml-5">
                <h1 className="text-3xl m-3">Spirits</h1>
                <p className="text-xl m-3">Discover something new each week, with our masterfully curated spirits collections and single lot auctions.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 m-6 md:mx-20 gap-y-8 lg:gap-y-0">
                    {midCategoriesSpirits.map(midCategoriesSpirits => {
                        return (
                            <div key={midCategoriesSpirits.id}>
                                <ImageCard imgSrc={midCategoriesSpirits.img} title={midCategoriesSpirits.title} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col items-center justify-between ml-5">
                <h1 className="text-3xl m-3 text-black">Calendar</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 m-6 md:mx-20 gap-y-8 lg:gap-x-36">
                    {producers.map(producers => {
                        return (
                            <div key={producers.id}>
                                <Cards imgSrc={producers.img} title={producers.title} date={producers.date} className="text-black" />
                            </div>
                        );
                    })}
                </div>
                <div className="relative flex m-2">
                    <img className="h-80 opacity-90 object-cover" src={fineDining} />
                    <div className="absolute h-60 flex flex-col justify-around m-5">
                        <h1 className="text-3xl text-white lg:mb-20 ">Dinner in Amsterdam with Alessandro Mori from Il Marroneto</h1>
                        <Button className="" text="Reserve your spot" />
                    </div>
                </div>
            </div>
        </>
    );
}
