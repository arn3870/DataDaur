import React from "react";
import HomeSlider from "@/components/homeComponents/homeSlider/HomeSlider";
import ExploreComponent from "@/components/homeComponents/exploreComponent/ExploreComponent";
import WelcomeNote from "@/components/homeComponents/welcomeNote/WelcomeNote";
import OfferedServices from "@/components/homeComponents/servicesComponent/OfferedServices";

export default function index() {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <ExploreComponent></ExploreComponent>
      <WelcomeNote></WelcomeNote>
      <OfferedServices></OfferedServices>
    </div>
  );
}
