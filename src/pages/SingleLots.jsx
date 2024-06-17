import SignInModal from "../components/SignInModal";
import singleLotsTop from "../assets/images/singleLotsTop.webp"
import Button from "../components/Button";

export default function SingleLots() {
    return (
        <div>
            <div className="relative flex text-center">
                <img src={singleLotsTop} alt="" className="top-0 left-0 p-0 h-screen object-cover z-0 w-full" />
                <div className="absolute">
                    <h1 className="text-3xl lg:text-5xl opacity-80 lg:my-64 lg:mx-96 text-white">WHERE DISTINCTION MEETS VALUE, AND EACH BOTTLE IS A SINGULAR MASTERPIECE.</h1>
                    <p className="my-40 text-l lg:text-2xl opacity-50 text-white">Get your hands on the most sought-after bottles, in our weekly online auctions.</p>
                    <Button text="Explore Single Lots" />
                </div>
            </div>
        </div>
    )
}