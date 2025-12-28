
import Slider from "../../Slider/Slider"
import { useGetCategoriesQuery } from "../../../api/categoriesApi"
import { Link, useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { selectedCategory } from "../../../features/category/categorySlice"



const Hero = () => {
    const { data, isLoading } = useGetCategoriesQuery("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if (isLoading) return

    const handleFilter = (category: string) => {
        dispatch(selectedCategory(category))
        navigate("/shop")
    }


    return (
        <section className="mb-10 sm:mb-16 md:mb-20 lg:mb-32 xl:mb-[165px] py-4 sm:py-6">
            <div className="container px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-4 sm:gap-6 lg:gap-8 xl:gap-11 items-start lg:items-center">
                    {/* Left side - Desktop Categories */}
                    <div className="hidden lg:block pr-4 border-r-2 border-gray-200 dark:border-gray-700 pt-6 lg:pt-10">
                        <ul className="space-y-3 lg:space-y-4 font-poppins text-sm lg:text-base max-h-[344px] overflow-y-auto scrollbar-thin">
                            {data?.map((category) => (
                                <li
                                    className="cursor-pointer hover:text-red-500 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                                    onClick={() => handleFilter(category.slug)}
                                    key={category.slug}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Categories */}
                    <div className="lg:hidden w-full">
                        <ul className="font-poppins flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                            {data?.map((category) => (
                                <li
                                    className="cursor-pointer px-3 sm:px-4 py-2 sm:py-3 bg-gray-300 dark:bg-gray-700 rounded-lg dark:text-white text-gray-900 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-colors duration-200 text-xs sm:text-sm whitespace-nowrap"
                                    onClick={() => handleFilter(category.slug)}
                                    key={category.slug}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Slider */}
                    <Link to={"/shop"} className="w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 overflow-hidden">
                        <div className="w-full">
                            <Slider />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero