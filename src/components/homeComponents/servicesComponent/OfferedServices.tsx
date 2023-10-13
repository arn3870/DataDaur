import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});
export default function OfferedServices() {
  const services = [
    "Mobile Application Development",
    "Website Design Development",
    "SAAS Development",
    "UX/UI Design",
    "IT Consultant",
    "Search Engine Optimization",
    "Marketing",
  ];
  return (
    <div className={space_grotesk.className} style={{ background: "#0F0F13" }}>
      <div className="flex flex-col px-[20px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="text-center mb-[60px] text-[#E4E4E4]">
          <h1 className="text-[20px] md:text-[48px] lg:text-[48px]">
            Services We’re Offering
          </h1>
          <p className="text-[12px] md:text[16px] lg:text-[18px] lg:mx-[300px]">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac
            consectetur nulla volutpat libero tortor nam tristique.
          </p>
        </div>
        {services.map((service, index) => (
          <Link href={"/offers"}>
            <div className="text-[#CACACA]">
              <div className="flex flex-row justify-between">
                <div key={index}>{service}</div>
                <Image
                  src={"./Icons/services_nav_icon.svg"}
                  alt="link"
                  height={36}
                  width={36}
                ></Image>
              </div>
              <div className="flex justify-center">
                <div className="w-[100%] h-[1px] bg-[#9B9B9B] my-[14px]"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
