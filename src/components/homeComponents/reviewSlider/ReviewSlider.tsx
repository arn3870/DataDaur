"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const paginationStyles = {
  padding: "60px", // Add padding to the pagination
};
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
        <div className="text-center text-[#E4E4E4] text-[48px] lg:w-[50%]">
          Our Clients' Experiences with Exceptional IT Services
        </div>
      </div>
      <div className="py-[60px] text-[#CACACA]">
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
          style={paginationStyles}
          onInit={(swiper) => {
            const slides = swiper.slides;
            slides.forEach((slide) => {
              if (slide.classList.contains("swiper-slide-active")) {
                // Active slide
                slide.classList.add("scale-110");
              } else if (
                slide.classList.contains("swiper-slide-prev") ||
                slide.classList.contains("swiper-slide-next")
              ) {
                // Previous and Next slides
                slide.classList.add("border", "text-gray-400", "opacity-50");
              }
            });
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[300px] w-[600px] rounded-[20px] py-[80px] px-[40px]"
                style={{
                  border: "2px solid var(--Button-Stroke, #A265F0)",
                }}
              >
                {/* <Image
                  src={"./bxs_qoute_left.svg"}
                  alt="inverted_comma"
                  width={80}
                  height={80}
                ></Image> */}
                <p className="text-[12px]">{slide.content}</p>
                <div className="flex justify-center mt-[30px]">
                  <div className="flex flex-row items-center">
                    <div className="flex justify-center">
                      <Image
                        src={slide.image}
                        alt="customer"
                        className="rounded-[50%] h-[50px] bg-cover"
                        width={50}
                        height={80}
                      />
                    </div>
                    <div className="flex flex-col ml-[15px]">
                      <div className="font-[28px]">{slide.name}</div>
                      <div className="font-[16px]">{slide.designation}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
