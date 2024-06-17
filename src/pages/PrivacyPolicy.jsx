import { Link, useNavigate } from "react-router-dom"
import termsAndConditions from "../assets/images/termsAndConditions.webp"
import wineSealLogo from "../assets/images/wineSealLogo.png"
import { IoIosArrowBack } from "react-icons/io"

export default function PrivacyPolicy() {
    const navigate = useNavigate()

    return (
        <>
            <div className='flex items-center bg-rose-900 h-10 lg:h-20'>
                <Link onClick={() => navigate(-1)}>
                    <IoIosArrowBack className='mx-3 w-5 h-5 lg:mx-10 lg:w-10 lg:h-10 text-gray-900' />
                </Link>
            </div>
            <div className="relative h-screen flex items-center justify-center">

                <img src={termsAndConditions} className="w-10/12 h-screen object-cover" />
                <div className="absolute w-9/12 h-screen">
                    <h1 className="text-3xl lg:text-6xl my-4 lg:!my-16">Privacy policy</h1>
                    <div className="h-3/6 overflow-y-scroll">
                        <h1 className="text-lg lg:text-3xl my-2 ">1. Privacy Policy</h1>
                        <p className="lg:text-lg">
                            This section contains certain information relating to the procedures for managing our website https://www.crurated.com with reference to the processing of the users' personal data, log files and cookies collected through the site itself. The information is provided only in respect of the above-mentioned website and not of other websites that may be consulted by the users via links. Users/visitors must read this Privacy Policy carefully before submitting any personal information and/or filling in any electronic form on the website. The purpose of this document is to provide information on the methods, timing and nature of the information that the data controller must provide to the users when they connect to the web page https://www.crurated.com, regardless of the purpose of the connection itself. The information notice may be subject to changes due to the introduction of new regulations on the subject and, therefore, users are invited to periodically check out this page. If the user is under 16 years old, he or she must legitimise his or her consent through the authorisation of his or her parents or guardian.

                            Personal data collected

                            Content and information provided voluntarily by the User

                            1. Content and information provided voluntarily by the User
                            Data relating to our business relationship with you, such as the types of products and services that may be to your interest, product preferences and contact details, languages, creditworthiness, marketing preferences and demographics.
                            Information about the way you interact with us, such as purchases, enquiries, customer account information, order and contract information, delivery information, billing and banking information, tax information, transaction and correspondence history, and information about the way you use and interact with our website. The User assumes responsibility for the Personal Data of third parties published or shared through this application and guarantees that he/she has the right to communicate or disseminate them, releasing the owner of the website from any liability towards third parties.
                            If the processing of Personal Data is based on the User's consent, the User may revoke it at any time.

                            2. Data and content acquired automatically during use of the application
                            Technical data: the computer systems and software procedures used to operate this application may acquire, during their normal operation, some Personal Data whose transmission is implicit in the use of internet communication protocols. This information is not collected in order to be associated with identified interested parties, but by its very nature could, through processing and association with Data held by third parties, allow users to be identified. This category includes IP addresses or domain names used by Users connecting to the application, URI (Uniform Resource Identifier) addresses of the resources requested, the time of the request, the method used to submit the request to the server, the size of the file obtained, etc.
                            Use data: Data relating to the use of the website by the User may also be collected, such as the pages visited, the actions performed, the functions and services used.
                            Personal data collected through cookies or similar technologies
                            This website uses cookies, web beacons, unique identifiers and other similar technologies to collect Data about the pages, links visited and other actions you take when you use our services, within advertising content or emails. This data is stored and then transmitted to the same sites the next time the same User visits. The User can view the full Cookie Policy at the following address: https://www.crurated.com/cookies/
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">2. Purpose </h1>
                        <p className="lg:text-lg">
                            - The Personal Data collected is used to provide services to the User or to sell products, including payment and delivery. The Personal Data collected to finalize payment may be that relating to the credit card, bank account used for the transfer or other payment instruments provided. The Payment Data collected by this website depends on the payment system used. Fulfillment of orders for products or services and related activities, such as delivery of products and services, customer service, maintaining accounting records and invoices, training and support activities, updating products and sending security warnings, as well as providing other services related to purchases.
                            - Managing our contractual obligations and customer relationships, in particular managing customer interactions, handling complaints, providing after-sales service, analysing and improving the products and services we offer, providing information about our products or services and communicating special offers and promotions.

                            The protection of our company's websites, networks, systems and locations, and protection against fraud.
                            Managing our day-to-day business needs, such as payment processing, accounting and financial management, product development, contract management, website administration, compliance, corporate governance, audits, reporting and compliance.
                            Management of support and contact requests.
                            Mailing List or Newsletter.
                            Payment management.
                            Interaction with live chat platforms.
                            Interaction with social networks and external platforms.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">3. Modalities</h1>
                        <p className="lg:text-lg">
                            The processing of Personal Data is carried out by computer and/or electronically, with organisational methods and logics strictly related to the indicated purposes. The data collected are processed in order to establish relationships with users, in particular to respond to emails received from contacts on the site or requests for information sent via forms. The data received will be stored on electronic devices, contact lists, software also for possible future communications between the parties. The personal data collected will not be disclosed or communicated to third parties, except in the cases provided for in the information notice and/or by law and, in any case, in the manner permitted by the latter.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">4. Legal Basis </h1>
                        <p className="lg:text-lg">
                            The Controller processes Personal Data relating to the User in the event that one of the following conditions is met

                            the User has given consent for one or more specific purposes;
                            the processing is necessary for the performance of a contract with the User and/or the execution of pre-contractual measures;
                            the processing is necessary for the performance of a legal obligation to which the Controller is subject;
                            processing is necessary for the performance of a task carried out in the public interest or in the exercise of public powers vested in the Controller;
                            the processing is necessary for the pursuit of the legitimate interest of the Controller or of third parties.
                            However, it is always possible to ask the Data Controller to clarify the concrete legal basis of each processing operation.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">5. Place </h1>
                        <p className="lg:text-lg">
                            The Data are processed at the operational headquarters of the Data Controller and in any other place where the parties involved in the processing are located. For further information, please contact the Data Controller at the following email address privacy@crurated.com. The third parties, subsidiaries and affiliates to whom we may disclose your personal data may be located in other countries; therefore, it is possible that data may be transmitted to countries where the privacy protection rules are different from those of your country of residence. In such cases, we will take appropriate measures to ensure that your personal data receives an adequate level of protection; these measures include our Binding Corporate Rules, which set out strict requirements for the processing of personal data that we collect and process worldwide, as well as standard contractual terms to protect your personal data.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">6. Protection Measures</h1>
                        <p className="lg:text-lg">
                            The Processing is carried out according to methods and with instruments suitable to guarantee the security and confidentiality of the Data, the Data Controller having adopted adequate technical and organisational measures to protect personal data against accidental or unlawful destruction, loss, alteration, disclosure, unauthorised access and any other form of unlawful processing. Access to personal data is limited to authorised recipients who have a legitimate reason to know. We operate a comprehensive information security programme that is proportionate to the risks associated with the processing. This programme is periodically reviewed in order to mitigate operational risks and to protect personal data in view of accepted industry practices. We also adopt enhanced security measures for the processing of sensitive personal data. How we protect the personal data we process on behalf of our customers (as data controllers): In some cases, we process personal data as a service on behalf of our customers (as data controllers). In these cases, we collect and process personal data according to the customer's instructions, and we do not use or disclose it for our own purposes. We adopt information security control measures to protect the data collected in this way and undertake to communicate or transfer personal data only in accordance with the customer's instructions or to provide the requested service. Unless otherwise instructed by customers, the personal data we process on their behalf is processed in line with our disclosure and transfer commitments.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">7. Period of Data Retention</h1>
                        <p className="lg:text-lg">
                            The Data Controller will process Personal Data for the time necessary to fulfil the purposes indicated above and for the time necessary to perform the service requested by the User. When the processing of Personal Data is necessary for the pursuit of a legitimate interest of the Controller, the Personal Data will be kept until such interest is satisfied. Where the processing of Personal Data is based on the User's consent, the Controller may retain the Personal Data until revocation. Personal Data may be kept for a longer period if necessary to comply with a legal obligation or by order of an authority. All Personal Data will be deleted at the end of the retention period. Upon expiry of this period, the right of access, deletion, rectification and the right to data portability may no longer be exercised. The Data Controller will process Personal Data for the time necessary to fulfill the purposes indicated above and for the time necessary to perform the service requested by the User.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">8. Data Recipients</h1>
                        <p className="lg:text-lg">
                            Third parties: we may use third parties to provide or perform services and functions on our behalf. We may make personal data available to these third parties for the purposes of performing these services and functions. Any such processing of personal data will be subject to our instructions and consistent with the original purpose.
                            Required by law: We may make personal data about individuals available to public or judicial authorities, law enforcement agencies or other bodies required by law, for example, for national security or law enforcement purposes, as well as to authorities and courts in the countries in which we operate. To the extent permitted by law, we may also disclose such information to third parties (including legal counsel) as necessary to advance, exercise or defend against legal claims or otherwise enforce our rights, to protect our property or the rights, property or safety of others, or as necessary to support external audit, compliance and corporate governance functions. The data may be processed by external parties acting in their capacity as data controllers, such as, but not limited to, authorities and supervisory and control bodies and, in general, public or private parties entitled to request the data, as well as persons, companies, associations or professional firms providing assistance and advice.
                            The data may be processed by the employees of the company functions assigned to the pursuit of the above-mentioned purposes, who have been expressly authorised to process the data and have received adequate operating instructions.
                            The data may also be processed by external parties designated as data processors, who are given appropriate operating instructions. These parties are essentially included in the following categories:
                            companies that offer e-mail sending services;
                            companies that offer website and information system maintenance services;
                            companies that offer support in carrying out market studies;
                            companies that provide management and maintenance services of the database of the Joint Holders.
                            Your data may be processed, if you give your explicit consent, by third parties to whom the data is disclosed. The updated list of Data Processors and Joint Data Processors can be requested by emailing
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">9. Automated Decision Making Process</h1>
                        <p className="lg:text-lg">
                            All Data collected will not be subject to any automated decision-making process that may produce legal effects for the individual or that may significantly affect the individual.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">10. User Rights </h1>
                        <p className="lg:text-lg">
                            Users may exercise certain rights with reference to the Data processed by the Data Controller. In particular, the User has the right to:

                            revoke consent at any time
                            object to the processing of their Data
                            access their Data
                            verify and request rectification
                            obtain the limitation of the processing
                            obtain the deletion or removal of your Personal Data
                            receive your Data or have them transferred to another data controller;
                            lodge a complaint with the data protection supervisory authority and/or take legal action.
                            In order to exercise their rights, Users may address their request to our Privacy Office by writing to privacy@crurated.com at the contact details of the Data Controller indicated in this document. Requests are made free of charge and processed by the Data Controller as soon as possible, in any case within 30 days.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">11. Policies Cookies</h1>
                        <p className="lg:text-lg">
                            When you visit our websites, we may collect certain information by automated means, using various technologies such as cookies, pixel tags, browser analysis tools, server logs and web beacons. In many cases, the information we collect through cookies and other tools is used in a non-identifiable manner, without reference to any personal data. Cookies are small text files that websites transfer to your computer or other device's hard drive through the web browser you use to visit them. We may use cookies to make access to and use of our websites more efficient, to tailor them to your browsing preferences and to improve their functionality. Cookies may be used for performance management, and to collect information for analytical purposes about how our website is used. They may also be used for functionality management, allowing us to make your visits more efficient by remembering, for example, your language preferences, passwords and login details. There are two types of cookies: session cookies, which are deleted from your device when you leave the website; and persistent cookies, which remain on your device for longer or until you manually delete them. We may use flash cookies (also known as local shared objects) and similar technologies to personalise and enhance your online experience. Adobe Flash Player is an application that allows you to quickly develop dynamic content, such as video clips and animations. Flash cookies are used for security purposes and to remember settings and preferences in a similar way to browser cookies, but they are managed through a different interface than the one contained in your web browser. To manage flash cookies, see Adobe's website or visit www.adobe.com. We may use flash cookies or similar technologies for targeted behavioural purposes or to support interest-based advertising. Logs recorded by our servers may also collect information about how users use our websites (usage data). This data may include your domain name, language, browser and operating system type, Internet service provider, Internet Protocol (IP) address, the website or referral that directed you to the website, the website you were visiting before coming to our site, the website you visited next, and the time you spent on the website. We may monitor and use this data to measure the performance and activity of the website, improve its design and functionality or for security purposes. Our website may also use pixel tags and web beacons. These are tiny graphic images contained on web pages or in our emails that allow us to determine whether or not you have performed a particular action. When you access these pages, or when you open or click on an email, pixel tags and web beacons generate a notification about that action. These tools allow us to measure the response to our communications and to improve our web pages and promotions. You can change your browser settings to block cookies, to be notified when you receive a cookie, to delete cookies, or to browse our website using your browser's anonymous use settings. You can find out how to adjust or change these settings in the instructions or help screen of your browser. If you do not agree with our use of cookies or other technologies that store information on your device, we encourage you to change your browser settings. Please note, however, that if you disable cookies or similar technologies, some features of our websites may not function properly. Where required by law, you will be asked to consent to the use of certain cookies and similar technologies before they are used or installed on your computer or other device. Linked Sites: Our websites may contain links to third party websites ("linked sites"). Linked sites are not necessarily subject to review, control or examination by us. Each linked site may have its own terms of use and privacy policy, and users should review and agree to these terms when accessing such linked sites. We assume no responsibility for the policies and practices of linked sites or any links contained in them. These links do not imply our endorsement of the linked sites or any company or service, and we recommend that users read the terms and conditions and notices of such sites carefully before using them. - Minors: Our websites are not intended for minors and are not used to intentionally obtain personal information from minors or to market to minors. If we become aware that a minor has provided personal information through one of our websites, we will remove that information from our systems.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">12. Consent and Revocation of Consent</h1>
                        <p className="lg:text-lg">
                            By providing us with your personal data, including sensitive data, you acknowledge and consent to the collection, processing, transfer, including international transfer, and use of such data in accordance with the provisions of this privacy policy. Where required by law, you will be asked for explicit consent. You will always have the opportunity to object to the use of your personal data for direct marketing purposes or to withdraw any previously given consent for a specific purpose, free of charge, by following the instructions in the e-mails or by contacting our privacy office at hello@crurated.com
                        </p>
                    </div>
                    <div className="flex ml-5 mt-5 justify-end items-center ">
                        <img src={wineSealLogo} alt="" className="w-2/4 lg:w-2/12 transition-transform
            hover:scale-105 duration-200" />
                    </div>
                </div>

            </div>
        </>
    )
}