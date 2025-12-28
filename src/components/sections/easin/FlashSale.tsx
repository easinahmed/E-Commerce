import { ArrowLeft, ArrowRight } from "lucide-react"
import HeadingHomePage from "../../HeadingHomePage"
import { useGetProductsQuery } from "../../../api/productApi"
import ProductCard from "../../ProductCard"
import Button2 from "../../Button2"
import { useEffect, useState, useCallback } from "react"
import Loading from "../../Loading"
import Slider from "react-slick";


const FlashSale: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery()

  if (isLoading) {
    return <p>loading...</p>
  }


  const flashSale = (data?.products ?? []).slice().sort((a, b) => {
    return b.discountPercentage - a.discountPercentage
  }).slice(0, 8)



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <section className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-[60px] py-4 sm:py-6">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-8 md:gap-12 lg:gap-20 w-full sm:w-auto">

            <HeadingHomePage subHeading="Today's" heading="Flash Sales" headingAlign="left" />
            <Countdown targetDate="2025-12-31T23:59:59" />
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-2">

          </div>
        </div>

        {/* Grid Layout */}
        <div>

          {isLoading && <Loading />}

        </div>

        {/* Grid Layout*/}
        <div className="relative">
          <Slider {...settings}>
            {
              flashSale.map((product) => {
                return (
                  <div key={product.id} className="px-2 sm:px-3">
                    <ProductCard product={product} />
                  </div>
                )
              })
            }
          </Slider>
        </div>

        <div className="flex items-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 justify-center">

          <Button2 to="/shop">View All Products</Button2>
        </div>

      </div>
    </section>
  )
}
export default FlashSale



const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = (+new Date(targetDate)) - (+new Date());

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="flex max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[320px] xl:max-w-[320px] justify-center mx-auto">
      <div className="flex flex-wrap justify-center items-start gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="flex flex-col justify-center items-center"
          >
            <span className="text-[10px] xs:text-xs sm:text-sm font-poppins text-gray-700 font-medium">{unit.label}</span>
            <p className="font-bold font-inter text-xl xs:text-2xl sm:text-3xl md:text-[32px] text-black">
              {unit.value.toString().padStart(2, "0")}  {index < 3 ? <span className="text-button2">:</span> : ""}

            </p>
          </div>
        ))}
      </div>
    </section>
  );
};



function PrevArrow(props: React.HTMLAttributes<HTMLDivElement>) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="bg-secondary rounded-full hidden lg:flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 absolute -top-14 sm:-top-16 md:-top-20 lg:-top-24 right-16 sm:right-24 md:right-32 lg:right-48 z-50 cursor-pointer transition-all hover:bg-button2 hover:text-white"

    >
      <ArrowLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
    </div>
  );
}

function NextArrow(props: React.HTMLAttributes<HTMLDivElement>) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="hidden bg-secondary rounded-full lg:flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 absolute -top-14 sm:-top-16 md:-top-20 lg:-top-24 right-2 sm:right-4 md:right-6 lg:right-8 z-50 cursor-pointer transition-all hover:bg-button2 hover:text-white">
      <ArrowRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
    </div>
  );
}

