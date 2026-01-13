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
  const [width, setWidth] = useState(4)

  let screenSize = window.innerWidth
  useEffect(()=>{
      if (screenSize <= 640) {
        setWidth(1)
        
      }
      else if( screenSize <=768){
        setWidth(2)
      }
      else if( screenSize <=1024){
        setWidth(3)
      }
      else{
        setWidth(4)
      }
  }, [screenSize])

  if (isLoading) {
    return <p>loading...</p>
  }


  const flashSale = (data?.products ?? []).slice().sort((a, b) => {
    return b.discountPercentage - a.discountPercentage
  }).slice(0, 8)



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width,
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
    <section className="mb-8 sm:mb-10 md:mb-14 lg:mb-16 xl:mb-20 py-4 sm:py-6 md:py-8">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full sm:w-auto">

            <HeadingHomePage subHeading="Today's" heading="Flash Sales" headingAlign="left" />
            <Countdown targetDate="2025-12-31T23:59:59" />
          </div>

         
         
        </div>

        {/* Grid Layout */}
        <div>

          {isLoading && <Loading />}

        </div>

        {/* Slider Container */}
        <div className="relative px-0 sm:px-0 md:px-10 lg:px-16">
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

        <div className="flex items-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 justify-center">

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
    <section className="flex w-full sm:w-auto justify-center sm:justify-start">
      <div className="flex flex-wrap justify-center sm:justify-start items-start gap-3 sm:gap-4 md:gap-6 px-0 sm:px-0">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="flex flex-col justify-center items-center"
          >
            <span className="text-[10px] xs:text-xs sm:text-sm font-poppins text-gray-700 font-medium">{unit.label}</span>
            <p className="font-bold font-inter text-xl xs:text-2xl sm:text-3xl md:text-4xl text-black">
              {unit.value.toString().padStart(2, "0")}  {index < 3 ? <span className="text-button2">:</span> : ""}

            </p>
          </div>
        ))}
      </div>
    </section>
  );
};



function PrevArrow(props:any) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="bg-secondary rounded-full hidden lg:flex items-center justify-center w-11.5 h-11.5 absolute -top-[100px] right-[100px] z-50 cursor-pointer transition-all hover:bg-button2 hover:text-white"

    >
      <ArrowLeft />
    </div>
  );
}

function NextArrow(props:any) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="bg-secondary rounded-full hidden lg:flex items-center justify-center w-11.5 h-11.5 absolute -top-[100px] right-5 z-50 cursor-pointer transition-all hover:bg-button2 hover:text-white">
      <ArrowRight />
    </div>
  );
}