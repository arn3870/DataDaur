import Image from "next/image";
import styles from "../styles/gradients.module.css";

type CardContent = {
  content: string;
  name: string;
  designation: string;
  image: string;
};

type TestimonialComponentProps = {
  cardContent: CardContent[];
};
export default function Testimonials({
  cardContent,
}: TestimonialComponentProps) {
  return (
    <div className="py-[75px] px-[52px]">
      <div
        className={` ${styles.portfolio_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[822px] h-[300px] md:h-[450px] lg:h-[613px]`}
        style={{ zIndex: "-99" }}
      ></div>
      <div
        className={` ${styles.contact_gradient2} absolute right-0 w-[200px] md:w-[400px] lg:w-[700px] h-[150px] md:h-[250px] lg:h-[450px]`}
      ></div>
      <div className="flex justify-center">
        <div className="text-center text-[#E4E4E4] text-[28px] md:text-[48px] lg:text-[48px] lg:w-[50%]">
          Read what our customers say about us
        </div>
      </div>
      <div className="py-[60px] text-[#CACACA] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
        {cardContent.map((slide, index) => (
          <div
            key={index}
            className={` ${styles.card_animation} rounded-[20px] px-[10px] md:px-[20px] lg:px-[30px] py-[30px] text-center lg:min-h-[426px]`}
            style={{
              background:
                "linear-gradient(143deg, rgba(255, 255, 255, 0.06) -0.03%, rgba(255, 255, 255, 0.00) 100.03%)",
              border: "1px solid var(--Button-Stroke, #A265F0)",
            }}
          >
            <p className="text-[12px] md:text-[12px] lg:text-[16px]">
              {slide.content}
            </p>
            <div className="flex justify-center mt-[30px]">
              <div className="flex flex-row items-center">
                <div className="flex justify-center">
                  <Image
                    src={slide.image}
                    alt="customer"
                    className="rounded-[50%] h-[50px] bg-cover"
                    width={50}
                    height={80}
                  />
                </div>
                <div className="flex flex-col ml-[15px]">
                  <div className="font-[28px]">{slide.name}</div>
                  <div className="font-[16px]">{slide.designation}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
