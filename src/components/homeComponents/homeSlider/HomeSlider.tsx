import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import mobileIcon from "../../../../public/Icons/mobile.svg";
import smsIcon from "../../../../public/Icons/sms.svg";
import phoneIcon from "../../../../public/Icons/phone_icon.svg";
import websiteIcon from "../../../../public/Icons/website.svg";
import MonitorIcon from "../../../../public/Icons/monitor.svg";
import designSystemsIcon from "../../../../public/Icons/design_systems.svg";
import saasIcon from "../../../../public/Icons/saas.svg";
const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});

export default function HomeSlider() {
  return (
    <div className="flex font-normal">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, transparent 50%, rgba(209,123,195,1) 100%, rgba(224, 78, 78, 1) 50%, rgba(100, 26, 135, 1) 100%)",
          filter: "blur(147px)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          zIndex: "-99",
        }}
      ></div>
      <div className={space_grotesk.className}>
        <div className="text-center mt-[60px] sm:text-[28px] sm:px-[20px] md:px-[20px] md:text[40px] lg:text-[90px]">
          Empower your business with Generative Artificial Intelligence
        </div>
        <div className="flex justify-center mt-[50px] sm:text-sm md:text-lg lg:text-xl">
          <button
            style={{
              border: "2px solid var(--Button-Stroke, #A265F0)",
              background:
                "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
              boxShadow: "0px 4px 25px 0px #2F1C64",
            }}
            className="sm:px-[10px] md:px-[10px] lg:px-[40px] sm:py-[10px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white"
          >
            Get Started
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center lg:mt-[50px] md:mt-[40px] sm:mt-[30px]">
          <div className="flex items-center sm:mr-[15px] lg:mr-[50px]">
            <Image src={smsIcon} alt="sms" width={24} height={24}></Image>
            <span className="ml-[5px] sm:ml-[10px] lg:ml-[20px]">
              Business@datadaur.com
            </span>
          </div>
          <div className="flex items-center mt-[15px] sm:mt-0 sm:ml-[15px] lg:ml-[50px]">
            <Image src={phoneIcon} alt="sms" width={24} height={24}></Image>
            <span className="ml-[5px] sm:ml-[10px] lg:ml-[20px]">
              +92 3213241221
            </span>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-wrap justify-between lg:px-[50px] mt-[50px] sm:mt-[30px] lg:mt-[100px] lg:mb-[161px]">
          <div className="flex flex-col items-center justify-center">
            <Image src={mobileIcon} alt="sms" width={60} height={60}></Image>
            <span className="mt-[30px]">Mobile Apps</span>
          </div>
          <div className="w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image src={websiteIcon} alt="sms" width={60} height={60}></Image>
            <span className="mt-[30px]">Websites</span>
          </div>
          <div className="w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image src={MonitorIcon} alt="sms" width={60} height={60}></Image>
            <span className="mt-[30px]">Web Apps</span>
          </div>
          <div className="w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={designSystemsIcon}
              alt="sms"
              width={60}
              height={60}
            ></Image>
            <span className="mt-[30px]">Design Systems</span>
          </div>
          <div className="w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image src={saasIcon} alt="sms" width={60} height={60}></Image>
            <span className="mt-[30px]">SAAS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
