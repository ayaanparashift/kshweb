import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import MapSection from "./componentsf/MapSection";
import MapCard from "./componentsf/MapCard";
// import MapSection from "./componentsf/MapSection";

const page = () => {
  return (
    <div className="bg-[#EEF0F3]">
      <ParkinSpot />
      <TabMenu />
      <ParkOverview />
      <MapSection />
      <ParkInfo />
      <CharSlide />
      <PhVdslider />
      <LastSw />
    </div>
  );
};

export default page;
