import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CheckoutForm() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")

    const navigate = useNavigate()

    const saveInfo = () => {
        const data = {
            firstName,
            lastName,
            email,
            phone,
            address,
            city,
            state,
            zip
        }
        localStorage.setItem("userDetails", JSON.stringify(data))

        navigate("/checkoutconfirm")
    }


    return (
        <div className="font-[sans-serif] bg-white flex items-center justify-center h-full ">
            <div className="max-w-4xl lg:m-[8%] w-full h-full rounded-md px-4 py-8 sticky top-0 ">
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">Complete your order</h2>
                <form className="mt-8" onSubmit={saveInfo}>
                    <div>
                        <h3 className="text-base lg:text-3xl text-gray-800 mb-4">Personal Details</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <input type="text" placeholder="First Name"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm lg:text-xl rounded-md focus:outline-rose-900" />
                            </div>

                            <div>
                                <input type="text" placeholder="Last Name"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm lg:text-xl rounded-md  focus:outline-rose-900" />
                            </div>

                            <div>
                                <input type="email" placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm lg:text-xl rounded-md focus:outline-rose-900" />
                            </div>

                            <div>
                                <input type="number" placeholder="Phone No."
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm lg:text-xl rounded-md focus:outline-rose-900" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <input type="text" placeholder="Address Line"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm lg:text-xl rounded-md focus:outline-rose-900" />
                            </div>
                            <div>
                                <input type="text" placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm lg:text-xl rounded-md focus:outline-rose-900" />
                            </div>
                            <div>
                                <input type="text" placeholder="State"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm lg:text-xl rounded-md focus:outline-rose-900" />
                            </div>
                            <div>
                                <input type="text" placeholder="Zip Code"
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm lg:text-xl rounded-md focus:outline-rose-900" />
                            </div>
                        </div>

                        <div className="flex  gap-4 max-md:flex-col mt-8">
                            <Link to="/" className="w-[100%] lg:w-[50%]">
                                <button type="button" to="/" className="rounded-md px-6 py-3 w-full text-sm lg:text-xl tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1">Cancel</button>
                            </Link>
                            <button type="submit" className="w-[100%] lg:w-[50% rounded-md px-6 py-3 w-full text-sm lg:text-xl tracking-wide bg-rose-900 hover:bg-rose-950 text-white">Complete Purchase</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}


