import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
    const [products, setProducts] = useState([])
    const [quantities, setQuantities] = useState([])
    const [totalCost, setTotalCost] = useState("")
    const [quantity, setQuantity] = useState(0)

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
        //"$1,674" -> "1,674" -> ["1", "674"]  -> "1674" -> 1674
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

    return (
        <section className="container mx-auto my-3 flex w-full flex-col gap-3 px-4">
            {products.map((x, index) => {
                return (
                    <div key={index} className="flex w-full border px-4 py-4">
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
            <h2>€{totalCost}</h2>
        </section>
    );
};

export default Cart; 
