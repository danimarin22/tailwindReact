import { Typography } from "@material-tailwind/react";
import logo from "../assets/images/Logo2.svg"

export function Footer() {
    return (
        <footer className="w-full bg-gray-900">
            <div className="flex flex-row items-center justify-center pt-4 ">
                <ul className="w-full flex flex-col lg:flex-row items-center lg:justify-around">
                    <li>
                        <Typography
                            as="a"
                            href="/aboutus"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-900 hover:text-rose-700 focus:text-rose-700"
                        >
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-900 hover:text-rose-700 focus:text-rose-700"
                        >
                            Terms and Conditions
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-900 hover:text-rose-700 focus:text-rose-700"
                        >
                            Privacy policy
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-900 hover:text-rose-700 focus:text-rose-700"
                        >
                            Cookie Policy
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors text-xl text-rose-500 hover:text-rose-700 focus:text-rose-700"
                        >
                            hello@crurated.com
                        </Typography>
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

