import React from "react";
import styles from "@/components/styles/gradients.module.css";
import Image from "next/image";
import BlogsItems from "@/components/blogsItems/blogsItems";
import Link from "next/link";
import ArrowRight from "../../../../public/Icons/arrow_right.svg";
import ElevateBusiness from "@/components/homeComponents/elevateBusiness/ElevateBusiness";

const spotLights = [
  {
    img: "/blogs/surveymonkey.png",
    title: "Visualize every link on the canvas with link previews",
    author: "Kosta Bolgov",
  },
  {
    img: "/freehand.png",
    title: "Freehand AI: The next step forward for the Intelligent Canvas",
    author: "Kosta Bolgov",
  },
  {
    img: "/blogs/razorfish.png",
    title:
      "How Razorfish unlocked productivity and improved collaboration with Freehand",
    author: "Diana Buccella",
  },
  {
    img: "/blogs/dev1.png",
    title:
      "What’s New in Freehand: An Intelligent Canvas like you’ve never seen it before",
    author: "Diana Buccella",
  },
  {
    img: "/blogs/dev2.png",
    title:
      "Four new Freehand features to uplevel your sprint planning, retros, kick-offs, and much more",
    author: "Emilie Vachon",
  },
  {
    img: "/blogs/dev3.png",
    title:
      "Take your next team event from boring to roaring with these new Freehand team building features",
    author: "Emilie Vachon",
  },
  {
    img: "/blogs/taste1.png",
    title:
      "Sprint Planning in Freehand: Smart Workflows for better task management",
    author: "Jake Reed",
  },
  {
    img: "/blogs/taste2.png",
    title: "Switching made easy. Debuting Freehand’s Whiteboard Importer.",
    author: "Evan Doyle",
  },
  {
    img: "/blogs/taste3.png",
    title: "Freehand + Figma: A perfect match",
    author: "Diana Buccella",
  },
];

const index = () => {
  return (
    <div className="text-white">
      <div
        className={` ${styles.portfolio_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[450px] lg:h-[450px]`}
      ></div>
      <div className="px-[20px] md:px-[30px] lg:px-[52px] mb-14">
        <div className="text-center py-[20px] md:py-[50px] lg:py-[80px]">
          <h1 className="lg:text-[60px] font-bold">Small Business Spotlight</h1>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center gap-10">
          <div className="md:col-span-2 mt-8">
            <BlogsItems blogsItems={spotLights} />
          </div>
        </div>
      </div>
      <ElevateBusiness />
    </div>
  );
};
export default index;
