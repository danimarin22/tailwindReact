import 'prop-types'

export default function ImageCard({ children, imgSrc }) {
    return (
        <div className="relative max-w-xs 
        overflow-hidden shadow-lg group">
            <img src={imgSrc} alt=""
                className="transition-transform
            group-hover:scale-105 duration-200"/>
            <div className="absolute inset-0 flex 
            items-end">
                <div className="p-4 text-white">{children}</div>
            </div>
        </div>
    )
}
