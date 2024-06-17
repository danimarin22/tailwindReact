import { Link, useNavigate } from "react-router-dom"
import termsAndConditions from "../assets/images/termsAndConditions.webp"
import wineStain from "../assets/images/wineStain.png"
import { IoIosArrowBack } from "react-icons/io"

export default function CookiePolicy() {
    const navigate = useNavigate()

    return (
        <>
            <div className='flex items-center bg-rose-900 h-10 lg:h-20'>
                <Link onClick={() => navigate(-1)}>
                    <IoIosArrowBack className='mx-3 w-5 h-5 lg:mx-10 lg:w-10 lg:h-10 text-gray-900' />
                </Link>
            </div>
            <div className="relative h-screen flex flex-row items-center justify-center">
                <img src={termsAndConditions} className="w-10/12 h-screen object-cover" />
                <div className="absolute w-9/12 h-screen">

                    <div className="flex justify-between items-center ">
                        <h1 className="text-3xl lg:text-6xl my-4 lg:!my-16">Cookie policy</h1>
                        <img src={wineStain} alt="" className="w-3/4 lg:w-3/12 transition-transform
            hover:scale-105 duration-200" />
                    </div>
                    <div className="h-3/6 overflow-y-scroll">
                        <h1 className="text-lg lg:text-3xl my-2 ">1. Cookie Policy</h1>
                        <p className="lg:text-lg">
                            The https://www.crurated.com website uses cookies to make the user's experience easier and more intuitive: cookies are small strings of text used to store certain information that may concern the user, his/her preferences or internet access device (computer, tablet and mobile phone) and are mainly used to adapt the operation of the site to the user's expectations, offering a more personalised browsing experience and storing the choices made previously.A cookie consists of a small set of data transferred to the user's browser by a web server and can only be read by the server that carried out the transfer. It is not executable code and does not transmit viruses.Cookies do not record any personal information and any identifiable data will not be stored. If you wish, you can prevent some or all cookies from being saved; however, if you do so, your use of the website and the services offered may be impaired.Cookies are divided into:
                            First-party cookies
                            These are cookies that belong to the owner of the application and collect user data only accessible to the owner. For example, e-commerce shopping cart cookies.
                            Third-party cookies
                            These are cookies that belong to external providers and over which the application owner has no direct control. These cookies collect User data that is accessible to the cookie provider. For example, the Google Analytics cookie.
                            Technical and profiling cookies
                            First-party and third-party cookies can be distinguished in turn into technical cookies and profiling cookies.
                            Technical cookies
                            These are cookies that are used to operate the application or to collect anonymous and aggregate statistics. The use of these cookies does not require the user's prior consent, it will be sufficient to inform the user in the cookie policy.

                            Some examples of technical cookies are

                            - cookies that are strictly necessary for the operation of the application and the provision of the service; (for example, a cookie that stores language/currency preferences)

                            - application session cookies (e.g. storing login credentials)

                            - statistical analysis cookies if used directly by the application owner to collect information in an anonymous and aggregate form (e.g. Google Analytics with anonymised IP).

                            Profiling cookies

                            These cookies can create a specific profile of the User based on their interests, preferences, habits. Given their potential invasiveness in the private sphere of users, Uk legislation requires the user to give prior consent before they are installed via a banner when the site is first loaded (cookie banner).

                            Some examples of technical cookies are

                            - social network cookies

                            - retargeting or remarketing cookies (cookies that allow you to be shown advertisements for a product you have recently viewed)

                            - statistical analysis cookies that collect non-anonymised data that can profile the user.

                            Your consent is not required for the installation of technical cookies. Your consent is required for the installation of profiling cookies: if you do not want your device to receive and store profiling cookies, you can change the security settings of your browser. In fact, through the settings of your browser you can decide whether to delete and/or prevent the installation of cookies on your device.

                            It should be noted, however, that by deactivating the use of profiling cookies, you will not be able to take full advantage of certain functions of the Site.
                            While browsing the Site, you may also receive cookies on your terminal that are sent from different sites or web servers (hereinafter “Third Parties”). Specifically, they are:

                            (a) Social network cookies:

                            These are used for sharing content on social networks.You will find below the name of the third parties that manage them, and for each of them the link to the page where you can receive information on processing and express your consent.

                            b) Statistical cookies
                            These are used by third parties, also in unbundled form, for the management of statistics. You will find below the names of the third parties who manage them, and for each of them the link to the page where you can receive information on the processing and express your consent.

                            Google Analytics

                            Through the use of the Site the use of Cookies is considered accepted and consent is given to the processing of the data collected by the Third Parties.

                            The https://www.crurated.com website uses cookies to make the user's experience easier and more intuitive: cookies are small strings of text used to store certain information that may concern the user, his/her preferences or internet access device (computer, tablet and mobile phone) and are mainly used to adapt the operation of the site to the user's expectations, offering a more personalised browsing experience and storing the choices made previously.A cookie consists of a small set of data transferred to the user's browser by a web server and can only be read by the server that carried out the transfer. It is not executable code and does not transmit viruses.Cookies do not record any personal information and any identifiable data will not be stored. If you wish, you can prevent some or all cookies from being saved; however, if you do so, your use of the website and the services offered may be impaired.
                            Cookies are divided into:

                            First-party cookies
                            These are cookies that belong to the owner of the application and collect user data only accessible to the owner. For example, e-commerce shopping cart cookies.
                            Third-party cookies
                            These are cookies that belong to external providers and over which the application owner has no direct control. These cookies collect User data that is accessible to the cookie provider. For example, the Google Analytics cookie.

                            Technical and profiling cookies

                            First-party and third-party cookies can be distinguished in turn into technical cookies and profiling cookies.

                            Technical cookies

                            These are cookies that are used to operate the application or to collect anonymous and aggregate statistics. The use of these cookies does not require the user's prior consent, it will be sufficient to inform the user in the cookie policy.

                            Some examples of technical cookies are

                            - cookies that are strictly necessary for the operation of the application and the provision of the service; (for example, a cookie that stores language/currency preferences)

                            - application session cookies (e.g. storing login credentials)

                            - statistical analysis cookies if used directly by the application owner to collect information in an anonymous and aggregate form (e.g. Google Analytics with anonymised IP).

                            Profiling cookies

                            These cookies can create a specific profile of the User based on their interests, preferences, habits. Given their potential invasiveness in the private sphere of users, Uk legislation requires the user to give prior consent before they are installed via a banner when the site is first loaded (cookie banner).

                            Some examples of technical cookies are

                            - social network cookies

                            - retargeting or remarketing cookies (cookies that allow you to be shown advertisements for a product you have recently viewed)

                            - statistical analysis cookies that collect non-anonymised data that can profile the user.

                            Your consent is not required for the installation of technical cookies. Your consent is required for the installation of profiling cookies: if you do not want your device to receive and store profiling cookies, you can change the security settings of your browser. In fact, through the settings of your browser you can decide whether to delete and/or prevent the installation of cookies on your device.

                            It should be noted, however, that by deactivating the use of profiling cookies, you will not be able to take full advantage of certain functions of the Site.
                            While browsing the Site, you may also receive cookies on your terminal that are sent from different sites or web servers (hereinafter “Third Parties”). Specifically, they are:

                            (a) Social network cookies:

                            These are used for sharing content on social networks.You will find below the name of the third parties that manage them, and for each of them the link to the page where you can receive information on processing and express your consent.

                            b) Statistical cookies
                            These are used by third parties, also in unbundled form, for the management of statistics. You will find below the names of the third parties who manage them, and for each of them the link to the page where you can receive information on the processing and express your consent.

                            Google Analytics

                            Through the use of the Site the use of Cookies is considered accepted and consent is given to the processing of the data collected by the Third Parties.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}