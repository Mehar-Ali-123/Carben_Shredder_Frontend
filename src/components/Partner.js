// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay  } from 'swiper/modules';

import Logo1 from "../assets/images/logo-1.png"
import Logo2 from "../assets/images/logo-2.png"
import Logo3 from "../assets/images/logo-3.png"
import Logo4 from "../assets/images/logo-4.png"

export default function Partner() {
  return (
    <>
      <section>
        <div className="container mx-auto py-20">
          <div className="flex">
            <div className="basis-full md:basis-6/12">
              <h1 className='text-3xl'>
                CO2 is a gas that exists naturally in the atmosphere, earth and
                our bodies of water.
              </h1>
            </div>
          
            <div className="basis-full md:basis-6/12 overflow-hidden flex justify-center relative border-l-4 h-24 border-primary">
              <Swiper
          
              className='my-auto mySwiper'
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className='my-auto'> <img src={Logo1}  alt="" /></SwiperSlide>
                <SwiperSlide className='my-auto'><img src={Logo2} alt="" /></SwiperSlide>
                <SwiperSlide className='my-auto'><img src={Logo3} alt="" /></SwiperSlide>
                <SwiperSlide className='my-auto'><img src={Logo4} alt="" /></SwiperSlide>
                
              
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
