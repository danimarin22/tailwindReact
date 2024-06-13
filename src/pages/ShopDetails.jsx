import { useEffect, useState } from 'react'
import allProducts from '../assets/data.json'
import { Link, useNavigate, useParams } from "react-router-dom"
import Button from '../components/Button'
import { IoIosArrowBack } from 'react-icons/io'

export default function ShopDetails() {
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
        <div>
            <div className='flex items-center bg-rose-900 h-20'>
                <Link onClick={() => navigate(-1)}>
                    <IoIosArrowBack className='mx-10 w-10 h-10 text-gray-900' />
                </Link>

                {/* <button className="text-red-600 bg-gray-700 hover:bg-red-600 hover:text-gray-700  rounded w-40 h-10" onClick={() => navigate(-1)}>
                    Go back
                </button> */}
            </div>
        </div>
    )
}