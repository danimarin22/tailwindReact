import 'prop-types'
import { Link } from 'react-router-dom'

export default function ImageCard({ imgSrc, title }) {
    return (
        <div className="relative max-w-xs 
        overflow-hidden shadow-lg group">
            <img src={imgSrc} alt=""
                className="transition-transform
            group-hover:scale-105 duration-200"/>
            <div className="absolute inset-0 flex 
            items-end">
                <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb2 text-white">{title}</h3>
                    <div className="flex flex-col justify-end  mt-4 w-100">
                        <hr />
                        <Link to={`/${title}`}>View All</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
