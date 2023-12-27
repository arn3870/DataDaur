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

const CurrentServicePage = () => {
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
          <h1 className="lg:text-[60px] font-bold">Current Service Page</h1>
        </div>
        <div>
          <div>
            <h3 className="text-[36px] font-medium leading-normal">
              Milestone_01
            </h3>
            <p className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac
              consectetur nulla volutpat libero tortor nam tristique.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 my-12">
              <div className="lg:col-span-2">
                <img
                  src="/buyer-home/csp.png"
                  style={{ width: "-webkit-fill-available" }}
                  className="lg:h-[780px] md:h-[500px] h-[400px]"
                  alt="csp"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-0">
                <div className="bg-[#1C1928] h-[242px]"></div>
                <div className="bg-[#1C1928] h-[242px]"></div>
                <div className="bg-[#1C1928] h-[242px]"></div>
                <div className="bg-[#1C1928] h-[242px]"></div>
                <div className="bg-[#1C1928] h-[242px]"></div>
                <div className="bg-[#1C1928] h-[242px]"></div>
              </div>
            </div>
            <h3 className="text-[36px] font-medium leading-normal">
              Service Description
            </h3>
            <p className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
              Lorem ipsum dolor sit amet consectetur. Tempus nibh egestas at ut
              nec condimentum vulputate id sed. Ut ullamcorper aenean tincidunt
              lacinia. Mauris tincidunt libero blandit et eleifend. In nec vitae
              feugiat gravida lectus elementum. Pellentesque sed faucibus
              facilisis nisl ac phasellus viverra id nulla. Interdum consectetur
              non eu posuere pulvinar.
            </p>
            <ul className="list-disc ms-10 my-6">
              <li className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
                Bullet Point 1
              </li>
              <li className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
                Bullet Point 2
              </li>
              <li className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
                Bullet Point 3
              </li>
            </ul>
            <p className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
              Sit odio facilisi adipiscing dui tincidunt egestas sed neque.
              Vitae suscipit rhoncus tincidunt dolor velit proin augue sem.
              Porta iaculis vitae mus a id a morbi at. Lectus viverra non amet
              mauris viverra rhoncus velit lectus nibh. Suscipit lacus pretium
              quis eros mi tempor.
            </p>
          </div>
          <div className="mt-14">
            <h3 className="text-[36px] font-medium leading-normal">
              Milestone_02
            </h3>
            <p className="text-[20px] font-normal leading-[30px] text-[#CACACA] mb-8">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac
              consectetur nulla volutpat libero tortor nam tristique.
            </p>
            <p className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
              Lorem ipsum dolor sit amet consectetur. Tempus nibh egestas at ut
              nec condimentum vulputate id sed. Ut ullamcorper aenean tincidunt
              lacinia. Mauris tincidunt libero blandit et eleifend. In nec vitae
              feugiat gravida lectus elementum. Pellentesque sed faucibus
              facilisis nisl ac phasellus viverra id nulla. Interdum consectetur
              non eu posuere pulvinar.
            </p>
            <ul className="list-disc ms-10 my-6">
              <li className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
                Bullet Point 1
              </li>
              <li className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
                Bullet Point 2
              </li>
              <li className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
                Bullet Point 3
              </li>
            </ul>
            <p className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
              Sit odio facilisi adipiscing dui tincidunt egestas sed neque.
              Vitae suscipit rhoncus tincidunt dolor velit proin augue sem.
              Porta iaculis vitae mus a id a morbi at. Lectus viverra non amet
              mauris viverra rhoncus velit lectus nibh. Suscipit lacus pretium
              quis eros mi tempor.
            </p>
          </div>
          <div className="mt-14">
            <h3 className="text-[36px] font-medium leading-normal">
              Milestone_03
            </h3>
            <p className="text-[20px] font-normal leading-[30px] text-[#CACACA] mb-8">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac
              consectetur nulla volutpat libero tortor nam tristique.
            </p>
            <p className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
              Lorem ipsum dolor sit amet consectetur. Tempus nibh egestas at ut
              nec condimentum vulputate id sed. Ut ullamcorper aenean tincidunt
              lacinia. Mauris tincidunt libero blandit et eleifend. In nec vitae
              feugiat gravida lectus elementum. Pellentesque sed faucibus
              facilisis nisl ac phasellus viverra id nulla. Interdum consectetur
              non eu posuere pulvinar.
            </p>
            <ul className="list-disc ms-10 my-6">
              <li className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
                Bullet Point 1
              </li>
              <li className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
                Bullet Point 2
              </li>
              <li className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
                Bullet Point 3
              </li>
            </ul>
            <p className="text-[20px] font-normal leading-[30px] text-[#CACACA]">
              Sit odio facilisi adipiscing dui tincidunt egestas sed neque.
              Vitae suscipit rhoncus tincidunt dolor velit proin augue sem.
              Porta iaculis vitae mus a id a morbi at. Lectus viverra non amet
              mauris viverra rhoncus velit lectus nibh. Suscipit lacus pretium
              quis eros mi tempor.
            </p>
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
            className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white mt-8 font-medium"
          >
            Generate Invoice
          </button>
        </div>
      </div>
      <ElevateBusiness />
    </div>
  );
};
export default CurrentServicePage;
