import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Person1 from "../assets/images/person-1.jpg";
import Person2 from "../assets/images/founder-img.jpeg";
import Person3 from "../assets/images/person-3.jpg";

export default function Testimonial() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const updateSlideHeights = () => {
      if (!swiperRef.current) return;

      const swiperInstance = swiperRef.current.swiper;
      const slideElements = swiperInstance.slides;

      let maxHeight = 0;
      slideElements.forEach((slide) => {
        slide.style.height = "auto"; // Reset to auto to get the actual height
        const slideHeight = slide.offsetHeight;
        if (slideHeight > maxHeight) {
          maxHeight = slideHeight;
        }
      });

      slideElements.forEach((slide) => {
        slide.style.height = `${maxHeight}px`;
      });
    };

    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.on("slideChange", updateSlideHeights);
    updateSlideHeights();

    window.addEventListener("resize", updateSlideHeights);

    return () => {
      window.removeEventListener("resize", updateSlideHeights);
    };
  }, []);

  return (
    <>
      <section className="bg-white px-96">
        <div className="container mx-auto px-5 py-20">
          <div className="flex flex-col">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[#101110] md:text-[2rem] leading-[30px] text-center uppercase">
                LEARN FROM OUR FOUNDER
              </h2>
            </div>
            {/* testimonials */}
            <div className="flex justify-center">
              <div className="pt-20 ">
                <Swiper
                  ref={swiperRef}
                  spaceBetween={0}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="h-full bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col">
                      <div className="flex-grow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-primary mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                        </svg>
                        <p className="leading-relaxed mb-6 text-lg">
                          Although I take the necessary steps to minimise my
                          environmental impact, like many, I struggled to offset
                          the impact of my lifestyle on the environment. Why not
                          create a simple tool to help folks like me calculate
                          and offset their carbon footprint hassle-free? And
                          just like that, Carbon Shredder was born. With my
                          passion and a sprinkle of tech magic, it became the
                          go-to platform for everyone looking to take a step for
                          the environment.
                        </p>
                      </div>
                      <a className="inline-flex items-center mt-6">
                        <img
                          alt="testimonial"
                          src={Person2}
                          className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-black text-xl">
                            Thijn Felix
                          </span>
                          <span className="text-gray-500 ">Founder</span>
                        </span>
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
