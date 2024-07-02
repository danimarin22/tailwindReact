import { useEffect, useState } from "react"

export default function CheckOutConfirm() {

    const [userDetails, setUserDetails] = useState({})
    const [checkoutCart, setCheckoutCart] = useState([])
    const total = (price, count) => {
        return parseInt(price.split(",").join("").substring(1)) * count
    };

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
            <div className="lg:w-[60%] w-full">
                <h3 className=" text-4xl">Shipping & Billing info </h3>
                <p className="text-gray-500 text-2xl">Name</p>
                <p className="text-2xl text-bold">{userDetails.lastName} {userDetails.firstName}</p>
                <p className="text-gray-500 text-2xl">Email address</p>
                <p className="text-2xl text-bold"> {userDetails.email}</p>
                <p className="text-gray-500 text-2xl">Phone number</p>
                <p className="text-2xl text-bold">{userDetails.phone}</p>
                <p className="text-gray-500 text-2xl">Shipping address</p>
                <p className="text-2xl text-bold">{userDetails.state} {userDetails.city} {userDetails.zip} {userDetails.address}</p>
            </div>
            <hr className="lg:w-[60%] w-full" />
            <div className='w-full flex flex-col lg:flex-row lg:flex-wrap items-center justify-center lg:w-[60%] mb-5 lg:mb-0 lg:my-20'>
                {checkoutCart.map((x, index) => {
                    return (
                        <div key={index} className="flex lg:w-[35%] lg:h-[30%] border my-1 lg:my-10 lg:mx-10 px-4 py-4 ">
                            <img
                                className="self-start object-contain w-32 h-32"
                                src={x.img}
                                alt="product image"
                            />
                            <div className="ml-3 flex w-full flex-col justify-center">
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-bold">{x.name}</p>
                                </div>

                                <p className="pt-3 pb-1 text-xl font-bold text-violet-900">
                                    {x.price}
                                </p>
                                <p>{x.count} Bottles</p>
                                <p>Total: {total(x.price, x.count)}</p>
                                <div className="mt-2 flex w-full items-center justify-between">
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>


        </div>

    )
}