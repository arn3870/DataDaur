import { Space_Grotesk } from "next/font/google";
import styles from "./home-slider.module.css";
import Image from "next/image";

const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});
export default function HomeSlider() {
  return (
    <div className="flex font-normal">
      <div className={space_grotesk.className}>
        <div className="text-[90px] text-center mt-[60px]">
          Empower your business with Generative Artificial Intelligence
        </div>
        <div className="flex justify-center mt-[50px]">
          <button
            style={{
              borderRadius: "20px",
              border: "2px solid var(--Button-Stroke, #A265F0)",
              background:
                "var(--Button-Filled--Gradient, linear-gradient(89deg, #3E2567 0.92%, #140769 98.29%))",
              boxShadow: "0px 4px 25px 0px #2F1C64",
            }}
            className="px-[40px] py-[15px] rounded-[20px] color-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
