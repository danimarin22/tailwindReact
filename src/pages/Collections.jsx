import heroImg from "../assets/images/collections.webp"
import Button from "../components/Button"

export default function Collections() {
    return <div className="relative flex">
        <img className="top-0 left-0 p-0 min-h-screen object-cover z-0 w-full" src={heroImg} />
        <div className="absolute flex flex-col items-center text-center m-10 lg:p-48">
            <h1 className="text-3xl text-white lg:text-5xl mb-20 mt-2 outline-10 outline-black">EVERY BOTTLE HAS A DRINKING WINDOW. OURS HAS A BUYING WINDOW.</h1>
            <p className="text-l text-white lg:text-2xl mt-5 opacity-80 mb-28">Discover the most sought-after bottles, in our weekly online auctions.</p>
            <Button text="Explore Collections" />
        </div>
    </div>
}