"use client";
import React from "react";
import styles from "@/components/styles/gradients.module.css";
import Image from "next/image";
import BlogsItems from "@/components/blogsItems/blogsItems";
import { useSearchParams } from "next/navigation";
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
];

const index = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const img = searchParams.get("img");
  const author = searchParams.get("author");
  return (
    <div className="text-white">
      <div
        className={` ${styles.portfolio_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[450px] lg:h-[450px]`}
      ></div>
      <div className="px-[20px] md:px-[30px] lg:px-[52px] pt-[20px] md:pt-[50px] lg:pt-[100px] mb-14">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center gap-10">
          <div>
            <h3 className="md:text-[36px] leading-tight font-normal">
              {title}
            </h3>
            <div className="flex items-center mt-4 gap-2">
              <Image
                src="/blogs/author.jpeg"
                width={34}
                height={34}
                className="w-[34px] h-[34px] object-cover rounded-2xl"
                alt="author"
              />
              <p
                className="text-[12px] font-normal uppercase"
                style={{ letterSpacing: "1.24px" }}
              >
                {author}
              </p>
            </div>
          </div>
          <div>
            <Image
              src={img ? img : "/freehand.png"}
              width={663}
              height={500}
              className="md:ms-auto sm:mx-auto object-cover w-[663px] h-[500px] relative"
              alt="freehand"
            />
          </div>
          <div className="blog-detail col-span-2">
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              At InVision we’re obsessed with improving team productivity. With
              the introduction of the Intelligent Canvas, Freehand unlocked a
              new level of productivity through Smart Workflows. This
              game-changing set of capabilities bridges the gap between
              unstructured and structured work, adds intelligence and automation
              for each step, and strengthens connections with functional tools
              through bi-directional integrations. Every aspect of Freehand is
              geared towards reducing hurdles to bring teams closer together,
              and deliver maximum impact by focusing on getting real work done.
            </p>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              Because of this focus, we’ve been keenly observing how AI and the
              recent innovations of Generative AI have the potential to
              significantly unlock productivity and fundamentally change how
              teams work. Freehand is now ready to take the next leap,
              leveraging the massive opportunity AI presents to help make every
              team member even more productive.
            </p>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              That’s why we’re excited to announce the launch of Freehand AI.
              Built into the fabric of the intelligent canvas, we believe
              Freehand AI takes a major step forward by not just smoothing out
              team workflows, but drastically reducing major steps in process,
              and maximizing the return on your collaboration tooling
              investment.
            </p>

            <div className="detail-video my-14 text-center">
              <h4 className="text-[30px] font-medium leading-7 mb-10">
                Unlock productivity for the whole team
              </h4>
              <iframe
                width="692"
                className="mx-auto"
                height="389"
                src="https://www.youtube.com/embed/uRNm-E4BOes?si=CtwfQvr7e-vgkUww"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              At InVision we’re obsessed with improving team productivity. With
              the introduction of the Intelligent Canvas, Freehand unlocked a
              new level of productivity through Smart Workflows. This
              game-changing set of capabilities bridges the gap between
              unstructured and structured work, adds intelligence and automation
              for each step, and strengthens connections with functional tools
              through bi-directional integrations. Every aspect of Freehand is
              geared towards reducing hurdles to bring teams closer together,
              and deliver maximum impact by focusing on getting real work done.
            </p>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              Because of this focus, we’ve been keenly observing how AI and the
              recent innovations of Generative AI have the potential to
              significantly unlock productivity and fundamentally change how
              teams work. Freehand is now ready to take the next leap,
              leveraging the massive opportunity AI presents to help make every
              team member even more productive.
            </p>

            <h4 className="text-[30px] font-medium leading-7 mt-14">
              Unlock productivity for the whole team
            </h4>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              At InVision we’re obsessed with improving team productivity. With
              the introduction of the Intelligent Canvas, Freehand unlocked a
              new level of productivity through Smart Workflows. This
              game-changing set of capabilities bridges the gap between
              unstructured and structured work, adds intelligence and automation
              for each step, and strengthens connections with functional tools
              through bi-directional integrations. Every aspect of Freehand is
              geared towards reducing hurdles to bring teams closer together,
              and deliver maximum impact by focusing on getting real work done.
            </p>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              Because of this focus, we’ve been keenly observing how AI and the
              recent innovations of Generative AI have the potential to
              significantly unlock productivity and fundamentally change how
              teams work. Freehand is now ready to take the next leap,
              leveraging the massive opportunity AI presents to help make every
              team member even more productive.
            </p>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              That’s why we’re excited to announce the launch of Freehand AI.
              Built into the fabric of the intelligent canvas, we believe
              Freehand AI takes a major step forward by not just smoothing out
              team workflows, but drastically reducing major steps in process,
              and maximizing the return on your collaboration tooling
              investment.
            </p>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              At InVision we’re obsessed with improving team productivity. With
              the introduction of the Intelligent Canvas, Freehand unlocked a
              new level of productivity through Smart Workflows. This
              game-changing set of capabilities bridges the gap between
              unstructured and structured work, adds intelligence and automation
              for each step, and strengthens connections with functional tools
              through bi-directional integrations. Every aspect of Freehand is
              geared towards reducing hurdles to bring teams closer together,
              and deliver maximum impact by focusing on getting real work done.
            </p>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              Because of this focus, we’ve been keenly observing how AI and the
              recent innovations of Generative AI have the potential to
              significantly unlock productivity and fundamentally change how
              teams work. Freehand is now ready to take the next leap,
              leveraging the massive opportunity AI presents to help make every
              team member even more productive.
            </p>
            <div className="my-14 text-center">
              <h4 className="text-[30px] font-medium leading-7">
                Go from messy to structured in seconds
              </h4>
              <Image
                src="/blogs/detail-blog.png"
                width={692}
                height={422}
                className="mx-auto mt-8"
                alt="detail"
              />
            </div>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              At InVision we’re obsessed with improving team productivity. With
              the introduction of the Intelligent Canvas, Freehand unlocked a
              new level of productivity through Smart Workflows. This
              game-changing set of capabilities bridges the gap between
              unstructured and structured work, adds intelligence and automation
              for each step, and strengthens connections with functional tools
              through bi-directional integrations. Every aspect of Freehand is
              geared towards reducing hurdles to bring teams closer together,
              and deliver maximum impact by focusing on getting real work done.
            </p>
            <p
              className="text-[18px] font-normal text-[#CACACA] mt-6"
              style={{ lineHeight: "34px" }}
            >
              Because of this focus, we’ve been keenly observing how AI and the
              recent innovations of Generative AI have the potential to
              significantly unlock productivity and fundamentally change how
              teams work. Freehand is now ready to take the next leap,
              leveraging the massive opportunity AI presents to help make every
              team member even more productive.
            </p>
          </div>
          <div className="md:col-span-2 mt-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="leading-8 font-bold text-[24px]">
                Most-Read Articles
              </h4>
            </div>
            <BlogsItems blogsItems={spotLights} />
          </div>
        </div>
      </div>
      <ElevateBusiness />
    </div>
  );
};
export default index;
