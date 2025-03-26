import React from "react";
import CapAbout from "./componentsf/CapAbout";
import CapLand from "./componentsf/CapLand";
import CapLeasing from "./componentsf/CapLeasing";
import CapProperty from "./componentsf/CapProperty";
import CapEnq from "./componentsf/CapEnq";
import CapDev from "./componentsf/CapDev";
import CapSpot from "./componentsf/CapSpot";
const page = () => {
  return (
    <>
      <CapSpot />
      <CapAbout />
      <CapLand />
      <CapDev />
      <CapLeasing />
      <CapProperty />
      <CapEnq />
    </>
  );
};

export default page;
