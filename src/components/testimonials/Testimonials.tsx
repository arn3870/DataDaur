import Image from "next/image";

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
      <div className="flex justify-center">
        <div className="text-center text-[#E4E4E4] text-[48px] lg:w-[50%]">
          Read what our customers say about us
        </div>
      </div>
      <div className="py-[60px] text-[#CACACA] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
        {cardContent.map((slide, index) => (
          <div
            key={index}
            className="rounded-[20px] px-[30px] py-[30px] text-center lg:min-h-[426px]"
            style={{
              background:
                "linear-gradient(143deg, rgba(255, 255, 255, 0.06) -0.03%, rgba(255, 255, 255, 0.00) 100.03%)",
              border: "1px solid var(--Button-Stroke, #A265F0)",
            }}
          >
            <p className="text-[16px]">{slide.content}</p>
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
