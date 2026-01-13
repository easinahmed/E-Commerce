import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGetProductsQuery } from "../../../api/productApi";
import HeadingHomePage from "../../HeadingHomePage"
import ProductCard from "../../ProductCard";
import Loading from "../../Loading";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";


const ExploreProducts: React.FC = () => {

    const { data, isLoading } = useGetProductsQuery();

    const sliderRef = useRef<Slider>(null)
    const [sliderConfig, setSliderConfig] = useState({
    slidesToShow: 2,
    rows: 2,
    slidesPerRow: 2,
})

useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth

        if (width <= 640) {
            setSliderConfig({
                slidesToShow: 1,
                rows: 1,
                slidesPerRow: 1,
            })
        } else if (width <= 768) {
            setSliderConfig({
                slidesToShow: 1,
                rows: 2,
                slidesPerRow: 1,
            })
        } else if (width <= 1024) {
            setSliderConfig({
                slidesToShow: 2,
                rows: 2,
                slidesPerRow: 1,
            })
        } else {
            setSliderConfig({
                slidesToShow: 2,
                rows: 2,
                slidesPerRow: 2,
            })
        }
    }

    handleResize() // initial run
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
}, [])

    const settings = {
        infinite: true,
        speed: 500,
       ...sliderConfig,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    rows: 2,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    rows: 2,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    rows: 2,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesPerRow: 1,
                }
            }
        ]
    }

  const handleClickPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const handleClickNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); 
    }
  };
    return (
        <section className="mb-[168px]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <HeadingHomePage subHeading="Our Products" heading="Explore Our Products" headingAlign="left" />

                    {/* Right Buttons */}
                    <div className="flex items-center gap-2">
                        <div onClick={handleClickPrev} className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5">
                            <ArrowLeft />

                        </div>
                        <div onClick={handleClickNext} className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5">
                            <ArrowRight />

                        </div>
                    </div>
                </div>

                <div>

                    {isLoading && <Loading />}

                </div>

                <div className="slider-container px-6 md:px-10 lg:px-16">
                    <Slider {...settings} ref={sliderRef}>
                        {
                        data?.products?.map((product) => {
                            return (
                               <div key={product.id} className="px-2 pb-3 sm:px-3">
                                 <ProductCard  product={product} />
                               </div>
                            )
                        })
                    }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ExploreProducts