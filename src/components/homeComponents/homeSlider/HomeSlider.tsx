import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});

export default function HomeSlider() {
  return (
    <div className="flex font-normal">
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
            <Image
              src={"./icons/sms.svg"}
              alt="sms"
              width={24}
              height={24}
            ></Image>
            <span className="ml-[5px] sm:ml-[10px] lg:ml-[20px]">
              Business@datadaur.com
            </span>
          </div>
          <div className="flex items-center mt-[15px] sm:mt-0 sm:ml-[15px] lg:ml-[50px]">
            <Image
              src={"./icons/phone_icon.svg"}
              alt="sms"
              width={24}
              height={24}
            ></Image>
            <span className="ml-[5px] sm:ml-[10px] lg:ml-[20px]">
              +92 3213241221
            </span>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-wrap justify-between lg:px-[50px] mt-[50px] sm:mt-[30px] lg:mt-[100px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"./icons/mobile.svg"}
              alt="sms"
              width={60}
              height={60}
            ></Image>
            <span className="mt-[30px]">Mobile Apps</span>
          </div>
          <div className="w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"./icons/website.svg"}
              alt="sms"
              width={60}
              height={60}
            ></Image>
            <span className="mt-[30px]">Websites</span>
          </div>
          <div className="w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"./icons/monitor.svg"}
              alt="sms"
              width={60}
              height={60}
            ></Image>
            <span className="mt-[30px]">Web Apps</span>
          </div>
          <div className="w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"./icons/design_systems.svg"}
              alt="sms"
              width={60}
              height={60}
            ></Image>
            <span className="mt-[30px]">Design Systems</span>
          </div>
          <div className="w-[1px] h-[138px] bg-[#2E2E2E]"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"./icons/saas.svg"}
              alt="sms"
              width={60}
              height={60}
            ></Image>
            <span className="mt-[30px]">SAAS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
