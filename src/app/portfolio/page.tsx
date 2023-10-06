import ElevateBusiness from "@/components/homeComponents/elevateBusiness/ElevateBusiness";
import ExploreComponent from "@/components/homeComponents/exploreComponent/ExploreComponent";

const cardContent = [
  {
    title: "The Matriach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Project",
  },
  {
    title: "My e-assistant",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Project",
  },
  {
    title: "The Matriach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Project",
  },
  {
    title: "My e-assistant",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Project",
  },
  {
    title: "The Matriach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Project",
  },
  {
    title: "My e-assistant",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Project",
  },
];

export default function index() {
  return (
    <div>
      <ExploreComponent cardContent={cardContent}></ExploreComponent>
      <ElevateBusiness></ElevateBusiness>
    </div>
  );
}
