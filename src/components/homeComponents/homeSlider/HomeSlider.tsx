import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import mobileIcon from "../../../../public/Icons/mobile.svg";
import smsIcon from "../../../../public/Icons/sms.svg";
import phoneIcon from "../../../../public/Icons/phone_icon.svg";
import websiteIcon from "../../../../public/Icons/website.svg";
import MonitorIcon from "../../../../public/Icons/monitor.svg";
import designSystemsIcon from "../../../../public/Icons/design_systems.svg";
import saasIcon from "../../../../public/Icons/saas.svg";
import styles from "../../styles/gradients.module.css";
import Link from "next/link";
const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});

export default function HomeSlider() {
  return (
    <div className="flex font-normal">
      <div
        className={` ${styles.home_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[822px] h-[300px] md:h-[450px] lg:h-[613px]`}
      ></div>
      <div className={space_grotesk.className}>
        <div className="text-center mt-[60px] sm:text-[28px] px-[20px] md:px-[20px] lg:px-[100px] md:text[40px] lg:text-[90px]">
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
            className="px-[10px] md:px-[10px] lg:px-[40px] py-[4px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white"
          >
            Get Started
          </button>
        </div>
        <div className="flex flex-col justify-center text-[#F2F2F2] items-center mt-[20px] md:mt-[40px] lg:mt-[50px] md:mt-[40px] sm:mt-[30px]">
          <div className="flex flex-row">
            <Link href={"mailto:${business@datadaur.com}"}>
              <div className="flex items-center sm:mr-[15px] lg:mr-[50px]">
                <Image
                  src={smsIcon}
                  alt="sms"
                  width={24}
                  height={24}
                  className="w-[14px] h-[14px] md:w-[24px] lg:w-[24px] md:h-[24px] lg:h-[24px]"
                ></Image>
                <span className="text-[10px] md:text-[18px] lg:text-[18px] ml-[5px] md:ml-[20px] lg:ml-[20px]">
                  Business@datadaur.com
                </span>
              </div>
            </Link>
            <Link
              href={
                "//api.whatsapp.com/send?phone=971552025311&text=Hi DataDaur"
              }
            >
              <div className="flex items-center ml-[0px] md:ml-[50px] lg:ml-[50px]">
                <Image
                  src={phoneIcon}
                  alt="sms"
                  width={24}
                  height={24}
                  className="w-[14px] h-[14px] md:w-[24px] lg:w-[24px] md:h-[24px] lg:h-[24px]"
                ></Image>
                <span className="text-[10px] md:text-[18px] lg:text-[18px] ml-[5px] md:ml-[20px] lg:ml-[20px]">
                  +97 (155) 202-5311
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-wrap justify-between px-[20px] md:px-[50px] lg:px-[50px] mt-[30px] md:mt-[80px] lg:mt-[100px] lg:mb-[161px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={mobileIcon}
              alt="sms"
              width={60}
              height={60}
              className="w-[30px] h-[30px] md:w-[60px] lg:w-[60px] md:h-[60px] lg:h-[60px]"
            ></Image>
            <span className="mt-[8px] lg:mt-[30px] md:mt-[30px] text-[8px] md:text-[18px] lg:text-[24px]">
              Mobile Apps
            </span>
          </div>
          <div className="w-[0px] md:w-[1px] lg:w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={websiteIcon}
              alt="sms"
              width={60}
              height={60}
              className="w-[30px] h-[30px] md:w-[60px] lg:w-[60px] md:h-[60px] lg:h-[60px]"
            ></Image>
            <span className="mt-[8px] lg:mt-[30px] md:mt-[30px] text-[8px] md:text-[18px] lg:text-[24px]">
              Websites
            </span>
          </div>
          <div className="w-[0px] md:w-[1px] lg:w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={MonitorIcon}
              alt="sms"
              width={60}
              height={60}
              className="w-[30px] h-[30px] md:w-[60px] lg:w-[60px] md:h-[60px] lg:h-[60px]"
            ></Image>
            <span className="mt-[8px] lg:mt-[30px] md:mt-[30px] text-[8px] md:text-[18px] lg:text-[24px]">
              Web Apps
            </span>
          </div>
          <div className="w-[0px] md:w-[1px] lg:w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={designSystemsIcon}
              alt="sms"
              width={60}
              height={60}
              className="w-[30px] h-[30px] md:w-[60px] lg:w-[60px] md:h-[60px] lg:h-[60px]"
            ></Image>
            <span className="mt-[8px] lg:mt-[30px] md:mt-[30px] text-[8px] md:text-[18px] lg:text-[24px]">
              Design Systems
            </span>
          </div>
          <div className="w-[0px] md:w-[1px] lg:w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={saasIcon}
              alt="sms"
              width={60}
              height={60}
              className="w-[30px] h-[30px] md:w-[60px] lg:w-[60px] md:h-[60px] lg:h-[60px]"
            ></Image>
            <span className="mt-[8px] lg:mt-[30px] md:mt-[30px] text-[8px] md:text-[18px] lg:text-[24px]">
              SAAS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
