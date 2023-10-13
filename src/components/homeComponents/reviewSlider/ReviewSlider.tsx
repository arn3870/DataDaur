"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "./CustomerReviewCarousel.module.css";
import qouteLeft from "../../../../public/Icons/bxs_quote-left.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// const paginationStyles = {
//   padding: "60px", // Add padding to the pagination
//   "--swiper-pagination-color": "#FFBA08",
//   "--swiper-pagination-bullet-inactive-color": "#999999",
//   "--swiper-pagination-bullet-inactive-opacity": "1",
//   "--swiper-pagination-bullet-size": "16px",
//   "--swiper-pagination-bullet-horizontal-gap": "6px",
//   "--swiper-pagination-bullet-active-width": "40px",
// };
export default () => {
  const slides = [
    {
      content:
        "I can't express how satisfied I am with the services I received from Wodatoki Services. From the initial consultation to the final implementation, their team displayed unparalleled professionalism and expertise. They truly understood my business needs and tailored their solutions accordingly. The seamless integration of their services has not only streamlined our operations but also enhanced our overall efficiency. I'm grateful to Wodatoki for their exceptional support and top-notch solutions.",
      image: "/customer.jpeg",
      name: "Asim Qamar",
      designation: "CEO, Trimster",
    },
    {
      content:
        "I can't express how satisfied I am with the services I received from Wodatoki Services. From the initial consultation to the final implementation, their team displayed unparalleled professionalism and expertise. They truly understood my business needs and tailored their solutions accordingly. The seamless integration of their services has not only streamlined our operations but also enhanced our overall efficiency. I'm grateful to Wodatoki for their exceptional support and top-notch solutions.",
      image: "/customer.jpeg",
      name: "Asim Qamar",
      designation: "CEO, Trimster",
    },
    {
      content:
        "I can't express how satisfied I am with the services I received from Wodatoki Services. From the initial consultation to the final implementation, their team displayed unparalleled professionalism and expertise. They truly understood my business needs and tailored their solutions accordingly. The seamless integration of their services has not only streamlined our operations but also enhanced our overall efficiency. I'm grateful to Wodatoki for their exceptional support and top-notch solutions.",
      image: "/customer.jpeg",
      name: "Asim Qamar",
      designation: "CEO, Trimster",
    },
    {
      content:
        "I can't express how satisfied I am with the services I received from Wodatoki Services. From the initial consultation to the final implementation, their team displayed unparalleled professionalism and expertise. They truly understood my business needs and tailored their solutions accordingly. The seamless integration of their services has not only streamlined our operations but also enhanced our overall efficiency. I'm grateful to Wodatoki for their exceptional support and top-notch solutions.",
      image: "/customer.jpeg",
      name: "Asim Qamar",
      designation: "CEO, Trimster",
    },
  ];
  return (
    <div className="py-[75px]">
      <div className="flex justify-center">
        <div className="text-center text-[#E4E4E4] text-[20px] md:text-[48px] lg:text-[48px] lg:w-[50%]">
          Our Clients' Experiences with Exceptional IT Services
        </div>
      </div>
      <div className="text-[#CACACA]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          centeredSlides={true} // Centered slides
          loop={true} // Infinite loop
          onSwiper={(swiper) => console.log(swiper.slides)}
          onSlideChange={() => console.log("slide change")}
          // style={paginationStyles}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={` ${
                    isActive
                      ? `${styles.activeSlide}`
                      : `${styles.nonActiveSlide}`
                  } h-fit w-[190px] md:w-full lg:w-full rounded-[20px] my-[60px] py-[15px] md:py-[40px] lg:py-[80px] px-[10px] md:px-[20px] lg:px-[40px]`}
                >
                  {/* <Image
                  src={"./bxs_qoute_left.svg"}
                  alt="inverted_comma"
                  width={80}
                  height={80}
                ></Image> */}
                  <p className="text-[8px] md:text-[12px] lg:text-[16px] bg-transparent">
                    {slide.content}
                  </p>
                  <div className="flex justify-center mt-[30px]">
                    <div className="flex flex-col md:flex-row lg:flex-row">
                      <div className="flex justify-center">
                        <Image
                          src={slide.image}
                          alt="customer"
                          className="rounded-[50%] h-[50px] bg-cover"
                          width={50}
                          height={80}
                        />
                      </div>
                      <div className="flex flex-col sm:ml-[5px] md:ml-[15px] lg:ml-[15px] justify-center items-center">
                        <div className="text-[14px] md:text-[18px] lg:text-[28px]">
                          {slide.name}
                        </div>
                        <div className="text-[10px] md:text-[16px] lg:text-[16px]">
                          {slide.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Top-left quote */}
                  <div className="absolute top-0 left-0 mt-[30px] ml-[30px] w-[20px] md:w-[40px] lg:w-[50px] h-[20px] md:h-[40px] lg:h-[50px]">
                    <Image
                      src={qouteLeft} // Make sure to provide the correct path to your image
                      alt="quote"
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* Bottom-right quote */}
                  <div className="absolute bottom-0 right-0 mb-[30px] mr-[30px] w-[20px] md:w-[40px] lg:w-[50px] h-[20px] md:h-[40px] lg:h-[50px] rotate-180">
                    <Image
                      src={qouteLeft} // Make sure to provide the correct path to your image
                      alt="quote"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
