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
      <div className="text-[48px] lg:py-[100px] md:py-[50px] sm:py-[20px]">
        <div className=" text-center lg:pb-[60px] text-[#E4E4E4]">
          {componentHeading}
        </div>
        <div className="flex flex-row justify-center flex-wrap text-[#CACACA] gap-5">
          {cardContent.map((card, index) => (
            <div key={index} className="lg:w-[645px] md:w-[400px] sm:w-[300px]">
              <div className="lg:w-[645px] md:w-[400px] sm:w-[300px] lg:h-[645px] md:h-[400px] sm:h-[300px] bg-[#1C1928] rounded-[20px]"></div>
              <div className="mt-[30px]">
                <h1 className="text-[25px]">{card.title}</h1>
                <p className="text-[18px]">{card.description}</p>
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
