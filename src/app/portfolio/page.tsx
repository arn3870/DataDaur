import ElevateBusiness from "@/components/homeComponents/elevateBusiness/ElevateBusiness";
import ExploreComponent from "@/components/homeComponents/exploreComponent/ExploreComponent";
import styles from "../../components/styles/gradients.module.css";

const cardContent = [
  {
    title: "The Matriach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Service",
    imageLink: "/the_matriach.png",
  },
  {
    title: "My e-assistant",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Service",
    imageLink: "/e_assistant_manager.png",
  },
  {
    title: "Health Assesment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Service",
    imageLink: "/health_assesment.png",
  },
  {
    title: "The Matriach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Service",
    imageLink: "/the_matriach.png",
  },
  {
    title: "My e-assistant",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Service",
    imageLink: "/e_assistant_manager.png",
  },
  {
    title: "Health Assesment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Service",
    imageLink: "/health_assesment.png",
  },
];
const heading = "Explore What We Have Done";
export default function index() {
  return (
    <div>
      <ExploreComponent cardContent={cardContent} componentHeading={heading}>
        <div
          className={` ${styles.portfolio_gradient} absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[822px] h-[300px] md:h-[450px] lg:h-[613px]`}
        ></div>
      </ExploreComponent>
      <ElevateBusiness></ElevateBusiness>
    </div>
  );
}
