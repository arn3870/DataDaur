"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  blogsItems: {
    img: string;
    title: string;
    author: string;
  }[];
}

function cleanString(inputString: string) {
  // Replace special characters with empty string
  const cleanedString = inputString.replace(/[^\w\s]/g, "");

  // Replace spaces with hyphens and convert to lowercase
  const finalString = cleanedString.toLowerCase().replace(/\s+/g, "-");

  return finalString;
}

const BlogsItems = ({ blogsItems }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
      {blogsItems.map((item, index) => (
        <Link
          href={{
            pathname: `/blogs/${cleanString(item.title)}`,
            query: { title: item.title, img: item.img, author: item.author },
          }}
          key={index}
        >
          <div className="blog-item cursor-pointer">
            <Image
              src={item.img}
              width={1000}
              height={300}
              style={{ height: "300px", objectFit: "cover" }}
              alt="blog-img"
            />
            <h5 className="mt-4">{item.title}</h5>
            <p className="mt-1 text-[12px] font-normal uppercase tracking-wide text-[#CACACA]">
              {item.author}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default BlogsItems;
