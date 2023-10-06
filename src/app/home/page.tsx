import React from "react";
import HomeSlider from "@/components/homeComponents/homeSlider/HomeSlider";
import ExploreComponent from "@/components/homeComponents/exploreComponent/ExploreComponent";
import WelcomeNote from "@/components/homeComponents/welcomeNote/WelcomeNote";
import OfferedServices from "@/components/homeComponents/servicesComponent/OfferedServices";
import ReviewSlider from "@/components/homeComponents/reviewSlider/ReviewSlider";
import ElevateBusiness from "@/components/homeComponents/elevateBusiness/ElevateBusiness";

export default function index() {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <ExploreComponent></ExploreComponent>
      <WelcomeNote></WelcomeNote>
      <OfferedServices></OfferedServices>
      <ReviewSlider></ReviewSlider>
      <ElevateBusiness></ElevateBusiness>
    </div>
  );
}
