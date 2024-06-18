import modalImg from "../assets/images/modularSignIn.png"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import ModularButton from "./ModularButton";

export default function SignInModal(props) {
    return (props.trigger) ? (
        <div className="popup absolute backdrop-blur-lg bg-opacity- bg-transparent h-screen w-screen flex items-center justify-center">
            <div className="popup-inner bg-rose-950  w-5/6 h-5/6 border-black border-8 flex flex-col items-center justify-center">

                {props.children}
                <div className="flex flex-col items-center justify-center w-full h-4/6 border-black border-8">

                    <div className="w-5/6 flex items-center justify-around border-black border-8 " >
                        <Link className="w-3/6" to="/">
                            <ModularButton text="Go to home" />
                        </Link>
                        <Link to="/shop/page/1">
                            <ModularButton text="Go to shop" />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <img src={modalImg} alt="" className="w-[60%] lg:w-[20%]" />
                </div>
            </div>
        </div>
    ) : "";
}

SignInModal.propTypes = {
    trigger: PropTypes.bool.isRequired,
    children: PropTypes.node
};