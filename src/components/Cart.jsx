import Button from "../components/Button.jsx"
import { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { PiShippingContainerFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Cart = () => {
    const [products, setProducts] = useState([])
    const [quantities, setQuantities] = useState([])
    const [totalCost, setTotalCost] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [shipping, setShipping] = useState(100)

    const updateQuantity = (index, quantity) => {
        if (quantity < 0) return
        if (quantity === 0) {
            removeItem(index)
            return
        }
        if (!localStorage.getItem("cart")) {
            setProducts([])
            setQuantities([])
        } else {
            let cart = JSON.parse(localStorage.getItem("cart"))
            cart[index].count = quantity
            setProducts(cart.map(elem => {
                return elem.product
            }))

            setQuantities(cart.map(elem => {
                return elem.count
            }))
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }

    const removeItem = (index) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        cart = cart.slice(0, index).concat(cart.slice(index + 1, cart.length))
        setProducts(cart.map(elem => {
            return elem.product
        }))

        setQuantities(cart.map(elem => {
            return elem.count
        }))
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    useEffect(() => {
        if (!localStorage.getItem("cart")) {
            setProducts([])
            setQuantities([])
        } else {
            let cart = JSON.parse(localStorage.getItem("cart"))
            setProducts(cart.map(elem => {
                return elem.product
            }))

            setQuantities(cart.map(elem => {
                return elem.count
            }))
        }
    }, [])

    useEffect(() => {
        let prices = products.map((product, index) => {
            return parseInt(product.price.substring(1).split(',').join('') * quantities[index])
        })
        let totalPrice = 0
        prices.forEach(price => {
            totalPrice += price
        })
        setTotalCost(totalPrice)

        let totalElements = 0

        for (let i = 0; i < quantities.length; i++) {
            totalElements = totalElements + quantities[i]
        }

        setQuantity(totalElements)
    }, [products, quantities])

    useEffect(() => {
        setShipping(totalCost > 5000 ? 0 : 100)
    }, [totalCost])

    return (
        <section className="container mx-auto my-3 flex w-full items-center flex-col gap-3 px-4">
            <div>
                <h1 className='text-6xl my-5 lg:my-10'>CART</h1>
            </div>
            <div className='lg:w-4/6 mb-5 lg:mb-0 lg:my-20'>
                {products.map((x, index) => {
                    return (
                        <div key={index} className="flex w-full border my-4 lg:my-10 px-4 py-4">
                            <img
                                className="self-start object-contain w-32 h-32"

                                src={x.img}
                                alt="product image"
                            />
                            <div className="ml-3 flex w-full flex-col justify-center">
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-bold">{x.name}</p>
                                </div>

                                <p className="py-3 text-xl font-bold text-violet-900">
                                    {x.price}
                                </p>
                                <div className="mt-2 flex w-full items-center justify-between">
                                    <div className="flex items-center justify-center">
                                        <button
                                            className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            onClick={() => updateQuantity(index, quantities[index] - 1)}
                                        >
                                            -
                                        </button>
                                        <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                                            {quantities[index]}
                                        </div>
                                        <button
                                            className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                            onClick={() => updateQuantity(index, quantities[index] + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <FaTrashAlt
                                        onClick={() => removeItem(index)}
                                        className="m-0 h-5 w-5 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-full flex items-center justify-center  lg:mb-40 ">
                <div className='w-full lg:w-4/6 lg:h-[40%]'>
                    <div className="flex flex-col h-full justify-center">
                        <h3 className='text-3xl my-3'>Cart totals</h3>
                        <hr className='w-full' />
                    </div>
                    <div className='text-lg w-full flex flex-col lg:items-end justify-end'>
                        <div className='lg:my-10 my-3 flex flex-row w-[100%] lg:w-[50%] justify-around '>
                            <h2>Shipping </h2>
                            <h2>€{shipping}</h2>
                        </div>
                        <hr className='w-full lg:w-[50%]' />
                        <div className='lg:my-10 my-3 flex flex-row w-[100%] lg:w-[50%] justify-around '>
                            <h2>Subtotal </h2>
                            <h2>€{totalCost}</h2>
                        </div>
                        <hr className='w-full lg:w-[50%]' />
                        <div className="w-full lg:w-[50%] flex flex-col">
                            <div className='lg:my-10 my-3 flex flex-row justify-around '>
                                <h2>Total </h2>
                                <h2>€{totalCost + shipping}</h2>
                            </div>
                            <div className="flex flex-col items-center my-5">
                                <Link to="/checkoutform">
                                    <Button text="Proceed to checkout" />
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart; 
