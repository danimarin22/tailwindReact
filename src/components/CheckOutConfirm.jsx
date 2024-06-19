import { useEffect, useState } from "react"

export default function CheckOutConfirm() {

    const [userDetails, setUserDetails] = useState({})
    const [checkoutCart, setCheckoutCart] = useState([])

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("userDetails"))
        setUserDetails(data)

        let shoppingCart = JSON.parse(localStorage.getItem("cart"))
        setCheckoutCart(shoppingCart.map(elem => {
            elem.product['count'] = elem.count
            return elem.product
        }))
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div>
                {userDetails.firstName}
            </div>
            <hr className="w-full" />
            <div>
                <div className='lg:w-4/6 mb-5 lg:mb-0 lg:my-20'>
                    {checkoutCart.map((x, index) => {
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

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}