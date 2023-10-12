"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/coming-soon" ? (
        <div className="relative container md:flex-[9] sm:flex-[6] 2xl:flex-[6] 3xl:flex-1 4xl:flex-[0.85] w-full p-0 m-0"
        style={{zIndex: "2"}}>
          <div className="topbar w-full flex bg-transparent justify-between p-4 pt-[35px] pl-[50px]">
            <Image src="/DataDaur.svg" alt="datadaur" width={132} height={40} />
            <div className="hidden md:flex md:justify-between w-[60%] space-x-4">
              <Link href="/">Home</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/coming-soon">About</Link>
              <Link href="/offers">Offers</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/coming-soon">Blogs</Link>
              <Link href="/coming-soon">Jobs</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="lg:hidden md:hidden relative">
              <button onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Dropdown menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute flex flex-col z-99 top-[80px] right-4 bg-[#14161A] shadow-md rounded-md p-[10px] divide-y">
              <Link href="/">Home</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/">About</Link>
              <Link href="/offers">Offers</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/">Blogs</Link>
              <Link href="/">Jobs</Link>
              <Link href="/contact">Contact</Link>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}
