import { useEffect, useState } from 'react'
import allProducts from '../assets/data.json'
import { useParams } from "react-router-dom"
import { parse } from 'postcss'

export default function ShopDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        setProduct(allProducts[0]['products'].filter(elem => elem.id === parseInt(id))[0])
    }, [])
    return <div>Shop Details with id {product.id} and name {product.name}</div>
}