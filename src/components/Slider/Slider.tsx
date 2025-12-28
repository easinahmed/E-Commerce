
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// @ts-expect-error: Swiper css types are missing
import 'swiper/css';
// @ts-expect-error: Swiper pagination css types are missing
import 'swiper/css/pagination';
import styles from './slider.module.css';
import { banner } from '../../constant/constant';
import { nanoid } from 'nanoid';

interface SliderProps {
  autoplayDelay?: number;
  spaceBetween?: number;
}

interface SlideItem {
  id: string;
  image: string;
  title: string;
}

const slides: SlideItem[] = [
  { id: nanoid(), image: banner, title: "Special Offer Banner" },
  { id: nanoid(), image: banner, title: "Featured Products Banner" },
  { id: nanoid(), image: banner, title: "New Arrivals Banner" },
  { id: nanoid(), image: banner, title: "Seasonal Collection Banner" }
];

const Slider: React.FC<SliderProps> = ({
  autoplayDelay = 2500,
  spaceBetween = 30
}) => {
  return (
    <div className="w-full px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-0">
      <Swiper
        spaceBetween={spaceBetween}
        centeredSlides={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className={styles.mySwiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.swiperSlide}>
            <img
              src={slide.image}
              className="w-full h-full aspect-square sm:aspect-4/3 md:aspect-[1.5/1] lg:aspect-2/1 xl:aspect-[2.59/1] object-fit rounded-sm"
              alt={slide.title}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;