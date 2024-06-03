import { Link } from "react-router-dom";
import videoWine from "../assets/images/wine.webm";
import logoFarm from "../assets/images/homeMidLogoFarm.svg"
import logoBlockchain from "../assets/images/homeMidLogoBlockchain.svg"
import logoStore from "../assets/images/homeMidLogoStore.svg"
import homeMidBg from "../assets/images/homeBarrels.webp"
import collectionsCategories from "../assets/images/midCategoriesCollections.webp"
import collectionsBarrels from "../assets/images/midCategoriesBarrels.webp"
import collectionsSingleLots from "../assets/images/midCategoriesSingleLots.webp"
import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import { CiBookmark, CiHeart, CiShare2 } from "react-icons/ci";

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
    ]

    const midCategories = [
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
    ]
    return (
        <>
            <div className='flex h-screen'>
                <div className='relative flex justify-center items-center w-full'>
                    <video
                        className="absolute top-0 left-0 min-h-screen w-full object-cover z-0"
                        src={videoWine}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="relative flex flex-col items-center text-center p-5 gap-5 text-white">
                        <p className="text-3xl">UNCORK A WORLD OF CURATED EXPERIENCES</p>
                        <p>Your one-stop destination for the world's most sought-after bottles.</p>
                        <div className='flex items-center justify-center'>
                            <Button text="Get Started" />
                            <Link to={"#HomeMid"} className='text-orange-300 py-2 px-4 '>
                                Explore Crurated &gt;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="HomeMid" className="relative flex justify-center items-center w-full ">
                <img src={homeMidBg} className="relative" />
                <div className="absolute min-h-screen flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-white m-20">BORDEAUX 2023 EN PRIMEUR</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {midLogo.map(midLogo => (
                            <div key={midLogo.id} className="flex flex-col items-center justify-center l:m-0 m-20">
                                <img className="h-40  w-40" src={midLogo.img} alt="N/A" />
                                <p className="text-xl  text-white">{midLogo.description}</p>
                            </div>
                        ))}
                    </div>
                    <Button text="Discover En Primeur" />
                </div>
            </div>
            <main className="flex justify-center">
                <ImageCard imgSrc={collectionsBarrels}>
                    <h3 className="text-xl font-bold mb2 text-white">Qualcosa</h3>
                    <div className="space-x-4 mt-4">
                        <button className="btn">
                            <CiHeart />
                        </button>
                        <button className="btn">
                            <CiBookmark />
                        </button>
                        <button className="btn">
                            <CiShare2 />
                        </button>
                    </div>
                </ImageCard>
            </main>
            {/* <div id="homeCategories" className="">
                <h1>Wines</h1>
                <p>Discover something new each week, with our masterfully curated wine collections, fractional barrels and single lot auctions.</p>
                <div
                    className="flex justify-around rounded-lg bg-white text-center  shadow-secondary-1 dark:bg-surface-dark dark:text-white">

                    {midCategories.map(midCategories => (
                        <div key={midCategories.id} className="flex flex-col justify-start ">
                            <img className="relative h-60  w-60 " src={midCategories.img} alt="N/A" />
                            <div
                                className="absolute text:white text-white  dark:border-white/10">
                                {midCategories.title}
                            </div>

                            <div
                                className="absolute mt-20 text-white border-t-2 justify-end border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
                                2 days ago
                            </div>
                        </div>
                    ))}
                    <div className="p-6">

                    </div>

                </div>
            </div> */}
        </>
    );
}