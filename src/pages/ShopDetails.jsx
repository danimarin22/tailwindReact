import { useEffect, useState } from 'react'
import allProducts from '../assets/data.json'
import { useParams } from "react-router-dom"
import Button from '../components/Button'

export default function ShopDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

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
            Shop Details with id {product.id} and name {product.name}
            <Button text="Add to cart" onClick={AddToCart} />
        </div>
    )
}