import { useParams } from 'react-router-dom';
import productsData from '../assets/data.json'
import { useEffect, useState } from 'react';
import imgShop from "../assets/images/shop.png"

export default function Shop() {

    const products = productsData[0].products;
    const { page } = useParams()
    const [elementsPerPage, setElementsPerPage] = useState(12)
    const [pages, setPages] = useState([])

    useEffect(() => {
        let n = Math.ceil(products.length / elementsPerPage)
        let arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(i)
        }
        setPages(arr)
    }, [])

    return (
        <>
            <div className='flex justify-center items-center'>
                <img src={imgShop} className='relative w-full h-1/2 object-cover' />
                <div className='absolute flex flex-col text-center'>
                    <p className='text-3xl lg:text-5xl text-white mb-3 lg:m-20'>The Shop</p>
                    <p className='text-l lg:text-2xl opacity-50 text-white lg:m-20'>Discover which bottles we have in stock and ready to ship.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-full' >
                {products.slice((page - 1) * elementsPerPage, ((page - 1) * elementsPerPage) + elementsPerPage).map(elem => {
                    return (
                        <div key={elem.id} >
                            {elem.name}
                            {elem.price}
                            <img className="lg:w-32 lg:h-full" src={elem.img} alt={elem.region} />
                        </div>
                    )
                })}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                    {pages.map((elem) => {
                        return (
                            <li key={elem}>
                                <a href={elem} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{elem}</a>
                            </li>
                        )
                    })}
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}