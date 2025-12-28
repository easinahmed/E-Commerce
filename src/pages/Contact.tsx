
import { SlashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { Icon } from "@iconify/react"
import Button2 from "../components/Button2"
import { Link } from "react-router"
const Contact: React.FC = () => {
    return (
        <section>
            <div className="container mx-auto px-2 sm:px-4">
                <div className="contact_container">
                    <div className="mt-10 sm:mt-14 md:mt-20 mb-10 sm:mb-14 md:mb-20">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-xs sm:text-sm md:text-[14px]">
                                    <BreadcrumbLink>
                                    <Link to={"/"}>Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem className="text-xs sm:text-sm md:text-[14px]">
                                    <BreadcrumbLink>
                                    <Link to={"/contact"}>Contact</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 sm:gap-5 md:gap-6 lg:gap-7.5">
                        {/* Contact Info Box */}
                        <div className="py-6 sm:py-8 md:py-10 max-w-full lg:max-w-[340px] shadow-contact px-4 sm:px-6 md:px-9 rounded-sm">
                            {/* Call Us */}
                            <div className="flex items-center mb-4 sm:mb-5 md:mb-6 gap-3 sm:gap-4">
                                <div className="bg-button2 rounded-full w-8 sm:w-9 md:w-10 text-white h-8 sm:h-9 md:h-10 flex items-center justify-center shrink-0">
                                    <Icon icon="akar-icons:phone" width="16" height="16" className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
                                </div>
                                <p className="font-poppins font-medium text-sm sm:text-base md:text-base">Call To US</p>
                            </div>

                            <p className="mb-2 sm:mb-3 md:mb-4 font-poppins text-xs sm:text-sm md:text-sm">We are available 24/7, 7 days a week.</p>
                            <p className="font-poppins text-xs sm:text-sm md:text-sm mb-4 sm:mb-6 md:mb-8">Phone: +8801611112222</p>

                            {/* Divider */}
                            <div className="w-full h-px bg-button mb-4 sm:mb-6 md:mb-8"></div>

                            {/* Write To Us */}
                            <div className="flex items-center mb-4 sm:mb-5 md:mb-6 gap-3 sm:gap-4">
                                <div className="bg-button2 rounded-full w-8 sm:w-9 md:w-10 text-white h-8 sm:h-9 md:h-10 flex items-center justify-center shrink-0">
                                    <Icon icon="material-symbols:mail-outline" width="16" height="16" className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
                                </div>
                                <p className="font-poppins font-medium text-sm sm:text-base md:text-base">Write To US</p>
                            </div>

                            <p className="mb-2 sm:mb-3 md:mb-4 font-poppins text-xs sm:text-sm md:text-sm">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="font-poppins text-xs sm:text-sm md:text-sm mb-2 sm:mb-3 md:mb-4">Emails: customer@exclusive.com</p>
                            <p className="font-poppins text-xs sm:text-sm md:text-sm">Emails: support@exclusive.com</p>
                        </div>

                        {/* Form */}
                        <div className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 max-w-full shadow-contact rounded-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-4 md:gap-x-4 gap-y-4 sm:gap-y-6 md:gap-y-8 mb-4 sm:mb-6 md:mb-8">
                                {/* Name */}
                                <div className="relative col-span-1">
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-sm bg-secondary dark:bg-gray-700 h-10 sm:h-12 md:h-[50px] font-poppins text-xs sm:text-sm md:text-base text-[rgba(0,0,0,0.53)] dark:text-gray-300 py-2 sm:py-3 md:py-3 px-3 sm:px-4 md:px-4 pr-6 focus:outline-none focus:ring-1 focus:ring-button2"
                                        placeholder="Your Name"
                                    />
                                    <span className="absolute right-3 sm:right-4 md:right-4 top-1/2 -translate-y-1/2 text-button2 opacity-50">*</span>
                                </div>

                                {/* Email */}
                                <div className="relative col-span-1">
                                    <input
                                        type="email"
                                        required
                                        className="w-full rounded-sm bg-secondary dark:bg-gray-700 h-10 sm:h-12 md:h-[50px] font-poppins text-xs sm:text-sm md:text-base text-[rgba(0,0,0,0.53)] dark:text-gray-300 py-2 sm:py-3 md:py-3 px-3 sm:px-4 md:px-4 pr-6 focus:outline-none focus:ring-1 focus:ring-button2"
                                        placeholder="Your Email"
                                    />
                                    <span className="absolute right-3 sm:right-4 md:right-4 top-1/2 -translate-y-1/2 text-button2 opacity-50">*</span>
                                </div>

                                {/* Phone */}
                                <div className="relative col-span-1">
                                    <input
                                        type="tel"
                                        required
                                        className="w-full rounded-sm bg-secondary dark:bg-gray-700 h-10 sm:h-12 md:h-[50px] font-poppins text-xs sm:text-sm md:text-base text-[rgba(0,0,0,0.53)] dark:text-gray-300 py-2 sm:py-3 md:py-3 px-3 sm:px-4 md:px-4 pr-6 focus:outline-none focus:ring-1 focus:ring-button2"
                                        placeholder="Your Phone"
                                    />
                                    <span className="absolute right-3 sm:right-4 md:right-4 top-1/2 -translate-y-1/2 text-button2 opacity-50">*</span>
                                </div>

                                {/* Message */}
                                <textarea
                                    className="col-span-1 sm:col-span-2 lg:col-span-3 h-32 sm:h-40 md:h-[207px] bg-secondary dark:bg-gray-700 rounded-sm resize-none py-2 sm:py-3 md:py-3 px-3 sm:px-4 md:px-4 text-xs sm:text-sm md:text-base text-[rgba(0,0,0,0.49)] dark:text-gray-300 font-poppins focus:outline-none focus:ring-1 focus:ring-button2"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <div className="flex items-center justify-end">
                                <Button2 className="text-sm sm:text-base md:text-base">Send Message</Button2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact