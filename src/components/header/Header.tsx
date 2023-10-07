import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative container md:flex-[9] sm:flex-[6] 2xl:flex-[6] 3xl:flex-1 4xl:flex-[0.85] w-full p-0 m-0 overflow-auto">
      <div className="topbar w-full flex bg-transparent items-center justify-between p-4 shadow-md pt-[35px] pl-[50px]">
        <Image src="/DataDaur.svg" alt="datadaur" width={132} height={40} />
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link href="/">About</Link>
        </div>
        <div>
          <Link href="/offers">Offers</Link>
        </div>
        <div>
          <Link href="/testimonials">Testimonials</Link>
        </div>
        <div>
          <Link href="/">Blogs</Link>
        </div>
        <div>
          <Link href="/">Jobs</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
