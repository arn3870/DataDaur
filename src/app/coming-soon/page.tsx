import Image from "next/image";
import Link from "next/link";
import underConstruction from "../../../public/work-in-progress.png";
export default function index() {
  return (
    <div>
      <div className=" flex flex-col h-screen justify-center items-center text-white text-[68px]">
        <Image
          src={underConstruction}
          alt="under costruction"
          height={250}
          width={200}
        ></Image>
        <div className="flex justify-center mt-[50px] sm:text-sm md:text-lg lg:text-xl">
          <button
            style={{
              border: "2px solid var(--Button-Stroke, #A265F0)",
              background:
                "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
              boxShadow: "0px 4px 25px 0px #2F1C64",
            }}
            className="px-[20px] md:px-[30px] lg:px-[50px] py-[10px] md:py-[10px] lg:py-[10px] rounded-[20px] color-white"
          >
            <Link href="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
