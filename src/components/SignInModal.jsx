import modalImg from "../assets/images/modularSignIn.png"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import RedButton from "./RedButton";

export default function SignInModal(props) {
    return (
        <div className="popup absolute backdrop-blur-lg bg-opacity- bg-transparent h-screen w-screen flex items-center justify-center ">
            <div className="popup-inner bg-white w-5/6 h-5/6 flex flex-col items-center justify-center">
                {props.children}
                <div className="flex flex-col items-center justify-center w-full h-4/6 ">

                    <div className="w-full h-full z-2">
                        <div className="h-full w-full flex flex-col lg:flex-row items-center justify-around " >
                            <Link className="" to="/">
                                <RedButton text="Go to home" />
                            </Link>
                            <Link to="/shop/page/1">
                                <RedButton className="" text="Go to shop" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <img src={modalImg} alt="" className="w-[60%] lg:w-[20%]" />
                </div>
            </div>
        </div>
    )
}

SignInModal.propTypes = {
    children: PropTypes.node
};