"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/components/styles/gradients.module.css";
import ElevateBusiness from "@/components/homeComponents/elevateBusiness/ElevateBusiness";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const paginationStyles: { [key: string]: string } = {
  // padding: "60px", // Add padding to the pagination
  "--swiper-pagination-bullet-active": "#FFFFFF",
  // "--swiper-pagination-bullet-inactive-opacity": "1",
  // "--swiper-pagination-bullet-size": "16px",
  "--swiper-pagination-bullet-horizontal-gap": "10px",
  "--swiper-pagination-bullet-horizontal-margin": "10px",
  // "--swiper-pagination-bullet-active-width": "80px",
  "--swiper-pagination-bullet-width": "10px",
  "--swiper-pagination-bullet-height": "10px",
};

const BuyerHome = () => {
  const slides = [
    {
      id: 1,
      image: "/buyer-home/slider1.jpeg",
    },
    {
      id: 2,
      image: "/buyer-home/slider1.jpeg",
    },
    {
      id: 3,
      image: "/buyer-home/slider1.jpeg",
    },
  ];
  return (
    <div className="text-white">
      <div
        className={` ${styles.portfolio_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[450px] lg:h-[450px]`}
      ></div>
      <div className="px-[20px] md:px-[30px] lg:px-[52px] mb-14">
        <div className="text-center py-[20px] md:py-[50px] lg:py-[80px]">
          <h1 className="lg:text-[60px] font-bold">Buyer Home Page</h1>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 items-center gap-10">
          <div className="xl:col-span-2">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              centeredSlides={true} // Centered slides
              loop={true} // Infinite loop
              onSwiper={(swiper) => console.log(swiper.slides)}
              onSlideChange={() => console.log("slide change")}
              style={paginationStyles}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div className={`my-[60px]`}>
                      <img
                        src={slide.image}
                        style={{
                          width: "-webkit-fill-available",
                          height: "450px",
                          objectFit: "cover",
                          boxShadow:
                            "-120px 0px 74px 0px rgba(0, 0, 0, 0.22) inset",
                          borderRadius: "20px",
                        }}
                        alt="slider"
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            className="px-[20px] md:px-[50px] lg:px-[90px] py-[20px] md:py-[50px] lg:py-[90px] text-center"
            style={{
              border: "1px solid var(--Button-Stroke, #a265f0)",
              borderRadius: "10px",
            }}
          >
            <img
              src="/buyer-home/user1.jpeg"
              className="w-[90px] h-[90px] object-cover rounded-full mx-auto"
              alt="user"
            />
            <h5 className="mt-4 text-[18px] font-bold leading-[25px]">
              Mariy Riggs
            </h5>
            <h6 className="text-[15px] leading-[150%] font-medium">
              Senior Rails Developer
            </h6>
            <p className="text-[14px] leading-[22px] font-normal text-[#CACACA] mt-4">
              Having over 10 years of hands-on experience in web application
              development. Skilled in full stack of technologies, including Ruby
              and JavaScript frameworks, HTML, CSS, and relational databases.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 items-center gap-10 mt-10">
          <div className="xl:col-span-2 bg-[#1C1928] grid grid-cols-2 gap-8 py-[20px] md:py-[40px] lg:py-[60px]">
            <div className="flex">
              <div className="ms-auto text-center">
                <img src="/buyer-home/iphone1.png" alt="iphone" />
                <button
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background: "#1E2023",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white mt-8"
                >
                  Meet
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="text-center">
                <img src="/buyer-home/iphone2.png" alt="iphone" />
                <button
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background:
                      "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white mt-8"
                >
                  Buy it
                </button>
              </div>
            </div>
          </div>
          <div
            className="px-[10px] md:px-[20px] lg:px-[30px] py-[20px] md:py-[50px] lg:py-[30px]"
            style={{
              border: "1px solid var(--Button-Stroke, #a265f0)",
              borderRadius: "10px",
              background:
                "var(--Cards-Gradient, linear-gradient(143deg, rgba(255, 255, 255, 0.06) 0.03%, rgba(255, 255, 255, 0.00) 100%))",
            }}
          >
            <h3 className="text-[32px] font-bold leading-[40px]">
              Services_01
            </h3>
            <p className="text-[16px] font-normal leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Tempus nibh egestas at ut
              nec condimentum vulputate id sed. Ut ullamcorper aenean tincidunt
              lacinia. Mauris libero blandit et eleifend. In nec vitae.
            </p>
            <hr className="border-[#3E2567] my-8" />
            <h3 className="text-[32px] font-bold leading-[40px]">
              Services_02
            </h3>
            <p className="text-[16px] font-normal leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Tempus nibh egestas at ut
              nec condimentum vulputate id sed. Ut ullamcorper aenean tincidunt
              lacinia. Mauris libero blandit et eleifend. In nec vitae feugiat
              gravida lectus elementum.
            </p>
            <hr className="border-[#3E2567] my-8" />
            <h3 className="text-[32px] font-bold leading-[40px]">
              Services_03
            </h3>
            <p className="text-[16px] font-normal leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Tempus nibh egestas at ut
              nec condimentum vulputate id sed. Ut ullamcorper aenean tincidunt
              lacinia. Mauris libero blandit et eleifend. In nec vitae feugiat
              gravida lectus elementum.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 items-center gap-10 mt-10">
          <div className="xl:col-span-2 bg-[#1C1928] grid grid-cols-2 gap-8 py-[20px] md:py-[40px] lg:py-[60px]">
            <div className="flex">
              <div className="ms-auto text-center">
                <img src="/buyer-home/iphone1.png" alt="iphone" />
                <button
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background: "#1E2023",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white mt-8"
                >
                  Meet
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="text-center">
                <img src="/buyer-home/iphone2.png" alt="iphone" />
                <button
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background:
                      "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white mt-8"
                >
                  Buy it
                </button>
              </div>
            </div>
          </div>
          <div
            className="px-[10px] md:px-[20px] lg:px-[30px] py-[20px] md:py-[50px] lg:py-[30px]"
            style={{
              border: "1px solid var(--Button-Stroke, #a265f0)",
              borderRadius: "10px",
              background:
                "var(--Cards-Gradient, linear-gradient(143deg, rgba(255, 255, 255, 0.06) 0.03%, rgba(255, 255, 255, 0.00) 100%))",
            }}
          >
            <h3 className="text-[32px] font-bold leading-[40px]">
              Your Manager
            </h3>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="/buyer-home/user1.jpeg"
                className="w-[50px] h-[50px] object-cover rounded-full"
                alt="user"
              />
              <div>
                <h5 className="text-[18px] font-normal leading-[28px]">
                  Manager Name - Designation
                </h5>
                <p className="text-[18px] font-normal leading-[28px] text-[#CACACA]">
                  Responsibilities{" "}
                </p>
              </div>
            </div>
            <hr className="border-[#3E2567] my-6" />
            <div className="flex items-center gap-4">
              <img
                src="/buyer-home/user1.jpeg"
                className="w-[50px] h-[50px] object-cover rounded-full"
                alt="user"
              />
              <div>
                <h5 className="text-[18px] font-normal leading-[28px]">
                  Manager Name - Designation
                </h5>
                <p className="text-[18px] font-normal leading-[28px] text-[#CACACA]">
                  Responsibilities{" "}
                </p>
              </div>
            </div>
            <hr className="border-[#3E2567] my-6" />
            <div className="mt-8 flex items-center gap-4">
              <img
                src="/buyer-home/user1.jpeg"
                className="w-[50px] h-[50px] object-cover rounded-full"
                alt="user"
              />
              <div>
                <h5 className="text-[18px] font-normal leading-[28px]">
                  Manager Name - Designation
                </h5>
                <p className="text-[18px] font-normal leading-[28px] text-[#CACACA]">
                  Responsibilities{" "}
                </p>
              </div>
            </div>
            <hr className="border-[#3E2567] my-6" />
            <div className="mt-8 flex items-center gap-4">
              <img
                src="/buyer-home/user1.jpeg"
                className="w-[50px] h-[50px] object-cover rounded-full"
                alt="user"
              />
              <div>
                <h5 className="text-[18px] font-normal leading-[28px]">
                  Manager Name - Designation
                </h5>
                <p className="text-[18px] font-normal leading-[28px] text-[#CACACA]">
                  Responsibilities{" "}
                </p>
              </div>
            </div>
            <hr className="border-[#3E2567] my-6" />
            <div className="mt-8 flex items-center gap-4">
              <img
                src="/buyer-home/user1.jpeg"
                className="w-[50px] h-[50px] object-cover rounded-full"
                alt="user"
              />
              <div>
                <h5 className="text-[18px] font-normal leading-[28px]">
                  Manager Name - Designation
                </h5>
                <p className="text-[18px] font-normal leading-[28px] text-[#CACACA]">
                  Responsibilities{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            style={{
              border: "2px solid var(--Button-Stroke, #A265F0)",
              background:
                "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
              boxShadow: "0px 4px 25px 0px #2F1C64",
            }}
            className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white mt-8"
          >
            Load More
          </button>
        </div>
      </div>
      <ElevateBusiness />
    </div>
  );
};
export default BuyerHome;
