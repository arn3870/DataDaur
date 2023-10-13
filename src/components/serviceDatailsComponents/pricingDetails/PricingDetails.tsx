export default function PricingDetails() {
  return (
    <div
      className="w-[300px] h-fit p-5 mb-[10px] text-white"
      style={{
        borderRadius: "10px",
        border: "1px solid var(--Button-Stroke, #A265F0)",
        background:
          "var(--Cards-Gradient, linear-gradient(143deg, rgba(255, 255, 255, 0.06) 0.03%, rgba(255, 255, 255, 0.00) 100%))",
      }}
    >
      <div className="text-[16px]">Starting from</div>
      <div className="pb-[20px] md:pb-[45px] lg:pb-[60px] text-[14px] md:text-[18px] lg:text-[24px]">
        $250
      </div>
      <div>Number of pages</div>
      <div className="pb-[20px] md:pb-[45px] lg:pb-[60px] text-[14px] md:text-[18px] lg:text-[24px]">
        $250
      </div>
      <div>Project Timeline</div>
      <div className="pb-[20px] md:pb-[45px] lg:pb-[60px] text-[14px] md:text-[18px] lg:text-[24px]">
        $250
      </div>
      <div>Revisions</div>
      <div className="pb-[20px] md:pb-[45px] lg:pb-[60px] text-[14px] md:text-[18px] lg:text-[24px]">
        $250
      </div>
      <div>Additional Page Cost</div>
      <div className="pb-[20px] md:pb-[45px] lg:pb-[60px] text-[14px] md:text-[18px] lg:text-[24px]">
        $250
      </div>
      <button
        className="px-[24px] py-[16px] w-full"
        style={{
          borderRadius: "20px",
          border: "2px solid #A265F0",
          background: "linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%)",
          boxShadow: "0px 4px 25px 0px #2F1C64",
        }}
      >
        Buy this Gig
      </button>
    </div>
  );
}
