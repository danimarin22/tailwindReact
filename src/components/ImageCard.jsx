import { Link } from 'react-router-dom'

export default function ImageCard({ imgSrc, title }) {
    return (
        <div className="relative max-w-xs 
        overflow-hidden shadow-lg group">
            <img src={imgSrc} alt=""
                className="transition-transform
            group-hover:scale-105 duration-200"/>
            <div className="absolute inset-0 flex 
            items-end w-full">
                <div className="h-full p-4 text-white flex-1">
                    <div> <h3 className="text-2xl font-bold mb2 text-white opacity-70 group-hover:opacity-100">{title}</h3></div>
                    <div className="flex flex-col justify-end  mt-48">
                        <hr />
                        <Link className='text-lg flex justify-end mt-3  opacity-70 group-hover:opacity-100' to={`/${title}`}>View all</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
