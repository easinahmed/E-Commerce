
import { useGetProductsQuery } from '../../../api/productApi';
import bg_countedown from '../../../assets/bg-home-counter.jpg'
import Button2 from '../../Button2';
import Countdown from '../../CountDown';


const BgCount: React.FC = () => {
  const { data } = useGetProductsQuery()
  const bgStyle = {
    backgroundImage: `url(${bg_countedown})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100%",
  };

  return (
    <section className='mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-[70px]'>
      <div className="container px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-[70px] px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 overflow-hidden rounded-lg" style={bgStyle}>
          {/* Optional overlay or text */}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-13 overflow-hidden items-center">
            {/* Left Side */}
            <div className='space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8'>
              <h3 className='text-[#00FF66] font-poppins font-semibold text-xs xs:text-sm sm:text-base'>Categories</h3>
              <h2 className='font-inter font-semibold text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-8 xs:leading-10 sm:leading-12 md:leading-14 lg:leading-15 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[443px] text-white tracking-wide'>{data?.products[9]?.title}</h2>
              <Countdown targetDate="2025-12-31T23:59:59" />
              <Button2 to={`/product/details/${data?.products[9]?.id}`} className='bg-[#00FF66]! text-slate-300'>Buy Now</Button2>
            </div>

            {/* Right side */}
            <div className='flex items-center justify-center overflow-hidden'>

              <div className='w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] overflow-hidden rounded-lg'>
                <img className='w-full h-full object-cover' src={data?.products[9]?.thumbnail} alt="image" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BgCount;
