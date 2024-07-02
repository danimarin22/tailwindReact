import { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";

export default function Payment() {

    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        let products = cart.map(elem => {
            return elem.product
        })
        let quantities = cart.map(elem => {
            return elem.count
        })

        let prices = products.map((product, index) => {
            return parseInt(product.price.substring(1).split(',').join('') * quantities[index])
        })

        let totalPrice = 0
        prices.forEach(price => {
            totalPrice += price
        })

        setTotalCost(totalPrice)
    }, [])

    return (
        <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="12" lg="10" xl="8">
                    <MDBCard>
                        <MDBCardBody className="p-md-5">
                            <div>
                                <h4>Upgrade your plan</h4>
                                <p className="text-muted pb-2">
                                    Please make the payment to start enjoying all the features of
                                    our premium plan as soon as possible
                                </p>
                            </div>
                            <div className="px-3 py-4 border-primary border-2 rounded mt-4 d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <img
                                        src="https://i.imgur.com/S17BrTx.webp"
                                        className="rounded"
                                        width="60"
                                    />
                                    <div className="d-flex flex-column ms-4">
                                        <span className="h5 mb-1">Total</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <sup className="dollar font-weight-bold text-muted">€</sup>
                                    <span className="h2 mx-1 mb-0">{totalCost}</span>
                                </div>
                            </div>
                            <h4 className="mt-5">Payment details</h4>
                            <MDBCard className="rounded-3">
                                <MDBCardBody className="p-4">

                                    <MDBRow className="my-4">
                                        <MDBCol size="7">
                                            <MDBInput
                                                label="Card Number"
                                                id="form4"
                                                type="text"
                                                size="lg"
                                                placeholder="1234 5678 1234 5678"
                                            />
                                        </MDBCol>
                                        <MDBCol size="3">
                                            <MDBInput
                                                label="Expire"
                                                id="form5"
                                                type="password"
                                                size="lg"
                                                placeholder="MM/YYYY"
                                            />
                                        </MDBCol>
                                        <MDBCol size="2">
                                            <MDBInput
                                                label="CVV"
                                                id="form6"
                                                type="password"
                                                size="lg"
                                                placeholder="CVV"
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBBtn color="success" size="lg">
                                        Add card
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBBtn block size="lg" className="mt-3">
                                {" "}
                                Proceed to payment <MDBIcon fas icon="long-arrow-alt-right" />
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}