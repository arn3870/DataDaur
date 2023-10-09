import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});

type CardContent = {
  title: string;
  description: string;
  buttonLabel: string;
};

type ExploreComponentProps = {
  cardContent: CardContent[];
  componentHeading: string;
};
export default function ExploreComponent({
  cardContent,
  componentHeading,
}: ExploreComponentProps) {
  return (
    <div className={space_grotesk.className} style={{ background: "#0F0F13" }}>
      <div className="text-[20px] md:text-[48px] lg:text-[48px] py-[20px] lg:py-[100px] md:py-[50px]">
        <div className=" text-center pb-[30px] md:pb-[40px] lg:pb-[60px] text-[#E4E4E4]">
          {componentHeading}
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center text-[#CACACA] gap-5">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="w-[250px] md:w-[400px] lg:w-[645px] overflow-x-hidden"
            >
              <div className=" w-[250px] md:w-[400px] lg:w-[645px] h-[250px] md:h-[400px] lg:h-[645px] bg-[#1C1928] rounded-[20px]"></div>
              <div className="mt-[10px] md:mt-[30px] lg:mt-[30px]">
                <h1 className="text-[10px] md:text-[25px] lg:text-[25px] ">
                  {card.title}
                </h1>
                <p className=" text-[8px] md:text-[16px] lg:text-[18px]">
                  {card.description}
                </p>
                <div className="flex mt-[5px] md:mt-[50px] lg:mt-[50px] text-sm md:text-lg lg:text-xl">
                  <button
                    style={{
                      border: "2px solid var(--Button-Stroke, #A265F0)",
                      background:
                        "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
                      boxShadow: "0px 4px 25px 0px #2F1C64",
                    }}
                    className="px-[5px] md:px-[10px] lg:px-[40px] py-[5px] md:py-[10px] lg:py-[15px] text-[10px] md:text-[18px] lg:text-[18px] rounded-[20px] color-white"
                  >
                    {card.buttonLabel}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
