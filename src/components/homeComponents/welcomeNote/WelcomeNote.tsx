import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
});
export default function WelcomeNote() {
  return (
    <div className={space_grotesk.className}>
      <p className=" flex flex-wrap text-[36px] text-[#CACACA] font-normal leading-14 lg:px-[100px] lg:py-[50px]">
        Welcome to Wodatoki, an innovative design and development agency
        committed to transforming ideas into reality. Established in 2021,
        Wodatoki has rapidly become a leading force in the creative industry,
        offering comprehensive solutions to clients from various sectors. With a
        passionate team of designers, developers, and strategists, we are driven
        by a shared vision of delivering exceptional experiences and products
        that leave a lasting impact on our clients and their audiences.
      </p>
    </div>
  );
}
