import barrelsTop from "../assets/images/barrelsTop.webp"

export default function Barrels() {
    return <div className="relative flex items-center justify-center ">
        <img src={barrelsTop} className="top-0 left-0 p-0 h-screen object-cover z-0 w-full" />
        <div className="absolute">
            <h1>WHERE DISTINCTION MEETS VALUE, AND EACH BOTTLE IS A SINGULAR MASTERPIECE.</h1>
            <p className="">With Crurated's modern approach to fractional barrel sales, you can be the first to claim your share of sought-after vintages with the freedom to select your preferred format.</p>
        </div>
    </div>
}