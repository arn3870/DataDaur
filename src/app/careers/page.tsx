import React from "react";
import styles from "@/components/styles/gradients.module.css";
import { Space_Grotesk } from "next/font/google";
import ElevateBusiness from "@/components/homeComponents/elevateBusiness/ElevateBusiness";
import ContactForm from "@/components/contactForm/ContactForm";
const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});

const careers = [
  {
    id: 1,
    title: "Senior Software Engineer",
    salary: "60k - 100k /month",
    field: "Engineering",
    jobType: "Full Time",
    location: "Isalamabad",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    salary: "60k - 100k /month",
    field: "Engineering",
    jobType: "Full Time",
    location: "Isalamabad",
  },
  {
    id: 3,
    title: "Senior Software Engineer",
    salary: "60k - 100k /month",
    field: "Engineering",
    jobType: "Full Time",
    location: "Isalamabad",
  },
  {
    id: 4,
    title: "Senior Software Engineer",
    salary: "60k - 100k /month",
    field: "Engineering",
    jobType: "Full Time",
    location: "Isalamabad",
  },
];

const Careers = () => {
  return (
    <div className="text-white">
      <div
        className={` ${styles.home_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[822px] h-[300px] md:h-[450px] lg:h-[613px]`}
      ></div>
      <div
        className={`${space_grotesk.className} px-[20px] md:px-[30px] lg:px-[52px] py-[20px] md:py-[50px] lg:py-[80px] text-center`}
      >
        <h2 className="px-[20px] md:px-[20px] lg:px-[100px] text-[28px] md:text[40px] lg:text-[52px] xl:text-[90px] xl:w-[80%] mx-auto">
          Empower your business with Generative Artificial Intelligence
        </h2>
      </div>
      <div
        className={`${space_grotesk.className} px-[20px] md:px-[30px] lg:px-[52px] py-[20px] md:py-[50px] lg:py-[80px]`}
      >
        {careers.map((item) => (
          <div
            className="bg-[#1C1928] py-[20px] md:py-[30px] lg:py-[40px] px-[20px] md:px-[30px] lg:px-[52px] mt-8 first:mt-0"
            key={item.id}
          >
            <div className="sm:flex items-center justify-between">
              <h4 className="text-[#F2F2F2] text-[28px] font-bold leading-normal">
                {item.title}
              </h4>
              <p className="text-[#CACACA] text-[18px] font-normal leading-[34px]">
                {item.salary}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background: "#1E2023",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[8px] lg:py-[10px] rounded-[20px] color-white text-center"
                >
                  {item.field}
                </div>
                <div
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background: "#1E2023",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[8px] lg:py-[10px] rounded-[20px] color-white text-center"
                >
                  {item.jobType}
                </div>
                <div
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background: "#1E2023",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[8px] lg:py-[10px] rounded-[20px] color-white text-center"
                >
                  {item.location}
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-center sm:text-end">
                <button
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background:
                      "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContactForm title="Ready to do Join us?" />
      <ElevateBusiness />
    </div>
  );
};
export default Careers;
