import { Link, useNavigate } from "react-router-dom"
import termsAndConditions from "../assets/images/termsAndConditions.webp"
import wineSealLogo from "../assets/images/wineSealLogo.png"
import { IoIosArrowBack } from "react-icons/io"

export default function TermsAndConditions() {

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
                    <h1 className="text-3xl lg:text-6xl my-4 lg:!my-16">Terms And Conditions</h1>
                    <div className="h-3/6 overflow-y-scroll">
                        <h1 className="text-lg lg:text-3xl my-2 ">1. RECITALS </h1>
                        <p className="lg:text-lg">
                            Welcome to Crurated ("Crurated'', also referred to as the "Platform"), a specialized platform dedicated to the sale of and services related to various products. This section outlines the General Terms and Conditions ("T&Cs") that govern the relationship between Crurated ("we", "us", "our") and you (individually referred to as a "User" or "Member" and collectively referred to as "Users '' or "Members"). Together, Crurated and you are referred to as the "Parties". Before using the Platform, please read this Agreement, Privacy Policy and Cookie Policy carefully and confirm your acceptance during the registration process. If you don't agree with these terms, Privacy Policy and Cookie Policy, you are not permitted to use our services. We reserve the right to revise these T&Cs at any time, with changes effective from July 1,2023. Changes will take effect upon posting, and your continued use of the Platform signifies your acceptance of any updated T&Cs. As a User, it is your responsibility to review these T&Cs regularly.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">2. ABOUT CRURATED  </h1>
                        <p className="lg:text-lg">
                            Crurated (www.crurated.com) is a website operated by Crurated Limited, a private limited company registered under the laws of England & Wales (Company Number: 13176905, VAT Number: GB 376 8329 51). Incorporated under the Companies Act 2006 on February 3, 2021, our registered office is located at 90 Chancery Lane, London (UK), WC2A 1EU. You may contact us via email at hello@crurated.com. We specialize in the online sale of Wine, other alcoholic beverages, and related accessories ("Products"), available either through fixed-price direct sales or through auctions as detailed in these T&Cs. For the purposes of these Terms, we may interchangeably use "Wine," representing our primary offering, and specific product names with the term "Product" to precisely indicate the product in question. The company has introduced a new category within its scope of services, referred to as 'Experiences.' These experiences, each subject to its own specific terms and conditions, may be detailed on the company's website. For further details or inquiries regarding these experiences, members are encouraged to contact our support team to learn more about our experience offerings.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">3. OUR SERVICES  </h1>
                        <p className="lg:text-lg">
                            3.1 Membership

                            Your Crurated membership will continue until terminated. To use Crurated you must have internet access and you should provide us with one or more payment methods among which credit cards or bank wire transfers so that you must register to become a member. Membership fees and all other payments will be paid by the users through credit card or bank transfer.

                            Unless you cancel your membership before your billing date, you authorize us to charge the membership fee for the next billing cycle to your payment methods, as per this clause.

                            3.2 Membership plans

                            We may offer a number of membership plans. Our cost membership plans are set out in point 3.3., stating that Users can choose to upgrade their membership at any point in time. We will bill the prorated amount for the remainder of the cycle, and it will be charged to the User’s credit card on file.

                            The User can downgrade his plan by submitting a request: Crurated will review and approve the downgrade request. The downgrade can be of one level below his current plan and will follow the order as below reported: from Ambassador to Collector; from Collector to Connoisseur.

                            It’s not possible to downgrade the plan from Connoisseur to Explorer even in the case the customer never bought with Crurated.

                            3.3 Membership costs and services

                            There are 4 (four) different types of batches of Products: Limited, Exclusive, Selected and Crurated, respectively dedicated to the different categories of Users.

                            Limited: is only available to Ambassador members.Exclusive: is only available to Ambassador and Collector members.

                            Selected: is available to Connoisseur, Ambassador and Collector.

                            Crurated: is available to Connoisseur, Ambassador, Collector and Explorer members.

                            Crurated decided at its discretion the definition of each category and will independently decide which batches fall under each category.

                            3.3.1 Explorer

                            (i) Cost: no monthly fee.

                            (ii) Benefits:

                            Access to “Crurated” batches for all different sales types.

                            Explorer members are eligible to submit offers for only 1 (one) batch for all the offers on the Platform.

                            In case of tied offers, these members will have 4th priority in terms of allocation in collections.

                            Complimentary storage for all the batches purchased on Crurated in Crurated warehouse. Complimentary storage is limited to 50 (fifty) bottles present in the warehouse at any given time. Only applies to active members.

                            Every bottle will be registered with a unique blockchain certificate upon shipment from the warehouse.

                            No buyer’s premium will be applied on any of the purchases.

                            The purchased Products will be protected and insured against such events as breakage, loss, theft or fire and other adverse events that may occur in Crurated warehouse.

                            3.3.2 Connoisseur

                            (i) Cost: Monthly membership fee € 30 (thirty) plus VAT; Annual membership fee: € 300 (three hundred) plus VAT. Membership fees are charged the first day of the month

                            (ii) Benefits:

                            Access to ‘’Selected’’ and “Crurated” batches for all different sales types.
                            Connoisseur members are eligible to submit offers for only 1 (one) batch for all the offers on the Platform.
                            In case of tied offers, these members will have 3rd priority in terms of allocation in collections.
                            Complimentary storage for all the batches purchased on Crurated in Crurated warehouse. Complimentary storage is limited to 500 (five hundred) bottles present in the warehouse at any given time. Only applies to active members.
                            Every bottle will be registered with a unique blockchain address upon shipment from the warehouse.
                            No buyer’s premium will be applied on any of the purchases. The purchased Products will be protected and insured against such events as breakage, loss, theft or fire and other adverse events that may occur in Crurated warehouse.
                            3.3.3 Collector

                            (i) Cost: Monthly membership fee: € 150 (one hundred and fifty) plus VAT, Annual membership fee: €1500 plus VAT. Membership fees are charged the first day of the month

                            (ii) Benefits:

                            Access to “Exclusive”, “Crurated” and ‘’Selected’’ batches for all different sales types.
                            Collector members are eligible to submit offers for more than 1 (one) batch, depending on the availability. The number of offers that the Collector member can put an offer for will be determined by the Owner and will be different for all batches. Allocation of the additional cases will be based on availability.
                            In case of tied offers, these members will have 2nd priority in terms of allocation in collections.
                            Unlimited complimentary storage for all the batches purchased on Crurated in Crurated warehouse. Only applies to active members.
                            Every bottle will be registered with a unique blockchain address upon shipment from the warehouse.
                            No buyer’s premium will be applied on any of the purchases.
                            The purchased Products will be protected and insured against such events as breakage, loss, theft or fire and other adverse events that may occur in Crurated warehouse.
                            3.3.4. Ambassador

                            (i) Cost: Monthly membership fee: €500 (five hundred) plus VAT, Annual membership fee: €5000 (five thousand) plus VAT. Membership fees are charged the first day of the month

                            (ii) Benefits:

                            Access to “Limited”, “Exclusive”, “Crurated” and ‘’Selected’’ batches for all different sale types
                            Ambassador members are eligible to submit offers for more than 1 (one) batch, depending on the availability. The number of offers that the Ambassador member can put an offer for will be determined by the Owner and will be different for all batches. Allocation of the additional cases will be based on availability.
                            Ambassador members will have 1st priority in allocation of all batches.
                            In case of tied offers, these members will have 1st priority in terms of allocation in collections.
                            Unlimited complimentary storage for all the batches purchased on Crurated in Crurated warehouse. Only applies to active members.
                            Every bottle will be registered with a unique blockchain address upon shipment from the warehouse.
                            No buyer’s premium will be applied on any of the purchases.
                            The purchased Products will be protected and insured against such events as breakage, loss, theft or fire and other adverse events that may occur in Crurated warehouse
                            3.3.4 The owner has the right to determine the allocation of batches to different categories of membership. Users will be able to update their membership plan to be able to bid for batches that are otherwise unavailable. Different subscription types will have the opportunity to submit bids.

                            3.5 Registration

                            You must be of a legal drinking age within your country of residence to acquire the status of member of the Crurated community. To use the services under this section or any part of it, Users must register in a truthful, complete, and correct manner filling all the required data in the relevant registration form. The Users must also accept the privacy policy that you find clicking on this link: https://crurated.com/privacy-policy and these T&C in full. Users are responsible for keeping their login credentials strictly confidential.

                            It remains understood that Owner shall not be deemed liable under any circumstances in case of loss, disclosure, theft or unauthorized use by third parties, for whatever reason, of the Users’ access credential.

                            Once you have registered you should not permit any third party to use or access your account on your behalf or otherwise. You will be liable for all bids made via your account. After their first purchase, Users will be requested to complete the identity verification process.

                            3.6 Suspension of Membership

                            In case a User does not fulfill the outstanding payments, he/she needs to update the payment method within 1 (one) week if the favorite Payment method is Credit Card or 2 (two) weeks if the favorite Payment method is Bank Transfer. If he/she fails to update the payment information, the Owner has the right to suspend the account. In this case the member will not be able to:

                            Participate in new auctions
                            Ship wines
                            Even if suspended, the Member will continue to be charged for Membership fees. The account cannot have a negative balance for more than 12 (twelve) months. After 12 (twelve) months of negative balance, Crurated has the right to sell a portion of the wines of the Member in its marketplace for the company to bring the account into zero balance, subject to its standard marketplace fees. The User will receive monthly notifications about the negative balance of the account and in case the balance is negative for more than 12 (twelve) months it will receive a notification about upcoming sales and results of his/her wines 2 (two) weeks before and 1 (one) week before the date of the sale

                            3.7 Cancellation

                            You can cancel your Crurated membership at any time, and you will continue to have access to the Platform until your billing period ends. Membership fees are non-refundable, and we do not provide refunds or credits for any partial membership periods. If You wish to cancel, please go to the “Account” page, and follow the instructions herein for cancellation. If you cancel your membership, your account will be automatically closed at the end of your current billing period. To see when your account will close, click “Billing details” on the “Account” page. If you choose to cancel your membership with Crurated, you will have 30 (thirty) days to organize the delivery of your bottles. If you do not arrange delivery within this time, we will charge you €2/month per bottle (included in your voucher(s)) per year in advance from the expiry of that 30-day period. More info in the Storage clause.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">4. TERMS OF SALE   </h1>
                        <p className="lg:text-lg">
                            These terms of sale outline the conditions under which we offer our products on the Platform. We retain the right to exclude specific countries and Users from purchasing certain Products, as long as these exclusions align with the agreements we have made with our suppliers.

                            We offer six distinct methods of purchase or sale on our platform:

                            Collections
                            Single Lot Auctions
                            Fixed Price Offers
                            Private Sales
                            Direct Offers
                            Barrels
                            Each method operates under different procedures and guidelines, which are detailed in the following sections.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">5. PAYMENT METHODS </h1>
                        <p className="lg:text-lg">
                            5.1 Users must ensure that all payments, including allocated Products, membership fees, relevant taxes, duties, delivery charges, and processing fee costs, are settled via approved payment methods, and it is the User's responsibility to maintain current and accurate payment information on their account.

                            5.2 Payments must be completed within seven (7) business days following a successful purchase for credit card payments and within fourteen (14) business days for bank transfer payments. Failure to meet this deadline gives Crurated the right to withhold the allocation of the lot to the Member and may lead to account suspension.

                            5.3 Be aware that certain payment methods may be subject to additional fees imposed by the issuing entity, such as foreign transaction fees or processing charges or other local tax or VAT charges. Crurated bears no responsibility for such costs and/or charges.

                            5.4 Users may request bank transfers as a payment method, subject to approval and activation by Crurated. This request can be made via the “My Account” section. If a User has outstanding membership fees, the bank transfer payment option will be unavailable until all outstanding fees are settled. Upon settlement, the bank transfer option may be reactivated, subject to Crurated's approval and agreeable terms on a case-by-case basis.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">6. PACKAGING AND DELIVERY GUIDELINES </h1>
                        <p className="lg:text-lg">
                            6.1.1. Inspection and Labeling: Crurated conducts a meticulous inspection of each Wine bottle and its packaging, including opening of the Original Wooden Cases (“OWC”). A Crurated label with a unique serial number enabling NFT technology is affixed to each Wine bottle sold.

                            6.1.2 Wooden Cases Packaging: OWCs may suffer breakage during inspection due to their structure. Although utmost care is taken, Crurated does not guarantee against such breakage. OWCs are reconditioned when possible, and are not retained if the lot contains fewer Wine bottles than the case. Any loss or breakage resulting from a shipment arranged by Crurated should be reported in writing within three (3) days of the delivery. This process should involve the examination of the property in the presence of the carrier upon arrival. Please refer to clauses 6.2, 6.3 and 6.5 for more information on delivery guidelines.

                            6.1.3 In the interest of safeguarding the Wines' condition during transit, our packaging process may involve repacking the Wines in protective containers. Please be aware that the original wooden cases, while carefully preserved during the inspection, are not automatically included with the Wines as part of the packaging. Their inclusion depends on factors such as the shipping regulations and the specific nature of the shipment.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">7. STORAGE </h1>
                        <p className="lg:text-lg">
                            7.1 Crurated provides its Ambassador and Collector tier members with unlimited storage at no extra cost while their memberships remain active. For Connoisseur tier members, storage is complimentary for up to 500 bottles; any bottles exceeding this limit incur a storage fee of €2 per bottle per month in advance. Explorer tier members are allowed storage of up to 50 bottles at no charge, with each additional bottle costing €2 per month, also billed monthly in advance.

                            7.2 If a User decides to cancel their registration with the Crurated platform, they are obligated to arrange delivery of their stored Wines within 30 days from the date of cancellation. Failure to adhere to this deadline will result in the application of a storage fee of €2 per bottle per month, payable in advance.

                            7.3 Complimentary Storage Solution: Recognizing these shipping limitations of Spirits offering, Crurated provides a complementary storage service for customers affected by these constraints. This service allows customers in markets where direct shipping of spirits is not feasible to store their purchased spirits at no additional cost.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">8. SALES AND OTHER TAXES </h1>
                        <p className="lg:text-lg">
                            8.1 Users shall be accountable for any tax, tariff, or additional charges that may be imposed by the customs authorities of each destination country. If required by law, Crurated will charge or remit any such costs associated with the sale, which cannot be predetermined. All displayed prices for Users /members are deemed exclusive of any sales tax, including United Kingdom Value Added Tax (VAT), or any other applicable tax of a similar nature. The User/member shall pay these taxes at the prevailing rate, if applicable. VAT or sales tax, as applicable, will be charged on the total amount invoiced to the User when the product is dispatched from the warehouse for delivery. This total amount is comprised of the price of the Wine, the processing fee, and the delivery charges.

                            8.2 Users asserting exemption from sales, use, or other taxes must furnish Crurated with supporting documents. The adequacy of these documents for exemption purposes will be determined by Crurated's sole discretion and judgment, prior to the release of property to the member.
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">9. DUTIES AND LIABILITIES </h1>
                        <p className="lg:text-lg">9.1 While Crurated endeavors to ensure continuous, uninterrupted access to the Platform, it cannot guarantee that the Platform will always be available or free of faults, defects, or interruptions. Crurated will not be liable for any delay, fault, or interruption in the Platform due to: force majeure or accident; power supply interruption; lack of connection; software errors; hardware failure; database problems; errors not attributable to wilful misconduct or negligence on the part of Crurated, or any third-party actions, including those of Crurated's suppliers.

                            9.2 Nothing in these T&C seeks to exclude or limit liability for death or personal injury caused by negligence, fraudulent misrepresentation, or any other liability which may not be limited or excluded under applicable law.

                            9.3 While Crurated strives to maintain the integrity of its site and Platform, it does not warrant that the site will always be error-free, that defects will be corrected in a timely manner, or that the site or the server that hosts it is free of viruses or other harmful elements. Crurated does not guarantee that the site or Platform will always function without disruptions, delays, or imperfections. Crurated will not be responsible or liable to you for any loss of content or material uploaded or transmitted through the site.

                            9.4 Except as expressly provided in these T&C, all other warranties, terms, and conditions (whether express or implied) are hereby excluded to the fullest extent permitted under applicable law, subject always to your statutory and common law consumer rights.

                            9.5 Under no circumstances will Crurated be liable for:

                            economic losses (including, without limitation, loss of revenues, data, profits, contracts, business, or anticipated savings); or
                            loss of goodwill or reputation; or
                            special, indirect, consequential, incidental, or punitive damages, arising out of or in connection with these T&C or your use of the Platform, regardless of the form of action, whether in contract, tort (including negligence), strict liability, or otherwise, except where such exclusions are prohibited by law.</p>
                        <h1 className="text-lg lg:text-3xl my-2 ">10. RIGHT TO CANCEL FOR UK USERS</h1>
                        <p className="lg:text-lg">
                            10.1 The provisions under these Terms & Conditions apply exclusively to UK Users making purchases as consumers.

                            10.2 In case of cancellation of a purchase, you, as the User, have the right to a refund of all payments made, including administrative and processing fees. However, these processing fees may be non-refundable in certain instances where Crurated has already undertaken administrative tasks relating to your purchase. This could include instances where a purchase process has been initiated, or where we have already incurred costs on your behalf. We will provide specific details of any non-refundable fees at the time of purchase.

                            10.3 If a purchase cancellation is initiated, Crurated shall reimburse all payments received from the User, excluding non-refundable processing fees and any applicable VAT, along with the delivery costs (excluding any additional costs resulting from your choice of a delivery method other than the least expensive type of standard delivery offered by us). You will bear the direct cost of returning the Products.

                            10.4 Crurated will process the refund without undue delay, and no later than 14 days after receiving the returned goods or proof of their return, whichever is earlier. The refund will be made via the same payment method used for the initial transaction.

                            10.5 Crurated reserves the right to deduct from the refund any loss in value of the Products if the loss is the result of unnecessary handling by you. Please note, this right of cancellation does not apply to bottles of Wine which have been opened.

                            10.6 If you have the Products in your possession, you are obliged to take reasonable care of them. You are expected to send the Products back to our contact address at your own expense (unless we delivered the item to you by mistake or the items are damaged or defective) as soon as possible once you have canceled the contract.

                            10.7 Crurated reserves the right to charge a fee not exceeding our direct costs of recovering the Products if you fail to return them at your own expense.

                            10.8 Please note, the right to cancel a purchase does not apply for:

                            The supply of Products, the price of which is dependent on fluctuations in the financial market that are beyond our control.
                            The supply of Products made to your specifications or clearly personalized or which by reason of their nature cannot be returned or are liable to deteriorate or expire rapidly.
                            In any case, to exercise the right to cancel a purchase, you should inform Crurated of such a decision by a clear written statement to our email contact: hello@crurated.com no later than the end of the 14-day cancellation period. You also have the right to cancel any bid prior to its acceptance by Crurated (i.e. before the end of the auction).
                        </p>
                        <h1 className="text-lg lg:text-3xl my-2 ">11. CREDIT POLICY </h1>
                        <p className="lg:text-lg">Crurated has implemented a new Credit Policy. This policy is designed to manage credit risks and involves close monitoring of overdue receivables, issuing monthly statements to customers with overdue accounts, and implementing stringent risk management procedures. Our goal is to safeguard the financial interests of both our customers and Crurated.</p>

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