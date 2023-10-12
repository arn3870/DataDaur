import styles from "../../styles/gradients.module.css";

export default function ElevateBusiness() {
  return (
    <div className="relative bg-[#0F0F13] py-[40px] md:py-[80px] lg:py-[100px] overflow-hidden">
      {/* Gradient background */}
      <div
        className={` ${styles.elevate_business} absolute w-[417px] h-[291px] z-0`}
      ></div>
      <div className="relative z-10 text-[#CACACA] text-center">
        <div className="text-[20px] md:text-[48px] lg:text-[48px] lg:px-[250px]">
          Elevate Your Business with Cutting-Edge IT Solutions
        </div>
        <div className="text-[12px] md:text[16px] lg:text-[20px] py-[10px] pt-[10px] md:pt-[12px] lg:pt-[16px]">
          Unlock unparalleled efficiency, security, and growth potential. Join
          our family of satisfied clients today!
        </div>
      </div>
      <div className="flex justify-center mt-[50px] sm:text-sm md:text-lg lg:text-xl">
        <button
          style={{
            border: "2px solid var(--Button-Stroke, #A265F0)",
            background:
              "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
            boxShadow: "0px 4px 25px 0px #2F1C64",
          }}
          className="px-[10px] md:px-[10px] lg:px-[40px] py-[5px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
