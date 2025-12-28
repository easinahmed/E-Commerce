import { Link } from "react-router"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../../components/ui/breadcrumb"
import { SlashIcon } from "lucide-react"
import { useState } from "react"
import Button2 from "../../components/Button2"
import { gamepad, monitor } from "../../constant/constant"


const CheckOut: React.FC = () => {
    return (
        <section>
            <div className="container mx-auto px-2 sm:px-4 pt-10 sm:pt-14 md:pt-20">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="text-xs sm:text-sm md:text-[14px]">
                            <BreadcrumbLink >
                                <Link to={"/account"}>Account</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <SlashIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className="text-xs sm:text-sm md:text-[14px]">
                            <BreadcrumbLink >
                                <Link to={"/account"}>My Account</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden sm:block">
                            <SlashIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className="hidden sm:block text-xs sm:text-sm md:text-[14px]">
                            <BreadcrumbLink >
                                <Link to={"/shop"}>Product</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden sm:block">
                            <SlashIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className="hidden sm:block text-xs sm:text-sm md:text-[14px]">
                            <BreadcrumbLink >
                                <Link to={"/cart"}>View Cart</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block">
                            <SlashIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem className="hidden md:block text-xs sm:text-sm md:text-[14px]">
                            <BreadcrumbLink >
                                <Link to={"/checkout"}>CheckOut</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-14 md:mt-20 justify-between">
                    <BillingForm />

                    <div className="max-w-full lg:max-w-[526px] w-full lg:w-auto">
                        <OrderSummary />
                        <PaymentOptions />
                        <CouponSection />
                        <Button2 className="w-full">Place Order</Button2>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CheckOut


const BillingForm: React.FC = () => {
    return (
        <div className="max-w-full lg:max-w-[470px] space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter leading-6 sm:leading-7 md:leading-7.5 tracking-wide font-medium mb-6 sm:mb-8 md:mb-12">Billing Details</h2>

            <form className="space-y-6 sm:space-y-7 md:space-y-8 font-poppins">
                <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        First Name<span className="text-red-500">*</span>
                    </label>
                    <input type="text" className="w-full bg-secondary dark:bg-gray-700 border dark:border-gray-600 rounded-sm p-1.5 sm:p-2 md:p-2.5 text-xs sm:text-sm dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-button2" />
                </div>

                <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">Company Name</label>
                    <input type="text" className="w-full bg-secondary dark:bg-gray-700 border dark:border-gray-600 rounded-sm p-1.5 sm:p-2 md:p-2.5 text-xs sm:text-sm dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-button2" />
                </div>

                <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        Street Address<span className="text-red-500">*</span>
                    </label>
                    <input type="text" className="w-full border bg-secondary dark:bg-gray-700 dark:border-gray-600 rounded-sm p-1.5 sm:p-2 md:p-2.5 text-xs sm:text-sm dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-button2" />
                </div>

                <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        Apartment, floor, etc. (optional)
                    </label>
                    <input type="text" className="w-full border bg-secondary dark:bg-gray-700 dark:border-gray-600 rounded-sm p-1.5 sm:p-2 md:p-2.5 text-xs sm:text-sm dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-button2" />
                </div>

                <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        Town/City<span className="text-red-500">*</span>
                    </label>
                    <input type="text" className="w-full border bg-secondary dark:bg-gray-700 dark:border-gray-600 rounded-sm p-1.5 sm:p-2 md:p-2.5 text-xs sm:text-sm dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-button2" />
                </div>

                <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input type="tel" className="w-full border bg-secondary dark:bg-gray-700 dark:border-gray-600 rounded-sm p-1.5 sm:p-2 md:p-2.5 text-xs sm:text-sm dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-button2" />
                </div>

                <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-1.5 sm:mb-2">
                        Email Address<span className="text-red-500">*</span>
                    </label>
                    <input type="email" className="w-full border bg-secondary dark:bg-gray-700 dark:border-gray-600 rounded-sm p-1.5 sm:p-2 md:p-2.5 text-xs sm:text-sm dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-button2" />
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" className="accent-red-500 w-3.5 h-3.5 sm:w-4 sm:h-4 cursor-pointer" />
                    <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                        Save this information for faster check-out next time
                    </label>
                </div>
            </form>
        </div>
    );
};

const OrderSummary: React.FC = () => {
    return (
        <div className="w-full mb-6 sm:mb-7 md:mb-8 space-y-4 sm:space-y-5 md:space-y-6">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 border-b pb-3 sm:pb-4 md:pb-3">
                <div className="flex justify-between items-center gap-3 sm:gap-4">
                    <span className="flex items-center gap-3 sm:gap-4 md:gap-5.5">
                        <img src={monitor} alt="Monitor" className="w-12 h-12 sm:w-14 sm:h-14 md:w-[54px] md:h-[54px]" />
                        <p className="text-xs sm:text-sm md:text-base">LCD Monitor</p>
                    </span>
                    <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">$650</p>
                </div>

                <div className="flex justify-between items-center gap-3 sm:gap-4">
                    <span className="flex items-center gap-3 sm:gap-4 md:gap-5.5">
                        <img src={gamepad} alt="Gamepad" className="w-12 h-12 sm:w-14 sm:h-14 md:w-[54px] md:h-[54px]" />
                        <p className="text-xs sm:text-sm md:text-base">H1 Gamepad</p>
                    </span>
                    <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">$1100</p>
                </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8 md:mt-8 text-xs sm:text-sm dark:text-gray-300">
                <div className="flex justify-between">
                    <p>Subtotal:</p>
                    <p>$1750</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2 sm:pt-3 md:pt-2 dark:border-gray-600">
                    <p>Total:</p>
                    <p>$1750</p>
                </div>
            </div>
        </div>
    );
};

const PaymentOptions: React.FC = () => {
    const [selected, setSelected] = useState("cod");

    return (
        <div className="space-y-2 sm:space-y-3 md:space-y-3 mb-6 sm:mb-7 md:mb-8">
            <label className="flex items-center justify-between gap-2 sm:gap-3 cursor-pointer">

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

                    <input
                        type="radio"
                        name="payment"
                        checked={selected === "bank"}
                        onChange={() => setSelected("bank")}
                        className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm md:text-base dark:text-gray-300">Bank</span>
                </div>
                <img
                    src="payments.png"
                    alt="Payments"
                    className="h-6 sm:h-7 md:h-8 w-auto ml-1 sm:ml-2"
                />
            </label>

            <label className="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer">
                <input
                    type="radio"
                    name="payment"
                    checked={selected === "cod"}
                    onChange={() => setSelected("cod")}
                    className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                />
                <span className="text-xs sm:text-sm md:text-base dark:text-gray-300">Cash on delivery</span>
            </label>
        </div>
    );
};

const CouponSection: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-7 md:mb-8 mt-6 sm:mt-7 md:mt-8">
            <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 h-10 sm:h-12 md:h-14 w-full rounded-sm bg-secondary dark:bg-gray-700 dark:border-gray-600 text-xs sm:text-sm md:text-base dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-button2"
            />
            <Button2 className="h-10 sm:h-12 md:h-14 text-xs sm:text-sm md:text-base">Apply Coupon</Button2>
        </div>
    );
};