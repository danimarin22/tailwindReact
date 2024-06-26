import { Link, useParams } from 'react-router-dom';
import productsData from '../assets/data.json'
import { useEffect, useState } from 'react';
import imgShop from "../assets/images/shop.png"
import ShopCards from '../components/ShopCards';
import { FaSearch } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

export default function Shop() {

    let products = productsData[0].products;
    const { page } = useParams()
    const [elementsPerPage, setElementsPerPage] = useState(12)
    const [pages, setPages] = useState([])
    const [nameFilter, setNameFilter] = useState("")
    const [numberOfPages, setNumberOfPages] = useState(0)

    useEffect(() => {
        let n = Math.ceil(products.length / elementsPerPage)
        setNumberOfPages(n)
        let arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(i)
        }
        setPages(arr)

        products = shuffle(products)
    }, [])

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    return (
        <>
            <div className='flex justify-center items-center'>
                <img src={imgShop} className='relative w-full h-1/2 object-cover' />
                <div className='absolute flex flex-col text-center'>
                    <p className='text-4xl lg:text-5xl text-white mb-3 lg:m-20'>The Shop</p>
                    <p className='text-l lg:text-2xl opacity-50 text-white lg:m-20'>Discover which bottles we have in stock and ready to ship.</p>
                </div>
            </div>
            <div className='my-3'>
                <p className='my-3 lg:!my-14 ml-[7%] text-4xl'>Shop</p>
                <div className='relative text-center flex items-center justify-start lg:justify-start'>

                    <FaSearch className="absolute w-4 h-4 ml-[9%] lg:w-[13%] lg:mb-[1%] lg:ml-8 text-black" />

                    <input
                        type="text"
                        placeholder="Search product"
                        className=" px-6 py-2 pl-10 ml-[7%] lg:mb-5 rounded border-2 focus:outline-none"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                    />
                </div>
            </div>
            <Container>
                <Row>
                    {products.filter(elem => {
                        return nameFilter.trim() === "" || elem.name.toLowerCase().trim().includes(nameFilter.toLowerCase().trim())
                    }).slice((page - 1) * elementsPerPage, ((page - 1) * elementsPerPage) + elementsPerPage).map(elem => {
                        return (
                            <Col key={elem.id} xl={3} lg={4} sm={6} xs={12} className='my-2 flex items-center justify-center'>
                                <ShopCards
                                    id={elem.id}
                                    category={elem.category}
                                    name={elem.name}
                                    img={elem.img}
                                    vintage={elem.vintage}
                                    eprice={elem.estimatedPriceMarket}
                                    price={elem.price}
                                    desc={elem.shortDesc} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <div className='flex items-center justify-center m-10'>
                <nav aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-px h-10 text-base">
                        <li>
                            <Link to={'/shop/page/' + (parseInt(page) === 1 ? numberOfPages : parseInt(page) - 1)} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </Link>
                        </li>
                        {pages.map((elem) => {
                            return (
                                <li key={elem}>
                                    <Link to={'/shop/page/' + elem} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{elem}</Link>
                                </li>
                            )
                        })}
                        <li>
                            <Link to={'/shop/page/' + ((parseInt(page) % numberOfPages) + 1)} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}