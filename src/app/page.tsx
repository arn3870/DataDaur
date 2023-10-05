import Image from "next/image";

export default function Header() {
  return (
    <div className="relative container md:flex-[9] sm:flex-[6] 2xl:flex-[6] 3xl:flex-1 4xl:flex-[0.85] w-full p-0 m-0 overflow-auto">
      <div className="topbar w-full flex bg-transparent items-center justify-between p-4 shadow-md pt-[35px] pl-[50px]">
        <Image src="/DataDaur.png" alt="datadaur" width={132} height={40} />
          <div>Home</div>
          <div>Portfolio</div>
          <div>About</div>
          <div>offers</div>
          <div>Testimonoals</div>
          <div>Blogs</div>
          <div>Jobs</div>
          <div>Contact</div>
      </div>
    </div>
  );
}
