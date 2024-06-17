import { Typography } from "@material-tailwind/react";
import logo from "../assets/images/Logo2.svg"
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="w-full bg-gray-900">
            <div className="flex flex-row items-center justify-center pt-4 ">
                <ul className="w-full flex flex-col lg:flex-row items-center lg:justify-around gap-3">
                    <li>
                        <Link
                            to="/aboutus"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-900 hover:text-rose-700 focus:text-rose-700"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/termsandconditions"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-900 hover:text-rose-700 focus:text-rose-700"
                        >
                            Terms and Conditions
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/privacypolicy"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-900 hover:text-rose-700 focus:text-rose-700"
                        >
                            Privacy policy
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cookiepolicy"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-900 hover:text-rose-700 focus:text-rose-700"
                        >
                            Cookie Policy
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => window.location = 'mailto:hello@crurated.com'}
                            to="#"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-700 hover:text-rose-700 focus:text-rose-700"
                        >
                            hello@crurated.com
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-rose-700" />
            <div className="w-full lg:w-full flex items-center justify-center pb-5">
                <img src={logo} alt="logo-ct" className="w-8 mr-5" />
                <Typography color="blue-gray" className="text-rose-900 text-xl text-center font-normal">
                    &copy; 2024 CruRated
                </Typography>
            </div>
        </footer>
    );
}

