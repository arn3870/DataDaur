import Image from "next/image";

export default function ReadyToBuy() {
  return (
    <div className="relative bg-[#0F0F13] px-[20px] md:px-[20px] lg:px-[30px] py-[30px] md:py-[60px] lg:py-[100px]">
      {/* Gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at bottom right, transparent 70%, rgba(66, 34, 159, 1) 100%)",
          filter: "blur(147px)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>
      <div className="relative z-10 text-[#CACACA] text-center">
        <div className="text-[20px] md:text-[48px] lg:text-[48px] lg:px-[250px]">
          Ready to buy this gig?
        </div>
        <div className="text-[12px] md:text[16px] lg:text-[20px] lg:pt-[16px]">
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
          className="px-[10px] md:px-[10px] lg:px-[40px] py-[10px] md:py-[10px] lg:py-[15px] rounded-[20px] text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
