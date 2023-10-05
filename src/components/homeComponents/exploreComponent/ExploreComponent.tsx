import { Space_Grotesk } from "@next/font/google";
const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});
export default function ExploreComponent() {
  return (
    <div className={space_grotesk.className} style={{ background: "#0F0F13" }}>
      <div className="text-[48px] lg:py-[100px] md:py-[50px] sm:py-[20px]">
        <div className=" text-center lg:pb-[60px] text=[#E4E4E4]">
          Explore What We Have Done
        </div>
        <div className="flex flex-row justify-center flex-wrap text-[#CACACA]">
          <div className="lg:w-[645px] md:w-[400px] sm:w-[300px] lg:mr-[25px] md:mr-[0px] sm:mr[0px]">
            <div className="lg:w-[645px] md:w-[400px] sm:w-[300px] lg:h-[645px] md:h-[400px] sm:h-[300px] bg-[#1C1928] lg:mr-[25px] md:mr-[0px] sm:mr[0px] rounded-[20px]"></div>
            <div className="mt-[30px]">
              <h1 className="text-[25px]">The Matriach</h1>
              <p className="text-[18px]">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac
                consectetur nulla volutpat libero tortor nam tristique.
              </p>
              <div className="flex mt-[50px] sm:text-sm md:text-lg lg:text-xl">
                <button
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background:
                      "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="sm:px-[10px] md:px-[10px] lg:px-[40px] sm:py-[10px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white"
                >
                  Explore Project
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[645px] md:w-[400px] sm:w-[300px]">
            <div className="lg:w-[645px] md:w-[400px] sm:w-[300px] lg:h-[645px] md:h-[400px] sm:h-[300px] bg-[#1C1928] rounded-[20px]"></div>
            <div className="mt-[30px]">
              <h1 className="text-[25px]">My e-assistant</h1>
              <p className="text-[18px]">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac
                consectetur nulla volutpat libero tortor nam tristique.
              </p>
              <div className="flex mt-[50px] sm:text-sm md:text-lg lg:text-xl">
                <button
                  style={{
                    border: "2px solid var(--Button-Stroke, #A265F0)",
                    background:
                      "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
                    boxShadow: "0px 4px 25px 0px #2F1C64",
                  }}
                  className="sm:px-[10px] md:px-[10px] lg:px-[40px] sm:py-[10px] md:py-[10px] lg:py-[15px] rounded-[20px] color-white"
                >
                  Explore Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
