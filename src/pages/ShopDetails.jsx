import { useEffect, useState } from 'react'
import allProducts from '../assets/data.json'
import { Link, useNavigate, useParams } from "react-router-dom"
import Button from '../components/Button'
import { IoIosArrowBack } from 'react-icons/io'
import productsData from '../assets/data.json'
import shopDetailsSingleLot from "../assets/images/shopDetailsSingleLot.svg"
import shopDetailsBottleSize from "../assets/images/shopDetailsBottleSize.svg"
import ShopDetailsCarousel from '../components/ShopDetailsCarousel'

export default function ShopDetails() {
    let products = productsData[0].products;
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        setProduct(allProducts[0]['products'].filter(elem => elem.id === parseInt(id))[0])
    }, [id])

    function AddToCart() {
        if (!localStorage.getItem(("cart"))) {
            const cart = [
                {
                    product: product,
                    count: 1
                }
            ]
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            let cart = JSON.parse(localStorage.getItem("cart"))
            let index = cart.findIndex(p => p.product.id === product.id)

            if (index === -1) {
                cart.push({
                    product: product,
                    count: 1
                })
            }
            else {
                cart[index].count++
            }
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }

    return (
        <>
            <div className='flex items-center bg-rose-900 h-10 lg:h-20'>
                <Link onClick={() => navigate(-1)}>
                    <IoIosArrowBack className='mx-3 lg:mx-10 w-5 lg:w-10 h-5 lg:h-10 text-gray-900' />
                </Link>

                {/* <button className="text-red-600 bg-gray-700 hover:bg-red-600 hover:text-gray-700  rounded w-40 h-10" onClick={() => navigate(-1)}>
                    Go back
                </button> */}
            </div>
            <div className='flex flex-col items-center mx-5 my-3 lg:my-0 lg:mx-0' >
                <div className='lg:flex items-center justify-center lg:w-10/12 lg:my-14  '>
                    <div className='title flex  lg:flex-row w-full lg:w-[30%] items-center justify-center'>
                        <div className=' flex flex-col lg:flex-col w-full '>
                            <h1 className='text-2xl mb-3 lg:text-4xl lg:m-4 '>{product.name}</h1>
                            <p className='text-xl my-3 lg:text-2xl lg:m-4 '>By : {product.producer}</p>
                            <div className='flex my-2 lg:my-3 lg:full'>
                                <img src={shopDetailsSingleLot} alt="" className='lg:w-7 lg:mx-4' />
                                <span className='lg:text-lg'>Single Lot (1 bottle)</span>
                            </div>
                            <div className='flex my-2 lg:flex lg:my-3 '>
                                <img src={shopDetailsBottleSize} alt="" className='lg:w-7 lg:mx-4' />
                                <span className='lg:text-lg'>{product.bottleSize}</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex  items-center justify-center'>
                        <img src={product.img} className=' my-3 w-20 lg:w-28  align-center lg:mx-20' />
                    </div>
                    <div className='flex flex-col w-full lg:w-[20%] items-center justify-center my-2'>
                        <p className='mb-3'>Shop Details with id {product.id} and name {product.name}</p>
                        <Button text="Add to cart" onClick={AddToCart} />
                    </div>

                    {/* <img src={wineSealLogo} className='w-40 h-40' /> */}
                </div >
                <div className='flex items-center justify-center w-full'>
                    <div className='lg:w-6/12' >
                        <h1 className='my-3 lg:my-0 text-2xl lg:text-4xl'>Details</h1>
                        <p className='lg:text-lg lg:mt-10'>{product.desc}</p>
                        <div className='flex items-center w-full flex-wrap lg:!flex-nowrap flex-row lg:flex-row lg:justify-center lg:items-center'>

                            <div className='flex flex-col my-4 lg:my-0 lg:w-[33%]'>
                                <div className='my-3 lg:my-10 w-full'>
                                    <p>Country/Region</p>
                                    <p className='font-bold'>{product.region}</p>
                                </div>
                                <div className='w-full'>
                                    <p>Color</p>
                                    <p className='font-bold'>{product.color}</p>
                                </div>
                            </div>

                            <div className='m-4 lg:m-4 lg:w-[33%]'>
                                <div className=' my-3 lg:my-10 w-full'>
                                    <p>Alcohol level</p>
                                    <p className='font-bold'>{product.alcoholLevel}</p>
                                </div>
                                <div className='w-full'>
                                    <p>Type of wine</p>
                                    <p className='font-bold'>{product.typeOfWine}</p>
                                </div>
                            </div>

                            <div className='lg:m-4 lg:w-[33%]  '>
                                <div className='my-3 lg:my-10'>
                                    <p>Bottle size</p>
                                    <p className='font-bold'>{product.bottleSize}</p>
                                </div>
                                <div>
                                    <p>Varietal</p>
                                    <p className='font-bold'>{product.varietal}</p>
                                </div>
                            </div>
                        </div>
                        <div className='my-6 lg:mb-14'>
                            <ShopDetailsCarousel />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}